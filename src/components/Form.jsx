import React,{ useState,useEffect }  from "react";
import Alerta from "./Alerta";
import generateId from "../utils/generateId"
import isEmptyObject from "../utils/isEmptyObject";
const Form = ({addClient,update,client,updateClient,setUpdate,setClient}) => {
  const initialValues = {
    mascota:"",
    propietario:"",
    email:"",
    alta:"",
    síntomas:""
  }
  const [form,setForm] = useState(initialValues)
  const [error,setError] = useState(false)

  useEffect(()=>{
    if(!isEmptyObject(client)){
      console.log(client)
      setForm(client)
    }
  },[client])

  const handleFormChange = e => {
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }
  const submitForm = (e) =>{
    e.preventDefault()
    if(update){
      alert(JSON.stringify(form))
      updateClient(form)
      setForm(initialValues)
      setUpdate(false)
      return
    }

    if(!Object.values(form).includes("")){
      console.log(form)
      addClient({...form,id:generateId()})
      setForm(initialValues)
    } 
    else{
      setError(true)
      console.log("ocurrio un error")
      setTimeout(()=>{
        setError(false)
      },2000)
    }
  }
  return <div className="w-full md:w-1/2 lg:w-2/5 font-black text-3xl text-center">
    <h2 className="font-black text-3xl text-center">
      Seguimiento Pacientes
    </h2>
    <p className="text-lg font-normal mt-5 text-center mb-10">
      Añade Pacientes y {""}
      <span className="text-indigo-600 font-bold">Administralos</span>
    </p>
    <form onSubmit={submitForm} className="bg-white shadow-md rounded-lg text-base py-10 px-5 mb-10">
      {error && <Alerta>Todos los campos son obligatorios</Alerta>}
      <div className="mb-5">
        <label className="block font-bold uppercase text-left" htmlFor="mascota">Nombre de Mascota</label>
        <input 
          className="text-left w-full p-2 mt-2 border placeholder-gray-400 rounded"
          id="mascota" 
          type="text"
          placeholder="Nombre de la mascota"
          name="mascota"
          onChange={handleFormChange}
          value={form.mascota}
          />
      </div>
      <div className="mb-5">
        <label className="block font-bold uppercase text-left" htmlFor="propietario">Nombre de Propietario</label>
        <input 
          className="text-left w-full p-2 mt-2 border placeholder-gray-400 rounded"
          id="propietario" 
          type="text"
          placeholder="Nombre del propietario"
          name="propietario"
          onChange={handleFormChange}
          value={form.propietario}
          />
      </div>
      <div className="mb-5">
        <label className="block font-bold uppercase text-left" htmlFor="email">Email</label>
        <input 
          className="text-left w-full p-2 mt-2 border placeholder-gray-400 rounded"
          id="email" 
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleFormChange}
          value={form.email}
          />
      </div>
      <div className="mb-5">
        <label className="block font-bold uppercase text-left" htmlFor="alta">Fecha de alta</label>
        <input 
          className="text-left w-full p-2 mt-2 border placeholder-gray-400 rounded"
          id="alta" 
          type="date"
          placeholder="Fecha de alta"
          name="alta"
          onChange={handleFormChange}
          value={form.alta}
          />
      </div>
      <div>
        <label className="block font-bold uppercase text-left" htmlFor="síntomas">Síntomas</label>
        <textarea 
          className="text-left w-full p-2 mt-2 border placeholder-gray-400 rounded"
          id="síntomas" 
          placeholder="Describe los síntomas"
          name="síntomas"
          onChange={handleFormChange}
          value={form.síntomas}
          />
      </div>
      <input type="submit" className="bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer w-full p-2 mt-5 text-white uppercase font-bold rounded" value={update? "Actualizar paciente" :"Agregar paciente"}/>
    </form>
    
  </div>;
};

export default Form;
