// Versión 1: Seleccionar e insertar elementos en el DOM manualmente
const listaTareas = document.querySelector("#listaTareas");

const li = document.createElement("li");
li.textContent = "Estudiar para el examen de DOM - Prioridad: Alta";
listaTareas.appendChild(li);