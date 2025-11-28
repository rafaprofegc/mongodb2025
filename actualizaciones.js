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
  comentarios: [],
  revisiones: []
}

let resInsertArticulo = db.articulos.insertOne(nuevoArticulo);

// Inserción de varios documentos insertMany()
/* 
  Insertar reacciones del nuevo usuario y que sean de tipo like
  a los artículos publicados antes del 10/5/2025 
*/

let conjuntoArticulos = db.articulos.find(
  { fecha: {$lt: new Date('2025-05-10')} }
);

let arrayArticulos = conjuntoArticulos.toArray();
let usuario = db.usuarios.findOne({email: "juana1111@jotmail.com"});

db.reacciones.insertMany([
  { usuarioID: usuario._id, articuloID: arrayArticulos[0]._id, tipo: "like"},
  { usuarioID: usuario._id, articuloID: arrayArticulos[1]._id, tipo: "like"},
  { usuarioID: usuario._id, articuloID: arrayArticulos[2]._id, tipo: "like"},
  { usuarioID: usuario._id, articuloID: arrayArticulos[3]._id, tipo: "like"},
  { usuarioID: usuario._id, articuloID: arrayArticulos[4]._id, tipo: "like"}
]);

/*
arrayArticulos.forEach(art => {
  db.reacciones.insertOne({usuarioID: usuario._id, articuloID: art._id, tipo: "like"} );
});
*/


/* ACTUALIZACIONES DE DOCUMENTOS
   -----------------------------

   Métodos: updateOne(), updateMany()

   Sintaxis:
    updateOne({filtro}, {actualizacion});

    updateMany({filtro}, {actualizacion});

   Operadores de actualizaciones
   - $currentDate -> Pone un campo con el valor de la fecha actual.
   - $inc -> Incrementa o decrementa un campo con un valor dado
   - $min -> Actualiza el valor del campo con el mínimo entre el valor actual y otro
   - $max -> Actualiza el valor del campo con el máximo entre el valor actual y otro.
   - $mul -> Múltiplica el valor actual del campo por un valor indicado.
   - $rename -> Cambia el nombre de un campo
   - $set -> Establece un nuevo valor al campo.
   - $unset -> Elimina el campo especificado.
*/

// Actualizar la fecha de ultimo acceso del usuario con
// email juana1111@jotmail.com al día de hoy.
db.usuarios.updateOne(
  { email: "juana1111@jotmail.com"},
  { $currentDate: { "perfil.ultimoAcceso": true}}
);

// Actualizar los clicks de los artículos del usuario
// rafagon1111@gemail.com e incrementarlos en 1.
usuario = db.usuarios.findOne({email: "rafagon1111@gemail.com"});
db.articulos.updateMany(
  { usuario: usuario._id},
  { $inc: {clicks: 1}}
);

// Actualizar el tema del usuario javierhern2222@gemail.com
// a oscuro
db.usuarios.updateOne(
  { email: "javierhern2222@gemail.com"},
  { $set: {"perfil.preferencias.tema": "oscuro"}}
);

// Actualizar la fecha de registro del usuario
// mariaiba3333@jotmail.com al día de hoy
db.usuarios.updateOne(
  { email: "mariaiba3333@jotmail.com" },
  { $currentDate: {"perfil.fechaRegistro": true}} 
);

// Actualizar la fecha de publicación del artículo
// con título "Origen y evolución del PLC" al
// 10/5/2025 si es más reciene que la que tiene ahora
db.articulos.updateOne(
  { titulo: "Origen y evolución de PLC"},
  { $min: {fecha: new Date('2025-05-10')} }
);

// Actualizar los clicks del artículo con título
// "La IA se empleará para gobernar" y multiplicarlos por 2
db.articulos.updateOne(
  { titulo: "La IA se empleará para gobernar"},
  { $mul : {clicks: 2} }
);

// Actualizar los artículos del usuario rafagon1111@gemail.com
// y poner los clicks en 50 si es mayor que los que tiene ahora
usuario = db.usuarios.findOne({email:"rafagon1111@gemail.com"}, {_id:1});

db.articulos.updateMany(
  { usuario: usuario._id },
  { $max: {clicks: 50} }
);

// Actualizar los usuarios que han abierto sesión antes
// del 25 de septiembre y ponerle el rol "lector"
db.usuarios.updateMany(
  { "perfil.ultimoAcceso": { $lt: new Date('2025-09-25') } },
  { $set: { "perfil.rol" : "lector"}}
);

// Actualizar la fecha de último acceso a la fecha actual
// a todos los usuarios con el rol lector.
db.usuarios.updateMany( 
  { "perfil.rol": "lector"},
  { $currentDate: {"perfil.ultimoAcceso": true}}
);

db.usuarios.updateMany(
  { "perfil.rol": "lector"},
  { $set: { "perfil.ultimoAcceso": new Date('2025-11-28')}}
);

// Reducir un 10% los clicks de los artículos
// publicados antes del 25/9
db.articulos.updateMany( 
  { fecha: { $lt: new Date('2025-09-25')}},
  { $mul: {clicks: 0.9} }
);

// Establecer la fecha de último acceso al 1/10
// para los usuarios que tienen el último
// acceso anterior al 15/9
db.usuarios.updateMany( 
  { "perfil.ultimoAcceso": { $lt: new Date('2025-09-15')}},
  { $set: {"perfil.ultimoAcceso": new Date('2025-10-01')}}
);

// Asignar al usuario rafagon1111@gemail.com
// los artículos cuyo título contiene UE.
usuario = db.usuarios.findOne({ email: "rafagon1111@gemail.com"}, { _id: 1});

db.articulos.updateMany( 
  { titulo: { $regex: /\bUE\b/} },
  { $set: {usuario: usuario._id}}
);

// Cambiar el nombre del campo comenarios en el 
// artículo insertado al principio por comentarios
db.articulos.updateOne(
  {titulo: {$regex:/phising/}},
  {$rename: {comenarios: "comentarios"}}
);

// OPERADORES DE ACTUALIZACIÓN PARA ARRAYS
// ---------------------------------------

// Actualizar el artículo insertado al principio
// para añadir una revisión el día de hoy
articulo = db.articulos.findOne({titulo: {$regex:/phising/}});
db.articulos.updateOne(
  { titulo: {$regex:/phising/}},
  { $push: {revisiones: new Date('2025-11-28')} }
);


// Actualizar el artículo insertado al principio
// para añadir un comentario del usuario rafagon1111@gemail.com
// el día de hoy, y con el texto "No me gusta nada"
usuario = db.usuarios.findOne({email:"rafagon1111@gemail.com"});
db.articulos.updateOne(
  { titulo: {$regex:/phising/}},
  { $push: {
    comentarios: { texto: "No me gusta nada", 
                   fecha: new Date('2025-11-28'), 
                   usuario: usuario._id }
            }
  }
);

// Eliminar del artículo "Por qué duró tanto la II Guerra Mundial"
// la revisión del día 4/2
db.articulos.updateOne(
  { titulo: { $regex: /II Guerra Mundial/} },
  { $pull: { revisiones: new Date('2025-02-04')} }
);

// Eliminar la etiqueta actualidad del artículo insertado
db.articulos.updateOne(
  { titulo: {$regex:/phising/}},
  { $pull : { etiquetas: {etiqueta: "actualidad"} } }
);


// REEMPLAZO DE DOCUMENTOS
/* Actualizar un documento con otro:
  - Ambos documentos tienen que tener el mismo _id
  - No se pueden incluir operadores de actualización.
  - El documento que sustituye puede omitir el campo _id 
    ya que no se puede cambiar.
  - El documento que sustituye puede tener diferente
    estructura que el documento sustituido.

    Sintaxis:

    db.colección.replaceOne(<filtro>, <documento>);


Actualizar los siguientes campos del usuario juana1111@jotmail.com
- Apellidos: González Martínez
- Fecha nacimiento: 30/11/1999
- Fecha de registro: 23/10/2025
- Rol: lector
- Preferencias: tema claro e idioma en
*/
usuario = db.usuarios.findOne({email:"juana1111@jotmail.com"});
usuario.apellidos = "González Martínez";
usuario.fechaNacimiento = new Date('1999-11-30');
usuario.perfil.fechaRegistro = new Date('2025-10-23');
usuario.perfil.rol = "lector";
usuario.perfil.preferencias = { tema: "claro", idioma: "en"};

db.usuarios.replaceOne(
  { email: "juana1111@jotmail.com" }, usuario 
);

// ELIMINACION DE DOCUMENTOS
// -------------------------

// Eliminar los artículos del usuario juana1111@jotmail.com
usuario = db.usuarios.findOne({email:"juana1111@jotmail.com"});
db.articulos.deleteMany( 
  { usuario: usuario._id }
);

// Eliminar el usuario con el email: juana1111@jotmail.com
db.usuarios.deleteOne(
  { email: "juana1111@jotmail.com"}
);

usuario = db.usuarios.findOne({email:"juana1111@jotmail.com"});
db.usuarios.deleteOne({ _id: usuario._id});

// ELIMINAR DOCUMENTOS INCRUSTADOS
// -------------------------------
// Debemos usar updateOne() o updateMany() y asignar
// null al campo con el documento incrustado o
// utilizar el operador $unset para eliminar el campo

// Eliminar las preferencias de usuario con email agvalsi@gemail.com
db.usuarios.updateOne(
  { email: "agvalsi@gemail.com" },
  { $set: { "perfil.preferencias": null}}
);

db.usuarios.updateOne(
  { email: "agvalsi@gemail.com" },
  { $unset: { "perfil.preferencias": ""}}
);