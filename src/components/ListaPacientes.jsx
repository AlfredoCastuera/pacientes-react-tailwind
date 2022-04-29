import React from "react";
import Paciente from "./Paciente";
const ListaPacientes = ({
    clients,
    removeClient,
    selectClient,
    
    changeUpdateMode
    }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
      <p className="text-lg font-normal mt-5 text-center mb-10">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {
        clients.map((paciente)=>{
            return <Paciente 
                key={paciente.id} 
                paciente={paciente}
                removeClient ={removeClient}
                selectClient={selectClient}
                changeUpdateMode={changeUpdateMode}
                />
        })
      }
   
    </div>
  );
};

export default ListaPacientes;
