import React, { Fragment, useState, useEffect } from "react";
import Cliente from "./Cliente";
import Axios from "axios";
const Clientes = () => {
  //State
  const [clientes, guardarCliente] = useState([]);
  const consultarAPI = () => {
    Axios.get("http://localhost:5000/clientes")
      .then((res) => {
        guardarCliente(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Fragment>
      {/* Tabla de clientes */}
      <table className="table mt-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Empresa</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              key={cliente._id}
              _id={cliente._id}
              nombre={cliente.nombre}
              apellido={cliente.apellido}
              empresa={cliente.empresa}
              email={cliente.email}
              telefono={cliente.telefono}
              consultarAPI={consultarAPI}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Clientes;
