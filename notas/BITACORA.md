# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. Navegador usado: (escribe aqui cual usaste)

##	Ejercicio	2:	Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola |Cambia el texto del título en el momento en que presionas Enter en la consola |No |
| textContent desde app.js |El título cambia permanentemente a "Hola TECSUP" |Si |
| style.color |El texto del título cambia a color azul | Si|
| classList.add |El fondo del párrafo cambia a amarillo desvanecido |Si |
| createElement + appendChild|Agrega un nuevo elemento `<li>JavaScript</li>` al final de la lista |Si|

##	Ejercicio	3:	Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click |Hacer un clic izquierdo sobre el botón |Suma +1 |
| dblclick |Hacer doble clic sobre el botón |Suma +1 por cada doble clic |
| mouseover |pasar el puntero del mouse por encima del botón |Suma +1 cada vez que el mouse entra|

- `evento.type` mostró el tipo de evento que se ejecutó (por ejemplo, `"click"`).
- `evento.target` mostró el elemento HTML exacto que recibió la acción (el elemento `<button id="btnSumar">`).

##	Ejercicio	4:	Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre|El texto en la pantalla actualiza inmediatamente la frase "Hola, ..." mostrando el nombre que se escribe en tiempo real|No |
| Enviar sin preventDefault |La página parpadea y se recarga de golpe, borrando los datos del formulario y reiniciando el estado |Si |
| Enviar con preventDefault, correo sin @ |Muestra el mensaje "Correo no valido: falta @" formateado en texto rojo |No |
| Enviar con preventDefault, correo con @ |Muestra el mensaje "Enviado: " seguido de la dirección de correo ingresada |No |

##	Ejercicio	5:	Clases y objetos

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop |Laptop  |2500 |Laptop - S/2500.00 |1875 |
| mouse |Mouse |45 |Mouse - S/45.00|33.75|
| teclado |Teclado |120 |Teclado - S/120.00| 90|
| monitor |Monitor |680|Monitor - S/680.00 |510 |

- **Reutilización y escalabilidad:** La clase actúa como una plantilla única, permitiendo crear múltiples productos con los mismos atributos y métodos sin duplicar código.
- **Mantenimiento y dinamismo:** Permite agregar o modificar productos dinámicamente desde JavaScript y actualizar la interfaz automáticamente sin tener que editar el HTML a mano.

##	Ejercicio	6:	DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 |12.50 |Si|
| + Lapicero 3.20 |15.70 |Si|
| + Mochila 89.90 |105.60 |Si |
| Sin Number() |No calcula, muestra error en la consola |No |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|-------|----------------------------------|----------------|
| DOM |const listCarrito = document.querySelector("#listaCarrito"); | Selecciona el elemento de la lista en la página para manipularlo e insertar nuevos ítems|
| Evento |formProducto.addEventListener("submit", (evento) => { ... });|Escucha el envío del formulario para ejecutar la lógica de agregar producto sin recargar la página|
| Objeto |const producto = new Producto(prodNombre.value, Number(prodPrecio.value));|Instancia un nuevo objeto de la clase Producto conservando sus datos y métodos de cálculo |

