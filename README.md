# aleph

> Gestion de Compras, ventas y stock.

## Primeros pasos

1. Instalar NodeJS [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/).
2. Instalar las dependencias
    
    ```
    cd path/to/aleph; npm install
    ```
3. Instalar [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mongodb-community-edition).
4. Restablecer la base da datos
    
    ```
    npm run seed
    ```

5. Iniciar la app
    
    ```
    npm start
    ```

## Pruebas

Utilizar el comando `npm test` y se ejecutaran todas las pruebas en el directorio `test/`.

## Generadores

El proyecto utiliza el framework feathersjs, estos son algunos comandos disponibles:

```
$ npm install -g feathers-cli             # Instala Feathers CLI

$ feathers generate service               # Genera un nuevo [Service](https://docs.feathersjs.com/services/readme.html)
$ feathers generate hook                  # Genera un nuevo [Hook](https://docs.feathersjs.com/hooks/readme.html)
$ feathers generate model                 # Genera un nuevo [Model](https://docs.feathersjs.com/databases/mongoose.html)
$ feathers help                           # Muestra todos los comandos disponbiles
```

__0.1.0__

- Primer release

## Licencia

Derecho de copia (c) 2016

Licensiado bajo [MIT license](LICENSE).
