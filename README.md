# Final Drilling Project

Este es un proyecto final del módulo 7, que utiliza Node.js con Sequelize y PostgreSQL como base de datos. El objetivo es desarrollar una API para gestionar datos en una base de datos PostgreSQL utilizando el ORM Sequelize.

## Requisitos

- Node.js (versión 16 o superior)
- PostgreSQL (una base de datos local o remota)
- Sequelize ORM
- Archivo `.env` para la configuración de variables de entorno

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Nicol-Guzman/modulo7_finaldrilling_nicolguzman.git
   cd modulo7_finaldrilling_nicolguzman
   ```

2. Instala las dependencias del proyecto
    
    ```bash
    npm install
    ```

*Si la consola te pide hacer audit, realiza los pasos que te indica antes de seguir.

3. Crea el archivo .env

    ```.env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=nombre_base_de_datos
    ```

4. Crea la base de datos en PgAdmin con el nombre "db_bootcamp"
    
5. Asegurate de que los ingresados en .env concuerden con los definidos cuando creaste la base de datos.

6. Inicializa el servidor para correr el CRUD

    ```node
    node server.js
    ```