import React from 'react'

const Alerta = ({children}) => {
  return (
    <p className="bg-red-500 text-white p-3 mb-5 rounded">{children}</p>
  )
}

export default Alerta