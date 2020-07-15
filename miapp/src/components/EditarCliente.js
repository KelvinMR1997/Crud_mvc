import React, { useState, useEffect } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

//se usa props como parametro para poder usar props.history.goBack();
const EditarCliente = (props) => {
  const id = props.match.params.id;
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    telefono: "",
  });

  const handleUpdate = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(
    () => {
      //Peticion de tipo get
      Axios.get(`http://localhost:5000/clientes/${id}`).then((res) => {
        setCliente(res.data);
      });
      console.log('Hola, perra');
    },
    /*Esta mondá es para que la peticion al servidor se realice una sola vez*/ 
    [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.put(`http://localhost:5000/clientes/${id}`, cliente)
      .then(() => {
        Swal.fire("¡Excelente!", "Cliente editado con exito", "success");
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
                value={cliente.nombre}
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
                value={cliente.apellido}
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
              value={cliente.empresa}
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
              value={cliente.email}
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
                value={cliente.telefono}
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

export default EditarCliente;
