# api_hackathon

## Instala la db

### Crea una base de datos

```
CREATE DATABASE <nombre de la base>;
```

### Crea un archivo .env en la raiz de proyecto.

```
touch .env
```

### Las variables solicitadas son estas, sigue el ejemplo:

```
TYPEDB = mariadb
DB = hackathon
USERDB = root
PASSWORDDB = hola
HOSTDB = localhost
PORT = 3000
```

## Corre los siguientes comandos

```
npm install
```
```
npm run install:db
```
```
npm run install:data
```

## Iniciar el server de pruebas

```
npm run dev
```

## Iniciar el server

```
npm run produccion
```
