const checkbox = document.getElementById("toggle-switch");

const firebaseConfig = {
  apiKey: "AIzaSyARTSgtH4WZWHr9eh67uedbGCkdteHXPKk",
  authDomain: "esp32-on-off-1eb44.firebaseapp.com",
  databaseURL: "https://esp32-on-off-1eb44-default-rtdb.firebaseio.com",
  projectId: "esp32-on-off-1eb44",
  storageBucket: "esp32-on-off-1eb44.firebasestorage.app",
  messagingSenderId: "796463390807",
  appId: "1:796463390807:web:b90e3c34d15828ad85c312"
};

const email = "abc@gmail.com";
const password = "123456789";

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Funciones para cambiar el estado visual
function Encendido() {
  document.getElementById('estado').innerHTML = "ENCENDIDO";
  document.body.style.backgroundColor = "#f7f7f0";
  document.body.style.color = "#2d405f";
  document.getElementById("foco").src = "img/foco_encendido.png";
}

function Apagado() {
  document.getElementById('estado').innerHTML = "APAGADO";
  document.body.style.backgroundColor = "#2d405f";
  document.body.style.color = "#f7f7f0";
  document.getElementById("foco").src = "img/foco_apagado.png";
}

// Login en Firebase
firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => {
    alert("¡Login exitoso!");

    // Registrar listener del checkbox **después de login exitoso**
    checkbox.addEventListener('change', (e) => {
      console.log('Estado:', e.target.checked);
      if (e.target.checked) {
        Encendido();
        db.ref("/").update({ led: true });
      } else {
        Apagado();
        db.ref("/").update({ led: false });
      }
    });

  })
  .catch(err => {
    alert("Error: " + err.message);
  });


