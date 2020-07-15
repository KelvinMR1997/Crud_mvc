const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

module.exports = function () {
  //Agregando clientes via POST
 router.post('/clientes', clienteController.nuevoCliente );

 //Mostrar todos los clientes
 router.get('/clientes', clienteController.mostrarClientes );

// mostrar cliente por id
router.get('/clientes/:idCliente', clienteController.mostrarCliente );

//Actualizar un cliente
router.put('/clientes/:idCliente', clienteController.actualizarCliente );

//Eliminar un cliente por id
router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

  return router;
}