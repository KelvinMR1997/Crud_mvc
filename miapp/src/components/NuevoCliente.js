import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

//se usa props como parametro para poder usar props.history.goBack();
const NuevoCliente = (props) => {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    telefono: "",
  });

  //Guardar datos en el state
  const handleUpdate = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:5000/clientes", cliente)
      .then(() => {
        Swal.fire("¡Excelente!", "Cliente añadido con exito", "success");
        props.history.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {/* Formularioi de envio */}
      <div className="container">
        <form className="pt-5" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="nombre">Nombre</label>
              <input
                name="nombre"
                onChange={handleUpdate}
                type="text"
                className="form-control"
                id="nombre"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="apellido">Apellido</label>
              <input
                name="apellido"
                onChange={handleUpdate}
                type="text"
                className="form-control"
                id="apellido"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Empresa">Empresa</label>
            <input
              name="empresa"
              onChange={handleUpdate}
              type="text"
              className="form-control"
              id="Empresa"
              placeholder="Enterprise"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
              name="email"
              onChange={handleUpdate}
              type="email"
              className="form-control"
              id="email"
              placeholder="correo@corre.com"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="telefono">Telefono</label>
              <input
                name="telefono"
                onChange={handleUpdate}
                type="number"
                className="form-control"
                id="telefono"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default NuevoCliente;
