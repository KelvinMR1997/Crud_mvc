const Clientes = require('../models/Clientes');

//Agrega un nuevo cliente
exports.nuevoCliente = async (req, res) => {
    const cliente = new Clientes(req.body);

    try {
        //Almacenar el registr
        await cliente.save();
        res.json({ mensaje: 'Se agregó un nuevo cliente' });
    } catch (error) {
        //En caso de error console.log next
        console.log(error);
        next();
    }

}

//Mostrar todos los clientes
exports.mostrarClientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
            next();
        }
    }


//Mostrar cliente por el id

exports.mostrarCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);

    if (!cliente) {
        res.json({ mensaje: 'Cliente inexistente!' });
    }
    //MOstrar el cliente
    res.json(cliente);
}

//Actualizar un cliente por su Id

exports.actualizarCliente = async (req, res, next) => {
    try{
        const cliente = await Clientes.findOneAndUpdate({ _id : req.params.idCliente },
            req.body, {
                new : true
            });
            res.json(cliente);
    }catch(error){
        console.log(error);
        next();
    }
}

//Eliminar cliente por id

exports.eliminarCliente = async (req, res, next) => {
  try {
      await Clientes.findOneAndDelete({_id : req.params.idCliente});
      res.json({mensaje : 'El cliente se ha eliminado'});
  } catch (error) {
      console.log(error);
      next();
  }  
}
