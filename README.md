# To-Do App

## Conceptos

- Hooks `useState`, `useEffect` y `useRef`

- Gestión de eventos

- _inputs controlados_

- Virtual DOM

## Desarrollo de una pequeña aplicación Todo List:

- Creación de componentes y utilización de props para configurarlos (uso de Material-UI)
- Validación de props con las PropTypes de React.
- Uso de los hooks de React `useState`, `useEffect` y `useRef`, para poder dar dinamismo a la app, almacenar datos y poder acceder a los nodos del DOM.
- Eventos de click y de formulario:
    - Validar el formulario para evitar que se pueda añadir un Todo vacío:
        - El campo "título" no puede estar vacío
        - El campo "descripción" no puede estar vacío y debe tener un máximo de 100 caracteres
        - Mostrar un mensaje en caso de no cumplirse la validación.
- Debe aparecer un icono de "borrar" para cada To-do.
- Para la generación de un id aleatorio, he usado `crypto.randomUUID()`.

Como extra, he introducido una feature interesante con `localStorage` para guardar los Todos y poder recuperarlos incluso si cerramos el navegador.

---

## Installation

In the project directory, you can run:

`npm install` and `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
