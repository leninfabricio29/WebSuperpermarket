import Formulario from "./components/FormularioProducto/Formulario";
import Login  from "./components/FormularioLogin/Login";
import Tabla from "./components/TablaProductos/Tabla"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/registro" exact component={Formulario}/>
        <Route path="/listar" exact component={Tabla}/>
      </Switch>
    </Router>
  );
}
export default App;
