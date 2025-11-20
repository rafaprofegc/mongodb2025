/*
Este script lo vamos a ejecutar en mongosh

load("actualizaciones.js");

Insertar un usuario con los siguientes datos:
- email: juana1111@jotmail.com
- nombre: Juana Martínez González
- clave: usuario pero hasheada
- fecha nacimiento: 19/12/1999
- perfil:
      - redes sociales: @juana_mart, instragam: "juana_mart"
      - fecha registro: 23/9/2025
      - ultimo acceso: null
      - rol: autor
      - preferecias:
          - tema: oscuro 
          - idioma: es
*/

const bcrypt = require("bcrypt");
const saltRounds = 10;
const claveUsuario = bcrypt.hashSync("usuario", saltRounds);

let nuevoUsuario = {
  email: "juana1111@jotmail.com",
  nombre: "Juana",
  apellidos: "Martínez González",
  clave: claveUsuario,
  fechaNacimiento: new Date('1999-12-19'),
  perfil: {
    redesSociales: { twitter: "@juana_mart", instagram: "juana_mart"},
    fechaRegistro: new Date('2025-09-23'),
    ultimoAcceso: null,
    rol: "autor",
    preferencias: { tema: "oscuro", idioma: "es" }
  }
}

let resInsert = db.usuarios.insertOne(nuevoUsuario);

/* 

Insertar un artículo con los siguientes datos:
  - título: "Los ataques por phising se disparan"
  - fecha: 10/11/2025
  - texto: "Ha habido un incrementeo de ataques por phising de hasta un 500% en los últimos 6 meses"
  - clicks: 0
  - usuario: el que acabamos de insertar
  - etiquetas: tecnología y actualidad
  - categorias: noticias
  - comentarios: ninguno
  - revisiones: ninguna
*/
let nuevoArticulo = {
  titulo: "Los ataques por phsing se disparan",
  fecha: new Date('2025-11-10'),
  texto: "Ha habido un incremento de ataques por phising de hasta un 500% en los últimos 6 meses",
  clicks: 0,
  usuario: resInsert.insertedId,
  etiquetas: [
    { etiqueta: "tecnología", url: "/etiquetas/tecnología" },
    { etiqueta: "actualidad", url: "/etiquetas/actualidad" }
  ],
  categorias: [ { nombre: "noticias", url: "/categorias/noticias"}],
  comenarios: [],
  revisiones: []
}

let resInsertArticulo = db.articulos.insertOne(nuevoArticulo);