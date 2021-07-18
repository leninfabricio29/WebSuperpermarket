import './stylesLogin.css'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
function Login() {
  return(
    <body>
      <div className="caja">
      <SupervisorAccountRoundedIcon style={{ fontSize: 50 }}  className="icon-user"/>
        <h3>Iniciar sesion </h3>
        <form>
          <div>
          <input placeholder="Ingrese su usuario" type="text"/>
          </div>
          <div>
          <input placeholder="Ingrese su contraseña" type="password"/>
          </div>
          <button type="submit"> Ingresar </button>
        </form>
      </div>
    </body>
  );
}

export default Login;