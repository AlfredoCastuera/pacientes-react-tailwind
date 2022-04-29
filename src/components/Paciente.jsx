import React from "react";

const Paciente = ({ paciente, removeClient,selectClient,changeUpdateMode }) => {
  const { mascota, propietario, email, alta, síntomas, id } = paciente;
  return (
    <div className="flex flex-col lg:flex-row justify-between m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <div>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre de mascota:{" "}
          <span className="font-normal normal-case">{mascota}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre de propietario:{" "}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de alta: <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: <span className="font-normal normal-case">{síntomas}</span>
        </p>
      </div>

      <div className="flex lg:flex-col gap-2 justify-around lg:w-1/3">
        <button
          className="w-full py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded"
          type="button"
          onClick={() => {
            selectClient(paciente);
            changeUpdateMode(true)
          }}
        >
          Actualizar
        </button>
        <button
          className="w-full py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
          type="button"
          onClick={() => {
            removeClient(id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
