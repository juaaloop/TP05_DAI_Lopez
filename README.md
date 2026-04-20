# 📘 Mini Pokédex Web

Aplicación web desarrollada en JavaScript puro que consume la API pública **PokéAPI** para buscar y visualizar información de Pokémon en tiempo real.

---

## 🎯 Objetivo del proyecto

El objetivo de este trabajo práctico es:

* Comprender el funcionamiento de una **API REST**
* Aprender a interpretar **documentación técnica**
* Consumir datos desde JavaScript usando `fetch`
* Manipular el DOM dinámicamente
* Transformar datos JSON en una interfaz visual

---

## 🌐 API utilizada

Se utilizó la API pública:

👉 https://pokeapi.co/

### Endpoints principales utilizados:

* 🔍 Buscar Pokémon por nombre o ID
  `https://pokeapi.co/api/v2/pokemon/{name|id}`

* 📋 Lista de Pokémon (usado en pruebas con Postman)
  `https://pokeapi.co/api/v2/pokemon?limit=10`

* 🔥 Tipos de Pokémon (exploración)
  `https://pokeapi.co/api/v2/type/{type}`

---

## 🧱 Estructura del proyecto

```bash
📁 proyecto-pokedex
│
├── index.html     # estructura de la app
├── style.css      # estilos visuales
├── script.js      # lógica y consumo de API
└── README.md      # documentación
```

---

## ⚙️ Funcionamiento

La aplicación permite:

* Buscar un Pokémon por **nombre o número**
* Mostrar:

  * Nombre
  * Imagen
  * ID
  * Tipos
  * Altura
  * Peso
* Mostrar un mensaje de **loading** mientras se realiza la petición
* Manejar errores si el Pokémon no existe

---

## 🧠 Decisiones técnicas

* Se utilizó `fetch` con `async/await` para mayor claridad en el código
* Se separaron responsabilidades en funciones:

  * `buscarPokemon()`
  * `mostrarCard()`
  * `mostrarError()`
  * `mostrarLoading()`
* Se manipuló el DOM dinámicamente usando `innerHTML` y `textContent`
* Se implementó una validación básica del input
* Se agregaron eventos tanto al botón como a la tecla **Enter**

---

## ⚠️ Manejo de errores

* Si la API devuelve un error (`404`), se muestra un mensaje amigable al usuario
* Se valida que el input no esté vacío antes de realizar la búsqueda
* Se utiliza `try/catch` para capturar errores de red o respuesta

---

## 🧪 Parte 1 — Investigación con Postman

Durante la etapa de exploración se realizaron pruebas con Postman para:

* Comprender la estructura de los endpoints
* Analizar respuestas JSON
* Identificar propiedades relevantes
* Detectar comportamientos ante errores (ej: 404 Not Found)

---

## 🚧 Dificultades encontradas

* Comprender la estructura del JSON de la API
* Acceder correctamente a propiedades anidadas (ej: `sprites.front_default`)
* Manejar errores cuando el Pokémon no existe
* Sincronizar correctamente HTML, CSS y JavaScript (clases y estructura)

---

## 🚀 Posibles mejoras

* Mostrar múltiples resultados
* Agregar animaciones
* Mejorar el diseño visual (modo oscuro, transiciones)
* Filtrar por tipo de Pokémon
* Historial de búsquedas

---

## 📌 Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES6)
* PokéAPI

---

## 👨‍💻 Autor

Proyecto realizado como trabajo práctico académico.
