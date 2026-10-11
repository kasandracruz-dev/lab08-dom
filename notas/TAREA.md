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

## Donde uso DOM, eventos y objetos 

## Pruebas realizadas

## Por que disene asi mi clase
