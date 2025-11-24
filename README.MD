# Práctica API REST con MongoDB

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **MongoDB** para la gestión de servicios.

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/PabloGartzi/practica-apiRest-mongoDB.git
```
2. Accede al directorio del proyecto:
```
cd practica-apiRest-mongoDB
```

3. Instala las dependencias:
```
npm install
```

4. Crea un archivo .env a partir del .env.template:
```
cp .env.template .env
```

5. Configura las variables de entorno necesarias en el archivo .env:
La URI es mongodb+srv://admin:123456ABC@cluster0.7laarfu.mongodb.net/practica-servicios

### Ejemplo de variables de entorno
PORT=3000
MONGO_URI=<tu_uri_de_mongodb> En este caso la uri esta en el propio archivo de .env.template

## EN TU EQUIPO
1. Para ejecutar la API en tu máquina local:
```
npm run dev
```

2. Por defecto, la API estará disponible en:

http://localhost:3000/api/v1/

## URL de despliegue

La API estará disponible en Render: https://practica-apirest-mongodb.onrender.com
    Por ejemplo, para ver todos los servicios: https://practica-apirest-mongodb.onrender.com/api/v1


## Endpoints para probar en Postman

**Base URL:**

http://localhost:3000/api/v1/

**Crear un servicio:**

POST http://localhost:3000/api/v1/servicios/crear

**Obtener un servicio por ID:**

GET http://localhost:3000/api/v1/servicios/<id>

**Modificar un servicio:**

PUT http://localhost:3000/api/v1/servicios/modificar/<id>

**Borrar un servicio:**

DELETE http://localhost:3000/api/v1/servicios/borrar/<id>

## Tecnologías usadas

Node.js
Express
MongoDB / Mongoose
dotenv
