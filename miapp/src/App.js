//Importar archivos
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Clientes from "./components/Clientes";
import NuevoCliente from "./components/NuevoCliente";
import Editarcliente from "./components/EditarCliente";

//Funcion principal
function App() {
  //State primer parametro es el state y el segundo es el modificador del state
  // const  [Variable_Que_Toma_el_Estado, Funcion_Que modifica el estade de la variable] = useState(Valor de la variable o estado)
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={Clientes} />
          <Route exact path="/nuevoCliente" component={NuevoCliente} />
          <Route exact path="/editarCliente/:id" component={Editarcliente} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
