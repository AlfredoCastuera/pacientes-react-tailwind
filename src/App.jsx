
import Header from "./components/Header"
import Form from "./components/Form"
import ListaPacientes from "./components/ListaPacientes"
import { useState, useEffect } from "react"
import useLocalStorage from "./hooks/useStorage"
function App() {
  // const [clients,setClients] = useState([])
  const [client,setClient] = useState({})
  const [update,setUpdate] = useState(false)
  const [clients, setClients] = useLocalStorage("clients", []);
    


  const addClient = (client) => {
    setClients([...clients,client])
  }
  const removeClient = (id) => {
    setClients(clients.filter(client=>client.id!==id))
  }
  const selectClient = (client) => {
    setClient(client)
  }
  const changeUpdateMode = () => {
    console.log("quieres actualizar")
    setUpdate(true)
  }
  const updateClient = (values) =>{
    setClients(clients.map(item=>{
      return item.id === client.id ? values : item
    }))
  }
  

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="container  mt-12 flex flex-col md:flex-row"> 
        <Form 
          addClient={addClient}
          update={update}
          client={client}
          updateClient={updateClient}
          setUpdate={setUpdate}
          setClient={setClient}
          />
        <ListaPacientes 
          clients={clients} 
          removeClient={removeClient}
          selectClient={selectClient}
          changeUpdateMode={changeUpdateMode}
          />
      </div>
    </div>
  )
}

export default App
