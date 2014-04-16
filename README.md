Aleph Backend
=============

## Requerimientos
1.  MongoDB ~2.6
2.  NodeJS ~0.10.26
3.  Git
4.  SailsJS

### Configurando Mongo DB

1.  [Descargamos](http://www.mongodb.org/downloads) la versión que corresponda según nuestro sistema operativo.
2.  Instalamos lo descargado.

### Configurando NodeJS

1.  [Descargamos](http://nodejs.org/download/) la versión que corresponda según nuestro sistema operativo.
2.  Instalamos lo descargado.

### Configurando Git

1.  [Descargamos](http://git-scm.com/download/win) la versión que corresponda según nuestro sistema operativo.
2.  Instalamos lo descargado, utilizando los parámetros por defectos propuestos por el instalador.
3.  Abrimos Git Bash (desde el escritorio o bien desde el menú inicio).
4.  Utilizando el Git Bash nos dirigimos al lugar donde vamos a guardar la aplicación, por ejemplo, cd *C:\Proyecto*.
5.  Clonamos el backend utilizando el comando *git clone https://github.com/anassa/aleph_backend aleph* (al clonar se creara una carpeta llamada aleph en el directorio donde nos encontremos, la cual contendrá el backend de aleph).
6.  Ingresamos a la carpeta aleph utilizando el comando *cd aleph*
7.  Clonamos el frontend utilizando el comando *git clone https://github.com/anassa/aleph_frontend -b produccion assets* (al clonar se creara una carpetea en aleph llamada assets que contendrá la versión de producción del frontend de aleph).

### Configurando Sails

1.  Abrimos un Git Bash (desde el escritorio o bien desde el menú inicio).
2.  Instalamos SailsJS utilizando el comando *npm install -g sails*.

### Iniciando la aplicación

1.  Utilizando la consola (cmd) ejecutamos el archivo mongod.exe que se encuentra en la carpeta bin del directorio de instalación. Por defecto, *C:\Archivos de Programa\MongoDB\bin\mongod.exe*.
2.  Utilizando Git Bash nos dirigimos a la carpeta aleph
3.  ATENCIÓN: Solo realizar este pasó la primera vez. Utilizamos el commando node init.
4.  Utilizamos el comando *sails lift*
5.  Utilizando un navegador decente (Chrome o Firefox) accedemos a http://localhost:1337/
