﻿# DSN-EV01-TINOCO
## Requerimientos
>Nuestros requerimientos para esta aplicación web dependen de nuestro objetivo, si vamos a ejecutarla localmente necesitaremos git para la implementación, si vamos a usar docker necesitamos docker instalado en nuestro servidor. No te olvides tener habilitados los puertos necesarios en tu servidor, la aplicación corre en el puerto 9000 pero los dockers pueden usar otro puerto , en las variables de entorno del docker podremos definir un puerto distinto y una base de datos propia, es distinto el puerto del host que del docker.

>Otro punto importante es tener la url de la conexión, esta aplicación trabaja con Mongodb y la estructura define carpetas para rutas, archivos de configuración, conexión a base de datos, modelos y controladores. Esto evita el código espaguetti en nuestra aplicación , especificaemnte en el archivo app.js.

---
## Guía de instalación
### Instalación local
>Ejecutaremos los siguientes comandos

    git clone https://github.com/Tecsupsoft/practica01-dsn-Jacko-TF.git app
    cd app 
    npm install

>Antes de ejecutar nuestra aplicación debemos crear un archivo .env en el directorio app con el siguiente contenido

    PORT=9000
    URI=<tu url de conexion>

>Ahora podemos ejecutar el comando

    npm start

>Veremos nuestra aplicación desde http://localhost:9000/

---
### Instalación en Docker
>Para instalacion en docker necesitaremos crear un archivo Dockerfile, para ello podemos ejecutar

    vi Dockerfile
    
>En la línea de comandos de vi podemos editar colocando i , copiamos el siguiente contenido:

    FROM ubuntu
    RUN apt-get update && apt-get install -y nodejs npm
    RUN git clone -q https://github.com/Jacko-TF/DSN-EV01-TINOCO.git app
    WORKDIR app
    RUN npm install > /dev/null
    ENV PORT 9000
    ENV URI <tu url de conexion mongo>
    EXPOSE 9000
    CMD ["node","app.js"]

> Luego regresamos al entorno de comandos presionando esc, guardamos y salimos con :wq , con cat Dockerfile verificamos el contenido del archivo. 
> Para crear nuestra imagen usaremos el siguiente comando:

    docker build -t app:v0.01 . 
    
> Con docker images podremos ver nuestra imagen, ahora ejecutaremos el docker con el siguiente comando:

    docker run -i -t -p 9000:9000 app:v0.01

>Nuestro servidor responde desde el puerto 9000 a las peticiones que el docker responde desde el puerto 9000, así tendriamos que acceder al puerto 9000 del servidor para ver nuestra página web.

--- 
