import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button id="button" onClick={notificacion()}>
            Enviar notificación
        </button> 
        
      </header>       
    </div>
  );
}



// Creamos la función para lanzar las notificaciones, la cual recibe 3 parámetros, el titulo, el mensaje y el icono.
        /**
         * Lanza notificaciones de escritorio al usuario
         * @param {String} titulo 
         * @default "Titulo"
         * 
         * @param {String} mensaje
         * @default "Mensaje de la notificación"
         * 
         * @param {String} icono
         * @default "notificacion.png"
         * 
         * @return {void}
         */

function notificacion(titulo = "SOLICITUD DE VIAJE", mensaje = "Un usuario esta solicitando permiso!!!", icono = "notificacion.png") {
  // Se crea la variable notificacion sin iniciarla
  var notificacion;
  // Se verifica el soporte de notificaciones en el navegador
  if (!("Notification" in window)) {
      alert("Notificaciones no soportadas");

  }else if(Notification.requestPermission === "granted"){
      // Envía la notificación cuando esta autorizado en el navegador
              notificacion = new Notification(titulo,{body: mensaje, icon: icono});
  }else if(Notification.requestPermission !== "denied"){
      // Solicita el permiso cuando este esta en default, para recibir las notificaciones
      Notification.requestPermission(function(permission){
          if(permission === "granted"){
              notificacion = new Notification(titulo,{body: mensaje, icon: icono});
          }
      });
  }
  console.log("x");
}

export default App;
