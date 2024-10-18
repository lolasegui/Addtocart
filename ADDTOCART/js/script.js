import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const input = document.getElementById("inputField");
const lola = document.getElementById("afegir")
const lista = document.getElementById("llista");

const appSettings = {
    databaseURL: "https://addtocart-c7fdc-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const tasks = ref(baseDades, "tareas");


lola.addEventListener("click", function() {
    push(tasks, input.value)
    lista.innerHTML += `<li>${input.value}</li>`;
    input.value = ""
})