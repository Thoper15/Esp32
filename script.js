const checkbox = document.getElementById("toggle-switch")
const firebaseConfig = {
  apiKey: "AIzaSyARTSgtH4WZWHr9eh67uedbGCkdteHXPKk",
  authDomain: "esp32-on-off-1eb44.firebaseapp.com",
  databaseURL: "https://esp32-on-off-1eb44-default-rtdb.firebaseio.com",
  projectId: "esp32-on-off-1eb44",
  storageBucket: "esp32-on-off-1eb44.firebasestorage.app",
  messagingSenderId: "796463390807",
  appId: "1:796463390807:web:b90e3c34d15828ad85c312"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
function Encendido() {
  document.getElementById('estado').innerHTML = "ENCENDIDO"
  document.body.style.backgroundColor = "#f7f7f0"
  document.body.style.color = "#2d405f"
  document.getElementById("foco").src = "img/foco_encendido.png"
}
function Apagado() {
  document.getElementById('estado').innerHTML = "APAGADO"
  document.body.style.backgroundColor = "#2d405f"
  document.body.style.color = "#f7f7f0"
  document.getElementById("foco").src = "img/foco_apagado.png"
}
checkbox.addEventListener('change', (e) => {
  // e.target.checked es true/false
  console.log('Estado:', e.target.checked);
  if (e.target.checked) {
    Encendido()
    db.ref("/").update({ led: true });
  } else {
    Apagado()
    db.ref("/").update({ led: false });
  }
});