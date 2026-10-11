# Tarea: Mi componente interactivo 

## Componente elegido

Gestor de Tareas Interactivo (To-Do List con prioridades).

## Version 1: solo DOM

- **Qué agregué:** Creación e inserción directa de un elemento `li` dinámico en la lista mediante JavaScript.
- **Por qué:** Para validar la selección del elemento del DOM (`#listaTareas`) y verificar la creación/renderizado de nodos.
- **Qué cambió:** La página muestra una tarea inicial fija insertada dinámicamente al cargar la interfaz.

```js
const listaTareas = document.querySelector("#listaTareas");

const li = document.createElement("li");
li.textContent = "Estudiar para el examen de DOM - Prioridad: Alta";
listaTareas.appendChild(li);
```

## Version 2: con eventos

- **Qué agregué:** Escuchadores de eventos para submit (formulario), input (campo de texto) y click (botones de borrar y completar dinámicos), junto con un mensaje de validación visible en la página.
- **Por qué:** Para permitir que el usuario agregue, valide y elimine sus propias tareas de forma interactiva sin recargar la página.
- **Qué cambió:** La página responde a las acciones del usuario, muestra alertas rojas si el campo está vacío, limpia el mensaje de error al escribir y permite tachar o eliminar tareas individualmente.

## Version 3: con clases y objetos 

- **Qué agregué:** La clase Tarea con el constructor, tres atributos (titulo, prioridad, completada) y dos métodos (alternarEstado() y obtenerFormato()).

- **Por qué:** Para organizar el proyecto con Programación Orientada a Objetos, manteniendo la lógica y el estado de los datos separados de la manipulación visual.

- **Qué cambió:** Cada nueva tarea creada se procesa como un objeto instanciado, actualizando de forma limpia su texto e interfaz tras cada acción del usuario.

## Donde uso DOM, eventos y objetos 

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
|DOM |const listaTareas = document.querySelector("#listaTareas");|Selecciona el contenedor de la lista para agregar o remover elementos HTML dinámicamente|
|Evento|formTarea.addEventListener("submit", (e) => { ... });|Escucha cuando el usuario presiona "Agregar" para procesar el formulario sin recargar la página.|
|Objeto|const nuevaTarea = new Tarea(txtTitulo.value, selectPrioridad.value);|Instancia una nueva tarea utilizando la clase Tarea para administrar sus atributos y métodos propios.|

## Pruebas realizadas

| Accion | Resultado esperado | Resultado obtenido |Cumple(Si/No)|
|--------|--------------------|--------------------|-------------|
|Enviar el formulario vacío|Muestra mensaje rojo "El título de la tarea no puede estar vacío."|Aparece el mensaje en rojo bajo el formulario|Si|
|Escribir en el input tras error|El mensaje de error desaparece en vivo|El mensaje se elimina instantáneamente al presionar una tecla|Si|
|Agregar "Estudiar JS" con prioridad Alta|Se agrega la tarea a la lista con estado "(Pendiente)"|Aparece el nuevo ítem li con los datos formateados correctamente|Si|
|Hacer clic en "Marcar / Desmarcar"|Cambia a "(Completada)" y se aplica texto tachado|El texto cambia de estado y se aplica el estilo visual|Si|
|Hacer clic en "Borrar"|Elimina la tarea correspondiente de la lista|El elemento li se remueve completamente del DOM|Si|

## Por que disene asi mi clase

Diseñé la clase Tarea con los atributos titulo, prioridad y completada para concentrar en un solo lugar la información requerida de cada tarea. Agregué los métodos alternarEstado() y obtenerFormato() para permitir que la tarea modifique de forma autónoma su propio estado booleano y genere su representación textual sin mezclar la lógica de los datos con la manipulating directa del DOM.