# aleph

> Gestion de Compras, ventas y stock.

## Primeros pasos

1. Instalar [NodeJS](https://nodejs.org/) utilizando [NVM](https://github.com/creationix/nvm)
	- Instalar NVM.
		 ```
    	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
    	```
	- Abrir una consola e instalar NodeJS v6.9.1.
		 ```
    	nvm install 6.9.1
    	```
        Si no se reconoce el comando nvm, cerrar y abrir nuevamente la consola. Si sigue sin reconocer cerrar la sesion o reiniciar la PC.
    - Verificamos que NodeJS se haya instalado la version correspondiente
    	```
    	node -v
    	```
2. Clonamos el repositorio del backend bajo el nombre de aleph
    ```
    git clone https://github.com/anassa/aleph_backend.git aleph
    ```
3. Instalar las dependencias del backend de aleph
   - Ingresamos al directorio clonado.
    	```
    	cd aleph
    	```
	- Instalamos las dependencias
		 ```
    	npm install
    	```
3. Actualizamos el frontend incluido en aleph
   - Ingresamos al directorio clonado.
    	```
    	cd aleph
    	```
	- Inicializamos el submodulo aleph_frontend (carpeta public)
		 ```
    	git submodule init
    	```
	- Actualizamos el submodulo aleph_frontend (carpeta public)
		 ```
    	git submodule update
    	```
   - Ingresamos al directorio public.
    	```
    	cd public
    	```
	- Instalamos las dependencias del aleph_frontend
		 ```
    	npm install
    	```
4. Instalar [MongoDB](https://www.mongodb.com/es).
5. Restablecer la base da datos
	- Ingresamos al directorio clonado.
    	```
    	cd aleph
    	```
    - Restablecemos la base de datos.
    	```
   	 	npm run seed
    	```
6. Instalamos dependencias globales del frontend y backend
   - Instalamos FeathersJS.
    	```
    	npm install -g feathers-cli
    	```
	- Instalamos DoneJS
		 ```
    	npm install -g donejs 
    	```
7. Iniciar la app
    
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
