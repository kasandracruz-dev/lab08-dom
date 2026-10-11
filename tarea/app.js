// Versión 1: Seleccionar e insertar elementos en el DOM manualmente

const formTarea = document.querySelector("#formTarea");
const txtTitulo = document.querySelector("#txtTitulo");
const selectPrioridad = document.querySelector("#selectPrioridad");
const listaTareas = document.querySelector("#listaTareas");
const mensajeError = document.querySelector("#mensajeError");

txtTitulo.addEventListener("input", () => {
  if (txtTitulo.value.trim() !== "") {
    mensajeError.textContent = "";
  }
});

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();

  if (txtTitulo.value.trim() === "") {
    mensajeError.textContent = "El título de la tarea no puede estar vacío.";
    return;
  }

  const li = document.createElement("li");
  const spanTexto = document.createElement("span");
  spanTexto.textContent = `${txtTitulo.value} [${selectPrioridad.value}]`;

  const btnCompletar = document.createElement("button");
  btnCompletar.textContent = "Completar";

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Borrar";

  btnCompletar.addEventListener("click", () => {
    spanTexto.classList.toggle("completada");
  });

  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(spanTexto);
  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  formTarea.reset();
});