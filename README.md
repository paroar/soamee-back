# Soamee-back

Backend para catálogo de teléfonos. La aplicación consiste en una API REST escrita con Nodejs, usando express y mongoose.

En el directorio mongo se encuentra un script que carga datos iniciales al inicializar por primera el contenedor.

Para iniciar la aplicación,

```sh
docker-compose up
```

Si se quiere volver a cargar la base de datos,

```sh
docker-compose down
docker-compose up
```

## Endpoints

**GET** /phones  
**GET** /phones/:phoneId  
**POST** /phones  
**PATCH** /phones/:phoneId  
**DELETE** /phones/:phoneId
