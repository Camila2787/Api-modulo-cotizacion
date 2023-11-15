//lista las bases de datos
show dbs;

//Crear base de datos
use('Maria_Contreras')


//CREAR colecciones e insertar documentos
use('Maria_Contreras')
db.createCollection("Candidatos")
db.Candidatos.insertOne({
  "documento": 10002935,
  "tipoDocumento": "Cédula ciudadanía",
  "nombreCompleto": "Carlos Gutierrez",
  "email": "carlos23@gmail.com",
  "fechaNacimiento": "2023-09-12",
  "direccion": "calle50A #54-090",
  "habilidades": {
    "habilidad1":"Lider", 
    "habilidad2": "Honesto",
    "habilidad3": "Trabajo en equipo"
  },
  
});


use('Maria_Contreras')
db.Candidatos.insertOne({
  "documento": 2383748,
  "tipoDocumento": "Cédula ciudadanía",
  "nombreCompleto": "Camila Román",
  "email": "cam25@gmail.com",
  "fechaNacimiento": "2023-08-20",
  "direccion": "calle55A #64-060",
  "habilidades": {
    "habilidad1":"Empática",
    "habilidad2": "Razonamiento lógico",
    "habilidad3": "Solución de problemas"
  },
  
});

use('Maria_Contreras')
createCollection("Oferta")
db.Oferta.insertOne({
  "código": 10002935,
  "nombre": "Gerente",
  "área": "Contabilidad",
  "salario": 3800000
 
});


use('Maria_Contreras')
db.Oferta.insertOne({
  "código": 3493748,
  "nombre": "Directora",
  "área": "Gerencia",
  "salario": 2400000
 
});

use('Maria_Contreras')
db.createCollection("Entrevistador")
db.Entrevistador.insertOne({
  "documento": 10004635,
  "nombre": "Liliana",
  "apellidos": "Restrepo Cifuentes",
  "profesión": "Comunicadora Social"
 
});

use('Maria_Contreras')
db.Entrevistador.insertOne({
  "documento": 2938387,
  "nombre": "Sandra",
  "apellidos": "García Muñoz",
  "profesión": "Desarrolladora medios visuales"
 
});

use('Maria_Contreras')
db.createCollection("Empresa")
db.Empresa.insertOne({
  "nit": 032843,
  "nombre": "Development",
  "dirección": "Calle 7 #54-10", 
});

use('Maria_Contreras')
db.Empresa.insertOne({
  "nit": 23352,
  "nombre": "BarahClothes",
  "dirección": "Calle 2 #32-10", 
});

//crear colección con references

use('Maria_Contreras')
db.createCollection("Entrevista")
db.Entrevista.insertOne({
  "código": 29343,
  "candidatos": {
    "$ref": "Candidatos",
    "$id": "654e3f6d621d249fe154cfb4",
  
  },
  "fecha": "2023-10-12", 
  "entrevistadores": {
    "$ref": "Entrevistador",
    "$id": "654e40f75ccd6cb62b4180c2",
    "$db": "Maria_Contreras"

  },
  "ofertas": {
    "$ref": "Oferta",
    "$id": "654e44a9df3a8cb5150ca0b0",
    "$db": "Maria_Contreras"
  }
});

//listar los documentos de Entrevista
use('Maria_Contreras');
db.Oferta.find()



//Borrar documento de Empresa
use('Maria_Contreras');
db.Oferta.deleteOne({"código": 3493748});

use('Maria_Contreras');
db.Oferta.updateOne({"código": 3493748}, {$set:{"salario": 7760}});
//Embebido
use('Maria_Contreras');
db.createCollection('Evaluaciones');
db.Evaluaciones.insertOne({
    "codigo": 004,
    "documentoCandidato": "123456789",
    "nombres": "Juan",
    "apellidos": "Pérez",
    "fechaNacimiento": "01/01/1990",
    "Profesión": "Masculino",
    "fechaEntrevista": "01/01/2022",
    "Habilidades": [
        {
            "habilidad1": "Sociable",
            "habilidad2": "Creativo",
            "habilidad3": "Positivo"
        },
    
    ],
    "entrevistadores": [
        {
            "Nombre": "Cristian Giraldo",
            "Profesión": "Comunicador Social"
        },
        {
            "Nombre": "Ana Gómez",
            "Profesión": "Escritora"
        }
    ],
    "Observaciones": "Buen candidato",
    "idiomas": [
        {
            "primer": "español",
            "segundo": "inglés"
        },
    ],
    "valorPagar": 3600000
});