// ===================================================
// Script de ejemplo para la BD BLOG
// ===================================================

// Instalación previa del modulo bcrypt de NodeJS
// sudo apt install nodejs npm
// sudo npm install bcrypt

const bcrypt = require("bcrypt");
const saltRounds = 10;
const hashedPassword = bcrypt.hashSync("usuario", saltRounds);

// Limpiamos colecciones
db.usuarios.drop();
db.articulos.drop();
db.reacciones.drop();

// ===================================================
// Colección USUARIOS
// ===================================================
const usuarios = db.usuarios.insertMany([
  {
    email: "rafagon1111@gemail.com",
    nombre: "Rafael",
    apellidos: "González Gómez",
    clave: hashedPassword,
    fechaNacimiento: new Date("1988-05-12"),
    perfil: { 
      redesSociales: { twitter: "@ana_perez", instagram: "ana_perez"  },
      fechaRegistro: new Date("2025-09-24T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-26T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "javierhern2222@gemail.com",
    nombre: "Javier",
    apellidos: "Hernández Herrera",
    clave: hashedPassword,
    fechaNacimiento: new Date("1990-11-23"),
    perfil: { 
      redesSociales: { twitter: "@javier_hern", instagram: "javier_hern"  },
      fechaRegistro: new Date("2025-09-27T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-29T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "mariaiba3333@jotmail.com",
    nombre: "Maria",
    apellidos: "Ibarra Ibáñez",
    clave: hashedPassword,
    fechaNacimiento: new Date("1992-03-15"),
    perfil: { 
      redesSociales: { twitter: "@maria_iba", instagram: "maria_iba"  },
      fechaRegistro: new Date("2025-09-29T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-04T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "luciajim4444@yajoo.com",
    nombre: "Lucía",
    apellidos: "Jiménez Juarez",
    clave: hashedPassword,
    fechaNacimiento: new Date("1989-07-01"),
    perfil: { 
      redesSociales: { twitter: "@lucia_jim", instagram: "lucia_jim"  },
      fechaRegistro: new Date("2025-10-05T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-09T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "santiklein5555@gemail.com",
    nombre: "Santiago",
    apellidos: "Klein King",
    clave: hashedPassword,
    fechaNacimiento: new Date("1995-10-09"),
    perfil: { 
      redesSociales: { twitter: "@santi_klein", instagram: "santi_klein"  },
      fechaRegistro: new Date("2025-10-08T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-11T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "de"  }
    }
  },
  {
    email: "sergiolop6666@yajoo.com",
    nombre: "Sergio",
    apellidos: "López León",
    clave: hashedPassword,
    fechaNacimiento: new Date("1991-02-28"),
    perfil: { 
      redesSociales: { twitter: "@sergio_lop", instagram: "sergio_lop"  },
      fechaRegistro: new Date("2025-10-15T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-18T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "inesmart7777@jotmail.com",
    nombre: "Inés",
    apellidos: "Martínez Moreno",
    clave: hashedPassword,
    fechaNacimiento: new Date("1993-09-14"),
    perfil: { 
      redesSociales: { twitter: "@ines_mar", instagram: "ines_mar"  },
      fechaRegistro: new Date("2025-09-21T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-28T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "irenenav8888@yajoo.com",
    nombre: "Irene",
    apellidos: "Navarro Noguer",
    clave: hashedPassword,
    fechaNacimiento: new Date("1994-06-30"),
    perfil: { 
      redesSociales: { twitter: "@irene_nav", instagram: "irene_nav"  },
      fechaRegistro: new Date("2025-09-25T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-26T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "carlosord9999@gemail.com",
    nombre: "Carlos",
    apellidos: "Ordóñez Ortiz",
    clave: hashedPassword,
    fechaNacimiento: new Date("1987-12-05"),
    perfil: { 
      redesSociales: { twitter: "@carlos_ord", instagram: "carlos_ord"  },
      fechaRegistro: new Date("2025-09-25T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-25T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "cesarper0000@jotmail.com",
    nombre: "César",
    apellidos: "Pérez Parra",
    clave: hashedPassword,
    fechaNacimiento: new Date("1996-08-21"),
    perfil: { 
      redesSociales: { twitter: "@cesar_per", instagram: "cesar_per"  },
      fechaRegistro: new Date("2025-09-26T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-27T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "carmenquin1111@yajoo.com",
    nombre: "Carmen",
    apellidos: "Quintana Quiñones",
    clave: hashedPassword,
    fechaNacimiento: new Date("1986-04-10"),
    perfil: { 
      redesSociales: { twitter: "@carmen_qui", instagram: "carmen_qui"  },
      fechaRegistro: new Date("2025-10-01T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-02T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "carlotaruiz2222@gemail.com",
    nombre: "Carlota",
    apellidos: "Ruiz Romero",
    clave: hashedPassword,
    fechaNacimiento: new Date("1992-11-18"),
    perfil: { 
      redesSociales: { twitter: "@carlota_ru", instagram: "carlota_ru"  },
      fechaRegistro: new Date("2025-09-28T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-28T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "teosanz3333@jotmail.com",
    nombre: "Teodoro",
    apellidos: "Sanz Salgado",
    clave: hashedPassword,
    fechaNacimiento: new Date("1985-07-25"),
    perfil: { 
      redesSociales: { twitter: "@teo_sanz", instagram: "teo_sanz"  },
      fechaRegistro: new Date("2025-09-29T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-30T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "teofitor4444@yajoo.com",
    nombre: "Teofilo",
    apellidos: "Torre Toledo",
    clave: hashedPassword,
    fechaNacimiento: new Date("1990-01-30"),
    perfil: { 
      redesSociales: { twitter: "@teo_tol", instagram: "teo_tol"  },
      fechaRegistro: new Date("2025-09-30T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-02T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "daniugar5555@gemail.com",
    nombre: "Daniela",
    apellidos: "Ugarte Uría",
    clave: hashedPassword,
    fechaNacimiento: new Date("1997-05-07"),
    perfil: { 
      redesSociales: { twitter: "@dani_uga", instagram: "dani_uga"  },
      fechaRegistro: new Date("2025-10-01T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-03T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "dorovie6666@jotmail.com",
    nombre: "Dorotea",
    apellidos: "Vieria Vega",
    clave: hashedPassword,
    fechaNacimiento: new Date("1989-09-16"),
    perfil: { 
      redesSociales: { twitter: "@doro_vie", instagram: "doro_vie"  },
      fechaRegistro: new Date("2025-09-30T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-02T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "davidwolff7777@yajoo.com",
    nombre: "David",
    apellidos: "Wolff Wisque",
    clave: hashedPassword,
    fechaNacimiento: new Date("1993-03-02"),
    perfil: { 
      redesSociales: { twitter: "@david_wolf", instagram: "david_wolf"  },
      fechaRegistro: new Date("2025-10-15T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-17T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "en"  }
    }
  },
  {
    email: "dionixime8888@gemail.com",
    nombre: "Dionisio",
    apellidos: "Ximénez Ximeno",
    clave: hashedPassword,
    fechaNacimiento: new Date("1995-06-22"),
    perfil: { 
      redesSociales: { twitter: "@dio_xim", instagram: "dio_xim"  },
      fechaRegistro: new Date("2025-09-24T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-23T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "elenayagu9999@jotmail.com",
    nombre: "Elena",
    apellidos: "Yagüe Ibar",
    clave: hashedPassword,
    fechaNacimiento: new Date("1992-12-14"),
    perfil: { 
      redesSociales: { twitter: "@elena_yag", instagram: "elena_yag"  },
      fechaRegistro: new Date("2025-09-27T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-30T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "elvizapa0000@yajoo.com",
    nombre: "Elvira",
    apellidos: "Zapata Zabaleta",
    clave: hashedPassword,
    fechaNacimiento: new Date("1991-08-19"),
    perfil: { 
      redesSociales: { twitter: "@elvi_zap", instagram: "elvi_zap"  },
      fechaRegistro: new Date("2025-09-29T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-30T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "ernesabad1111@gemail.com",
    nombre: "Ernesto",
    apellidos: "Abad Álvarez",
    clave: hashedPassword,
    fechaNacimiento: new Date("1988-02-27"),
    perfil: { 
      redesSociales: { twitter: "@ern_abad", instagram: "ern_abad"  },
      fechaRegistro: new Date("2025-10-14T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-16T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "eduardbue2222@jotmail.com",
    nombre: "Eduardo",
    apellidos: "Bueno Bonilla",
    clave: hashedPassword,
    fechaNacimiento: new Date("1994-10-11"),
    perfil: { 
      redesSociales: { twitter: "@edu_bue", instagram: "edu_bue"  },
      fechaRegistro: new Date("2025-09-29T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-03T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "franciscid3333@yajoo.com",
    nombre: "Francisca",
    apellidos: "Cid Chamoso",
    clave: hashedPassword,
    fechaNacimiento: new Date("1989-05-04"),
    perfil: { 
      redesSociales: { twitter: "@francis_cid", instagram: "francis_cid"  },
      fechaRegistro: new Date("2025-09-25T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-27T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "filodel4444@gemail.com",
    nombre: "Filomena",
    apellidos: "Delgado Durán",
    clave: hashedPassword,
    fechaNacimiento: new Date("1993-07-28"),
    perfil: { 
      redesSociales: { twitter: "@fil_del", instagram: "fil_del"  },
      fechaRegistro: new Date("2025-09-26T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-27T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "fedeegas5555@jotmail.com",
    nombre: "Federico",
    apellidos: "Egas Echave",
    clave: hashedPassword,
    fechaNacimiento: new Date("1991-09-06"),
    perfil: { 
      redesSociales: { twitter: "@fede_egas", instagram: "fede_egas"  },
      fechaRegistro: new Date("2025-09-27T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-29T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "guhuca6666@yajoo.com",
    nombre: "Gustavo",
    apellidos: "Huerta Cánovas",
    clave: hashedPassword,
    fechaNacimiento: new Date("1987-01-22"),
    perfil: { 
      redesSociales: { twitter: "@gus_huer", instagram: "gus_huer"  },
      fechaRegistro: new Date(new Date("2025-10-08T10:30:00Z")),
      ultimoAcceso: new Date("2025-10-10T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "sagoor7777@gemail.com",
    nombre: "Sandra",
    apellidos: "Goyanes Ortiz",
    clave: hashedPassword,
    fechaNacimiento: new Date("1996-11-30"),
    perfil: { 
      redesSociales: { twitter: "@san_goy", instagram: "san_goy"  },
      fechaRegistro: new Date("2025-09-29T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-12T21:15:00Z"),
      rol: "lector",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "miesgo8888@jotmail.com",
    nombre: "Miguel",
    apellidos: "Espeluy González",
    clave: hashedPassword,
    fechaNacimiento: new Date("1990-03-18"),
    perfil: { 
      redesSociales: { twitter: "@miguel_espe", instagram: "miguel_espe"  },
      fechaRegistro: new Date("2025-09-28T10:30:00Z"),
      ultimoAcceso: new Date("2025-09-29T21:15:00Z"),
      rol: "autor",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  },
  {
    email: "aloceg9999@yajoo.com",
    nombre: "Alba",
    apellidos: "Ochoa Eguiluz",
    clave: hashedPassword,
    fechaNacimiento: new Date("1995-07-09"),
    perfil: { 
      redesSociales: { twitter: "@alba_ocho", instagram: "alba_ocho"  },
      fechaRegistro: new Date("2025-10-03T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-04T21:15:00Z"),
      rol: "lector",   // podría ser lector, autor, admin
      preferencias: { tema: "oscuro", idioma: "es"  }
    }
  },
  {
    email: "agvalsi@gemail.com",
    nombre: "Agustín",
    apellidos: "Valderrama Sierra",
    clave: hashedPassword,
    fechaNacimiento: new Date("1986-10-25"),
    perfil: { 
      redesSociales: { twitter: "@agu_val", instagram: "agu_val"  },
      fechaRegistro: new Date("2025-10-09T10:30:00Z"),
      ultimoAcceso: new Date("2025-10-11T21:15:00Z"),
      rol: "lector",   // podría ser lector, autor, admin
      preferencias: { tema: "claro", idioma: "es"  }
    }
  }
]);


// ===================================================
// Colección ARTICULOS con subdocumentos incrustados
// ===================================================
const articulos = db.articulos.insertMany([
{
  titulo: "¿Por qué duró tanto la II Guerra Mundial?",
  fecha: new Date('2025-04-14T00:00:00Z'),
  texto: "La II Guerra Mundial duró 6 años exactos, desde el 3 de septiembre de 1939 al 3 de septiembre de 1945...",
  clicks: 232,
  usuario: usuarios.insertedIds[0],
  etiquetas: [{ "etiqueta": "historia", "url": "/etiquetas/historia" }],
  categorias: [{ "nombre": "opinión", "url": "/categorias/opinion" }, { "nombre": "cultura", "url": "/categorias/cultura" }],
  comentarios: [{ texto: "Magnífico análisis del autor.", fecha: new Date('2025-05-10T00:00:00Z'), usuario: usuarios.insertedIds[4] }, 
                  { texto: "Tengo algunas dudas al respecto.", fecha: new Date('2025-07-18T00:00:00Z'), usuario: usuarios.insertedIds[8] }, 
                  { texto: "Muy buen artículo, gracias por compartir.", fecha: new Date('2025-07-12T00:00:00Z'), usuario: usuarios.insertedIds["1"] }],
  revisiones: [ new Date('2025-01-04T00:00:00Z'), new Date('2025-02-04T00:00:00Z') ] 
},
{
  titulo: "Origen y evolución de PLC",
  fecha: new Date('2025-04-17T00:00:00Z'),
  texto: "El PLC surgió como una forma alternativa de conectar dispositivos en red usando el cableado de energía eléctrica...",
  clicks: 183,
  usuario: usuarios.insertedIds[1],
  etiquetas: [{ "etiqueta": "tecnologia", "url": "/etiquetas/tecnologia" }],
  categorias: [{ "nombre": "ciencia", "url": "/categorias/ciencia" }, { "nombre": "investigación", "url": "/categorias/investigación" }],
  comentarios: [{ texto: "El PLC se ha quedado anticuado. Nadie lo usa", fecha: new Date('2025-04-20T00:00:00Z'), usuario: usuarios.insertedIds[3] }, 
                  { texto: "A mi siempre me ha funcionado", fecha: new Date('2025-04-22T00:00:00Z'), usuario: usuarios.insertedIds[6] }, 
                  { texto: "Todavía se pueden comprar kits de PLC", fecha: new Date('2025-05-26T00:00:00Z'), usuario: usuarios.insertedIds[1] }],
  revisiones: [ new Date('2025-01-04T00:00:00Z'), new Date('2025-02-04T00:00:00Z') ] 
},
{
  titulo: "Identificados nuevos genes relacionados con enfermedades raras",
  fecha: new Date('2025-04-21T00:00:00Z'),
  texto: "La investigación en el campo de la genética ha conseguido identificar más de 200 genes que causan enfermedades raras...",
  clicks: 186,
  usuario: usuarios.insertedIds[2],
  etiquetas: [{ "etiqueta": "medicina", "url": "/etiquetas/medicina" }, { "etiqueta": "genética", "url": "/etiquetas/genética" }],
  categorias: [{ "nombre": "ciencia", "url": "/categorias/ciencia" }, { "nombre": "investigación", "url": "/categorias/investigación" }],
  comentarios: [{ texto: "Debería investigarse más de las enfermedades raras", fecha: new Date('2025-04-27T00:00:00Z'), usuario: usuarios.insertedIds[5] }, 
                  { texto: "Hay que enfocarse en la genética, es la única solución", fecha: new Date('2025-05-11T00:00:00Z'), usuario: usuarios.insertedIds[4] }],
  revisiones: [ new Date('2025-01-04T00:00:00Z'), new Date('2025-02-04T00:00:00Z') ] 
},
{
  titulo: "La sobretensión en la catenaria causa la mayor parte de las incidencias ferroviarias",
  fecha: new Date('2025-04-23T00:00:00Z'),
  texto: "Un aumento de la tensión eléctrica en la catenaria del AVE debido al alto número de trenes circulando simultáneamente provoca la sobresaturación del sistema...",
  clicks: 216,
  usuario: usuarios.insertedIds[3],
  etiquetas: [{ "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }, { "etiqueta": "viajes", "url": "/etiquetas/viajes" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }, { "nombre": "opinion", "url": "/categorias/opinion" }],
  comentarios: [{ texto: "Es necesaria más inversión en las infraestructuras ferroviarias", fecha: new Date('2025-05-01T00:00:00Z'), usuario: usuarios.insertedIds[9] },
                  { texto: "Trenes del siglo XIX", fecha: new Date('2025-05-17T00:00:00Z'), usuario: usuarios.insertedIds[9] }],
  revisiones: [ new Date('2025-01-04T00:00:00Z'), new Date('2025-02-04T00:00:00Z') ] 
},
{
  titulo: "La IA se empleará para gobernar",
  fecha: new Date('2025-05-05T00:00:00Z'),
  texto: "Albania ha sido el primer país del mundo en nombrar como primera ministra a una mujer creada por IA...",
  clicks: 296,
  usuario: usuarios.insertedIds[4],
  etiquetas: [{ "etiqueta": "tecnologia", "url": "/etiquetas/tecnologia" }],
  categorias: [{ "nombre": "opinion", "url": "/categorias/opinion" }, { "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Espero que el experimento salga bien", fecha: new Date('2025-05-16T00:00:00Z'), usuario: usuarios.insertedIds[7] }, 
                  { texto: "Por lo menos sabemos que no habrá corrupción", fecha: new Date('2025-05-25T00:00:00Z'), usuario: usuarios.insertedIds[2] }],
  revisiones: [ new Date('2025-01-04T00:00:00Z'), new Date('2025-02-04T00:00:00Z') ] 
},
{
  titulo: "Las escaladas del Everest están formando un vertedero",
  fecha: new Date('2025-05-12T00:00:00Z'),
  texto: "Desde hace décadas las expediciones al Everest están dejando un reguero de basura en los campamentos base...",
  clicks: 403,
  usuario: usuarios.insertedIds[5],
  etiquetas: [{ "etiqueta": "viajes", "url": "/etiquetas/viajes" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "opinion", "url": "/categorias/opinion" }, { "nombre": "cultura", "url": "/categorias/cultura" }],
  comentarios: [{ texto: "Hay que restringir más las expediciones al Everest", fecha: new Date('2025-05-20T00:00:00Z'), usuario: usuarios.insertedIds[2] }, 
                  { texto: "No es suficiente con pagar, hay que limpiar también.", fecha: new Date('2025-06-01T00:00:00Z'), usuario: usuarios.insertedIds[5] }, 
                  { texto: "Que se suspendan todas las expediciones hasta que se limpie todo", fecha: new Date('2025-06-03T00:00:00Z'), usuario: usuarios.insertedIds[1] }],
  revisiones: [ new Date('2025-02-03T00:00:00Z'), new Date('2025-03-05T00:00:00Z') ] 
},
{
  titulo: "El uso del nitrógeno líquido en la cocina",
  fecha: new Date('2025-05-27T00:00:00Z'),
  texto: "Cada vez más chefs se atreven a utilizar el nitrógeno líquido en la preparación de sus platos...",
  clicks: 443,
  usuario: usuarios.insertedIds[6],
  etiquetas: [{ "etiqueta": "cocina", "url": "/etiquetas/cocina" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Alguien se aburre en la cocina", fecha: new Date('2025-05-29T00:00:00Z'), usuario: usuarios.insertedIds[1] }, 
                  { texto: "Menuda idiotez usar nitrógeno líquido para cocinar.", fecha: new Date('2025-06-02T00:00:00Z'), usuario: usuarios.insertedIds[8] }],
  revisiones: [ new Date('2025-02-03T00:00:00Z'), new Date('2025-03-05T00:00:00Z') ]  
},
{
  titulo: "El fotógrafo que muestra la cruda realidad",
  fecha: new Date('2025-05-31T00:00:00Z'),
  texto: "John Doe, el fotógrafo que recorre el mundo visitando los lugares más recónditos del planeta para conseguir la foto perfecta...",
  clicks: 401,
  usuario: usuarios.insertedIds[7],
  etiquetas: [{ "etiqueta": "viajes", "url": "/etiquetas/viajes" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "cultura", "url": "/categorias/cultura" }],
  comentarios: [{ texto: "He visto sus fotos y son magníficas", fecha: new Date('2025-06-13T00:00:00Z'), usuario: usuarios.insertedIds[3] }, 
                  { texto: "Sus exposiciones son muy interesantes", fecha: new Date('2025-07-08T00:00:00Z'), usuario: usuarios.insertedIds[7] }],
  revisiones: [ new Date('2025-02-03T00:00:00Z'), new Date('2025-03-05T00:00:00Z') ]  
},
{
  titulo: "El genio de Nicola Tesla",
  fecha: new Date('2025-06-11T00:00:00Z'),
  texto: "Nicola Tesla fue un científico clave en el desarrollo de la electricidad...",
  clicks: 391,
  usuario: usuarios.insertedIds[8],
  etiquetas: [{ "etiqueta": "historia", "url": "/etiquetas/historia" }, { "etiqueta": "tecnología", "url": "/etiquetas/tecnología" }],
  categorias: [{ "nombre": "cultura", "url": "/categorias/cultura" }, { "nombre": "investigación", "url": "/categorias/investigación" }],
  comentarios: [{ texto: "El artículo contiene datos inexactos.", fecha: new Date('2025-06-15T00:00:00Z'), usuario: usuarios.insertedIds[0] }, 
                  { texto: "Con una buena financiación hubiera hecho cosas maravillosas.", fecha: new Date('2025-06-20T00:00:00Z'), usuario: usuarios.insertedIds[0] }],
  revisiones: [ new Date('2025-02-03T00:00:00Z'), new Date('2025-03-05T00:00:00Z') ]  
},
{
  titulo: "Cómo configurar un PC como router inalámbrico",
  fecha: new Date('2025-06-17T00:00:00Z'),
  texto: "Un PC puede actuar como un router inalámbrico, pero con un rendimiento mucho mayor al de los routers tradicionales...",
  clicks: 394,
  usuario: usuarios.insertedIds[9],
  etiquetas: [{ "etiqueta": "tecnologia", "url": "/etiquetas/tecnologia" }],
  categorias: [{ "nombre": "tutoriales", "url": "/categorias/tutoriales" }],
  comentarios: [{ texto: "Es una buena idea para PCs antiguos", fecha: new Date('2025-06-19T00:00:00Z'), usuario: usuarios.insertedIds[7] }, 
                  { texto: "Voy a intentarlo y probar como va", fecha: new Date('2025-06-24T00:00:00Z'), usuario: usuarios.insertedIds[9] }],
  revisiones: [ new Date('2025-02-03T00:00:00Z'), new Date('2025-03-05T00:00:00Z') ]  
},
{
  titulo: "La política como fe",
  fecha: new Date('2025-06-20T00:00:00Z'),
  texto: "En tiempos de la polarización, muchas personas viven la política como una religión, aceptando cualquier postulado sin un atisbo de duda...",
  clicks: 227,
  usuario: usuarios.insertedIds[0],
  etiquetas: [{ "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "opinion", "url": "/categorias/opinion" }, { "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Mejor no meterse en política.", fecha: new Date('2025-07-27T00:00:00Z'), usuario: usuarios.insertedIds[8] }, 
                  { texto: "Esto no beneficia a nadie.", fecha: new Date('2025-08-24T00:00:00Z'), usuario: usuarios.insertedIds[6] }],
  revisiones: [ new Date('2025-03-06T00:00:00Z'), new Date('2025-04-07T00:00:00Z') ] 
},
{
  titulo: "Innovando en la cocina",
  fecha: new Date('2025-06-27T00:00:00Z'),
  texto: "¿Alguien se comería un yogur de morcilla? ¿y un helado de ajo? Pues eso es lo que nos depara el futuro...",
  clicks: 191,
  usuario: usuarios.insertedIds[1],
  etiquetas: [{ "etiqueta": "cocina", "url": "/etiquetas/cocina" }],
  categorias: [{ "nombre": "actualidad", "url": "/categorias/actualidad" }, { "nombre": "cultura", "url": "/categorias/cultura" }],
  comentarios: [{ texto: "Más gente rara haciendo cosas raras en la cocina", fecha: new Date('2025-07-19T00:00:00Z'), usuario: usuarios.insertedIds[8] }, 
                  { texto: "Yo no me como eso ni muerto", fecha: new Date('2025-07-25T00:00:00Z'), usuario: usuarios.insertedIds[7] }, 
                  { texto: "A lo mejor pruebo algo", fecha: new Date('2025-08-16T00:00:00Z'), usuario: usuarios.insertedIds[1] }, 
                  { texto: "Me encantó la receta, la probé en casa y salió genial.", fecha: new Date('2025-08-21T00:00:00Z'), usuario: usuarios.insertedIds["2"] }],
  revisiones: [ new Date('2025-03-06T00:00:00Z'), new Date('2025-04-07T00:00:00Z') ]  
},
{
  titulo: "Terapia genética para luchar contra el Alzheimer",
  fecha: new Date('2025-07-05T00:00:00Z'),
  texto: "La novedosa propuesta del Instituto Cajal para luchar contra la neurodegeneración...",
  clicks: 337,
  usuario: usuarios.insertedIds[2],
  etiquetas: [{ "etiqueta": "medicina", "url": "/etiquetas/medicina" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }, { "nombre": "ciencia", "url": "/categorias/ciencia" }],
  comentarios: [{ texto: "Esto si que es útil", fecha: new Date('2025-07-07T00:00:00Z'), usuario: usuarios.insertedIds[9] }, 
                  { texto: "Si tienen éxito deberían darle el Nobel de Medicina.", fecha: new Date('2025-08-19T00:00:00Z'), usuario: usuarios.insertedIds[2] }, 
                  { texto: "Hay que invertir más en investigación", fecha: new Date('2025-08-21T00:00:00Z'), usuario: usuarios.insertedIds[3] }],
  revisiones: [ new Date('2025-03-06T00:00:00Z'), new Date('2025-04-07T00:00:00Z') ]  
},
{
  titulo: "El calendario solidario",
  fecha: new Date('2025-07-07T00:00:00Z'),
  texto: "Un grupo de bomberos y policias locales posan para un calendario con fines benéficos...",
  clicks: 147,
  usuario: usuarios.insertedIds[3],
  etiquetas: [{ "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Yo me voy a comprar un calendario", fecha: new Date('2025-08-08T00:00:00Z'), usuario: usuarios.insertedIds[0] }, 
                  { texto: "Mi primo sale en el mes de marzo", fecha: new Date('2025-08-15T00:00:00Z'), usuario: usuarios.insertedIds[4] }],
  revisiones: [ new Date('2025-03-06T00:00:00Z'), new Date('2025-04-07T00:00:00Z') ] 
},
{
  titulo: "El ciberataque del siglo",
  fecha: new Date('2025-07-17T00:00:00Z'),
  texto: "Ayer se produjo un ciberataque que afectó a la mayoría de los centros de datos de Amazón...",
  clicks: 345,
  usuario: usuarios.insertedIds[4],
  etiquetas: [{ "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }, { "etiqueta": "tecnologia", "url": "/etiquetas/tecnologia" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Otro como este y volvemos a la edad de piedra", fecha: new Date('2025-08-24T00:00:00Z'), usuario: usuarios.insertedIds[6] }, 
                  { texto: "Ciberseguridad ante todo", fecha: new Date('2025-09-11T00:00:00Z'), usuario: usuarios.insertedIds[7] }],
  revisiones: [ new Date('2025-03-06T00:00:00Z'), new Date('2025-04-07T00:00:00Z') ]  
},
{
  titulo: "Cruzar Europa en tacones",
  fecha: new Date('2025-07-21T00:00:00Z'),
  texto: "Una española está haciendo un insólito reto, recorrer todos los paises de la unión calzando unos tacones misóginos...",
  clicks: 307,
  usuario: usuarios.insertedIds[5],
  etiquetas: [{ "etiqueta": "viajes", "url": "/etiquetas/viajes" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "cultura", "url": "/categorias/cultura" }, { "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Hay tonterías ... y tonterías", fecha: new Date('2025-08-28T00:00:00Z'), usuario: usuarios.insertedIds[1] }, 
                  { texto: "¡Que chica más valiente!", fecha: new Date('2025-09-10T00:00:00Z'), usuario: usuarios.insertedIds[3] }, 
                  { texto: "Hay gente pa to", fecha: new Date('2025-09-13T00:00:00Z'), usuario: usuarios.insertedIds[7] }],
  revisiones: [ new Date('2025-05-05T00:00:00Z'), new Date('2025-06-07T00:00:00Z') ] 
},
{
  titulo: "Cómo preparar la mochila para un viaje de aventuras",
  fecha: new Date('2025-08-01T00:00:00Z'),
  texto: "Guia paso a paso para preparar una mochila con lo imprescindible para un viaje por la selva del Congo...",
  clicks: 138,
  usuario: usuarios.insertedIds[6],
  etiquetas: [{ "etiqueta": "viajes", "url": "/etiquetas/viajes" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "cultura", "url": "/categorias/cultura" }, { "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Yo prefiero quedarme en un hotel", fecha: new Date('2025-09-14T00:00:00Z'), usuario: usuarios.insertedIds[8] }, 
                  { texto: "Con tanta cosa en la mochila te rompes la espalda", fecha: new Date('2025-09-21T00:00:00Z'), usuario: usuarios.insertedIds[1] }, 
                  { texto: "Eso ya está pasado de moda", fecha: new Date('2025-09-23T00:00:00Z'), usuario: usuarios.insertedIds[9] }],
  revisiones: [ new Date('2025-05-05T00:00:00Z'), new Date('2025-06-07T00:00:00Z') ]  
},
{
  titulo: "La IA toma el control de los arsenales nucleares",
  fecha: new Date('2025-08-16T00:00:00Z'),
  texto: "Lo que se predijo en la película Terminator está ocurriendo, una superinteligencia artificial será la encargada de controlar el arsenal nuclear de Estados Unidos...",
  clicks: 488,
  usuario: usuarios.insertedIds[7],
  etiquetas: [{ "etiqueta": "tecnología", "url": "/etiquetas/tecnologia" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "ciencia", "url": "/categorias/ciencia" }, { "nombre": "opinion", "url": "/categorias/opinion" }],
  comentarios: [{ texto: "Skynet al poder", fecha: new Date('2025-09-24T00:00:00Z'), usuario: usuarios.insertedIds[6] }, 
                  { texto: "Hay que estar loco para hacer eso", fecha: new Date('2025-10-19T00:00:00Z'), usuario: usuarios.insertedIds[2] }, 
                  { texto: "Mejor que un humano, que podría apretar el botón por accidente", fecha: new Date('2025-11-04T00:00:00Z'), usuario: usuarios.insertedIds[9] }],
  revisiones: [ new Date('2025-05-05T00:00:00Z'), new Date('2025-06-07T00:00:00Z') ]  
},
{
  titulo: "Judias con chorizo en solo 15 minutos",
  fecha: new Date('2025-08-22T00:00:00Z'),
  texto: "Para los que viven con prisa y no tienen tiempo para cocinar, ahí va un plato de toda la vida pero en solo 15 minutos...",
  clicks: 374,
  usuario: usuarios.insertedIds[8],
  etiquetas: [{ "etiqueta": "cocina", "url": "/etiquetas/cocina" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }, { "nombre": "cultura", "url": "/categorias/cultura" }],
  comentarios: [{ texto: "Esto si que es útil", fecha: new Date('2025-09-30T00:00:00Z'), usuario: usuarios.insertedIds[0] }, 
                  { texto: "Yo ya sabía hacerlas así", fecha: new Date('2025-10-14T00:00:00Z'), usuario: usuarios.insertedIds[9] }, 
                  { texto: "Yo tardo 15 segundos, abro una lata y ya está", fecha: new Date('2025-10-18T00:00:00Z'), usuario: usuarios.insertedIds[8] }],
  revisiones: [ new Date('2025-05-05T00:00:00Z'), new Date('2025-06-07T00:00:00Z') ] 
},
{
  titulo: "¿Es necesaria la unanimidad en la UE?",
  fecha: new Date('2025-08-29T00:00:00Z'),
  texto: "Cualquier decisión en la UE se toma por unanimidad, lo que significa que cualquier país tiene derecho de veto...",
  clicks: 187,
  usuario: usuarios.insertedIds[9],
  etiquetas: [{ "etiqueta": "política", "url": "/etiquetas/política" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "opinión", "url": "/categorias/opinion" }, { "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Con una mayoría cualificada sería suficiente", fecha: new Date('2024-09-19T00:00:00Z'), usuario: usuarios.insertedIds[0] }, 
                  { texto: "Si no hay unanimidad, se perjudica a los pequeños", fecha: new Date('2025-09-24T00:00:00Z'), usuario: usuarios.insertedIds[3] }, 
                  { texto: "Mejor así, sino sería peor.", fecha: new Date('2025-09-26T00:00:00Z'), usuario: usuarios.insertedIds[2] }],
  revisiones: [ new Date('2025-05-05T00:00:00Z'), new Date('2025-06-07T00:00:00Z') ]  
},
{
  titulo: "La crisis de los misiles",
  fecha: new Date('2025-09-03T00:00:00Z'),
  texto: "En 1961 el mundo estuvo a punto del holocausto nuclear por la crisis de los misiles en Cuba...",
  clicks: 451,
  usuario: usuarios.insertedIds[10],
  etiquetas: [{ "etiqueta": "historia", "url": "/etiquetas/historia" }, { "etiqueta": "política", "url": "/etiquetas/política" }],
  categorias: [{ "nombre": "opinion", "url": "/categorias/opinion" }],
  comentarios: [{ texto: "Menos mal que se impuso la cordura", fecha: new Date('2025-09-30T00:00:00Z'), usuario: usuarios.insertedIds[1] }, 
                  { texto: "Esto es una leyenda urbana", fecha: new Date('2025-10-28T00:00:00Z'), usuario: usuarios.insertedIds[2] }],
  revisiones: [ new Date('2025-07-08T00:00:00Z'), new Date('2025-08-09T00:00:00Z') ] 
},
{
  titulo: "Limpiar el PC por dentro",
  fecha: new Date('2025-09-12T00:00:00Z'),
  texto: "Polvo, pelusa, pequeños bichos, de todo se acumula dentro de un ordenador. Hay que limpiarlo de vez en cuando...",
  clicks: 302,
  usuario: usuarios.insertedIds[11],
  etiquetas: [{ "etiqueta": "tecnología", "url": "/etiquetas/tecnologia" }],
  categorias: [{ "nombre": "tutoriales", "url": "/categorias/tutoriales" }],
  comentarios: [{ texto: "Tengo un PC desde hace 20 años, sabrá Dios lo que tiene dentro", fecha: new Date('2025-09-17T00:00:00Z'), usuario: usuarios.insertedIds[6] }, 
                  { texto: "Si no se ve la porquería, es que no está", fecha: new Date('2025-20-22T00:00:00Z'), usuario: usuarios.insertedIds[0] }],
  revisiones: [ new Date('2025-07-08T00:00:00Z'), new Date('2025-08-09T00:00:00Z') ] 
},
{
  titulo: "La Fed crea un mundo ideal para las bolsas",
  fecha: new Date('2025-09-22T00:00:00Z'),
  texto: "La primera bajada de tipos del año impulsa a Wall Street hacia nuevos records, confiando en que vendrán más en los próximos meses...",
  clicks: 310,
  usuario: usuarios.insertedIds[12],
  etiquetas: [{ "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }, { "etiqueta": "economía", "url": "/etiquetas/economia" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }, { "nombre": "opinión", "url": "/categorias/opinion" }],
  comentarios: [{ texto: "Hasta que haya un nuevo batacazo y ya veremos", fecha: new Date('2025-09-25T00:00:00Z'), usuario: usuarios.insertedIds[7] }, 
                  { texto: "El comienzo de una nueva burbuja", fecha: new Date('2025-10-27T00:00:00Z'), usuario: usuarios.insertedIds[4] }],
  revisiones: [ new Date('2025-07-08T00:00:00Z'), new Date('2025-08-09T00:00:00Z') ] 
},
{
  titulo: "Oleada de estafas que empiezan en el cubo de la basura",
  fecha: new Date('2025-09-25T00:00:00Z'),
  texto: "Alguien puede saber muchísimo de ti solamente con rebuscar en tu basura, y ya hay ciberdelincuentes especializados intentando robar tus datos de esta manera. Es lo que se conoce como Dumpster Diving, y está en auge...",
  clicks: 451,
  usuario: usuarios.insertedIds[13],
  etiquetas: [{ "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Papeles con nombre y dirección se rompen antes de tirarlos", fecha: new Date('2025-10-16T00:00:00Z'), usuario: usuarios.insertedIds[7] }, 
                  { texto: "Mejor una destructura de documentos", fecha: new Date('2025-10-31T00:00:00Z'), usuario: usuarios.insertedIds[4] }],
  revisiones: [ new Date('2025-07-08T00:00:00Z'), new Date('2025-08-09T00:00:00Z') ] 
},
{
  titulo: "Otra narcolancha hundida por la marina americana",
  fecha: new Date('2025-10-08T00:00:00Z'),
  texto: "Se han difundido imágenes en las que un misil impacta sobre una narcolancha que se dirigía a Estados Unidos cargada de cocaina. Todos sus ocupantes han muerto.",
  clicks: 330,
  usuario: usuarios.insertedIds[14],
  etiquetas: [{ "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }, { "nombre": "opinion", "url": "/categorias/opinion" }],
  comentarios: [{ texto: "Como sigan así no va a quedar ninguna", fecha: new Date('2025-10-25T00:00:00Z'), usuario: usuarios.insertedIds[4] }, 
                  { texto: "Por fin, mano dura contra los narcos.", fecha: new Date('2025-11-17T00:00:00Z'), usuario: usuarios.insertedIds[7] }],
  revisiones: [ new Date('2025-07-08T00:00:00Z'), new Date('2025-08-09T00:00:00Z') ] 
},
{
  titulo: "El monumento que hay que visitar en Soria",
  fecha: new Date('2025-10-14T00:00:00Z'),
  texto: "Un imponente monumento soriano guarda siglos de historia entre sus muros, desde reyes y nobles hasta episodios mucho menos conocidos. Un lugar donde el arte cisterciense convive con un pasado inesperado que sorprende",
  clicks: 80,
  usuario: usuarios.insertedIds[15],
  etiquetas: [{ "etiqueta": "viajes", "url": "/etiquetas/viajes" }],
  categorias: [{ "nombre": "cultura", "url": "/categorias/cultura" }, { "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "Yo ya he estado allí y no es para tanto", fecha: new Date('2025-10-17T00:00:00Z'), usuario: usuarios.insertedIds[3] }, 
                  { texto: "En cuanto pueda lo visito", fecha: new Date('2025-10-27T00:00:00Z'), usuario: usuarios.insertedIds[3] }],
  revisiones: [ new Date('2025-08-15T00:00:00Z'), new Date('2025-09-04T00:00:00Z') ] 
},
{
  titulo: "Terremoto de 8.6 de magnitud en Chile",
  fecha: new Date('2025-10-19T00:00:00Z'),
  texto: "Se ha registrado un terremoto en Chile, con epicentro a 5 km de la costa y a 3 km de profundidad...",
  clicks: 175,
  usuario: usuarios.insertedIds[16],
  etiquetas: [{ "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }],
  comentarios: [{ texto: "En la embajada podemos canalizar la ayuda urgente", fecha: new Date('2025-10-25T00:00:00Z'), usuario: usuarios.insertedIds[5] }, 
                  { texto: "Esa zona tiene mucha actividad sísmica", fecha: new Date('2025-11-20T00:00:00Z'), usuario: usuarios.insertedIds[1] }, 
                  { texto: "Deberían mejorar la construcción de viviendas", fecha: new Date('2025-11-28T00:00:00Z'), usuario: usuarios.insertedIds[1] }],
  revisiones: [ new Date('2025-08-15T00:00:00Z'), new Date('2025-09-04T00:00:00Z') ] 
},
{
  titulo: "El culturista que triunfa en el equipo de moda en Italia",
  fecha: new Date('2025-10-28T00:00:00Z'),
  texto: "Federico Borghese es el central del Borghonese, pero antes de jugar al fútbol se dedicaba al culturismo...",
  clicks: 254,
  usuario: usuarios.insertedIds[17],
  etiquetas: [{ "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }, { "etiqueta": "deportes", "url": "/etiquetas/deportes" }],
  categorias: [{ "nombre": "noticias", "url": "/categorias/noticias" }, { "nombre": "cultura", "url": "/categorias/cultura" }],
  comentarios: [{ texto: "No creo que dure mucho", fecha: new Date('2025-11-19T00:00:00Z'), usuario: usuarios.insertedIds[7] }, 
                  { texto: "Muy lento, muy torpe, no sirve de nada", fecha: new Date('2025-11-23T00:00:00Z'), usuario: usuarios.insertedIds[3] }],
  revisiones: [ new Date('2025-08-15T00:00:00Z'), new Date('2025-09-04T00:00:00Z') ] 
},
{
  titulo: "La batalla de Cavite",
  fecha: new Date('2025-11-05T00:00:00Z'),
  texto: "La batalla de Cavite en 1898 dio origen al ocaso del imperio español. Frente a una flota americana moderna y decidida, la armada española mostró las grietas de un poder en decadencia...",
  clicks: 202,
  usuario: usuarios.insertedIds[18],
  etiquetas: [{ "etiqueta": "historia", "url": "/etiquetas/historia" }],
  categorias: [{ "nombre": "cultura", "url": "/categorias/cultura" }],
  comentarios: [{ texto: "La arrogancia nunca fue un buen recurso", fecha: new Date('2025-11-05T00:00:00Z'), usuario: usuarios.insertedIds[4] }, 
                  { texto: "Mejor así, las colonias solo dieron problemas.", fecha: new Date('2025-11-10T00:00:00Z'), usuario: usuarios.insertedIds[2] }],
  revisiones: [ new Date('2025-08-15T00:00:00Z'), new Date('2025-09-04T00:00:00Z') ]  
},
{
  titulo: "El turismo de masas está matando a las ciudades",
  fecha: new Date('2025-11-11T00:00:00Z'),
  texto: "Algunas de las ciudades más emblemáticas del mundo se están murienda debido a la masificación turística. Venecia, Londres, Barcelona, París, ...",
  clicks: 421,
  usuario: usuarios.insertedIds[19],
  etiquetas: [{ "etiqueta": "viajes", "url": "/etiquetas/viajes" }, { "etiqueta": "actualidad", "url": "/etiquetas/actualidad" }],
  categorias: [{ "nombre": "opinion", "url": "/categorias/opinion" }, { "nombre": "cultura", "url": "/categorias/cultura" }],
  comentarios: [{ texto: "Yo no vuelvo a Venecia ni regalado", fecha: new Date('2025-11-28T00:00:00Z'), usuario: usuarios.insertedIds[0] }, 
                  { texto: "Hay que ir a sitios desconocidos", fecha: new Date('2025-12-10T00:00:00Z'), usuario: usuarios.insertedIds[5] }],
  revisiones: [ new Date('2025-08-15T00:00:00Z'), new Date('2025-09-04T00:00:00Z') ] 
},
{
    titulo: "Introducción a JavaScript",
    fecha: new Date('2025-11-16T00:00:00Z'),
    texto: "Este artículo explica los fundamentos de JS.",
    clicks: 120,
    usuario: usuarios.insertedIds["20"], 
    etiquetas: [ { "etiqueta": "tecnologia", url: "/etiquetas/tecnologia" } ],
    categorias: [ { "nombre": "tutoriales", url: "/categorias/tutoriales" } ],
    comentarios: [ { texto: "Muy útil para principiantes, gracias.", fecha: new Date('2025-12-12T00:00:00Z'), usuario: usuarios.insertedIds["1"] } ],
    revisiones: [ new Date('2025-08-15T00:00:00Z'), new Date('2025-09-04T00:00:00Z') ] 
  },
  {
    titulo: "Receta de tarta de queso",
    fecha: new Date('2025-11-24T00:00:00Z'),
    texto: "Una receta sencilla para hacer tarta de queso al horno.",
    clicks: 250,
    usuario: usuarios.insertedIds["22"],
    etiquetas: [ { "etiqueta": "cocina", "url": "/etiquetas/cocina" } ],
    categorias: [ { "nombre": "cultura", "url": "/categorias/cultura" } ],
    comentarios: [ { texto: "Me encantó, la hice y quedó deliciosa.", fecha: new Date('2025-11-26T00:00:00Z'), usuario: usuarios.insertedIds["0"] } ],
    revisiones: [ new Date('2025-09-14T00:00:00Z'), new Date('2025-10-01T00:00:00Z') ] 
  },
  {
    titulo: "Un viaje a Roma",
    fecha: new Date('2025-11-27T00:00:00Z'),
    texto: "Experiencia personal visitando los lugares más emblemáticos de Roma.",
    clicks: 90,
    usuario: usuarios.insertedIds["23"],
    etiquetas: [ { "etiqueta": "viajes", url: "/etiquetas/viajes" }, { "etiqueta": "historia", url: "/etiquetas/historia" } ],
    categorias: [ { "nombre": "cultura", url: "/categorias/cultura" } ],
    comentarios: [ { texto: "Roma es increíble, me dieron ganas de volver.", fecha: new Date('2025-11-29T00:00:00Z'), usuario: usuarios.insertedIds["2"] } ],
    revisiones: [ new Date('2025-09-14T00:00:00Z'), new Date('2025-10-01T00:00:00Z') ] 
  }
]);


// ===================================================
// Colección REACCIONES
// ===================================================
// Pequeño script JavaScript para insertar aleatoriamente 100 reacciones a los artículos por los usuarios.

const reacciones = [];

const usuarioIds = Object.values(usuarios.insertedIds);
const articuloIds = Object.values(articulos.insertedIds);

for (let i = 0; i < 100; i++) {
  const usuarioID = usuarioIds[Math.floor(Math.random() * usuarioIds.length)];
  const articuloID = articuloIds[Math.floor(Math.random() * articuloIds.length)];
  const tipo = Math.random() < 0.7 ? "like" : "dislike"; // 70% likes, 30% dislikes aprox

  reacciones.push({ usuarioID, articuloID, tipo });
}

db.reacciones.insertMany(reacciones);

// ===================================================
// ÍNDICES
// ===================================================
// Creamos los índices en las colecciones
db.usuarios.createIndex({ email: 1 });
db.articulos.createIndex({ fecha:1 });
db.articulos.createIndex({ usuario:1 });
db.reacciones.createIndex({ usuarioID: 1});
db.reacciones.createIndex({ articuloID: 1});


