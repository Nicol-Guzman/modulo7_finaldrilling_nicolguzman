# Final Drilling Project

Evaluacion Final del Modulo 7 para el bootcamp "Fullstack Javascript Trainee" impartido por Edutecno.

Se ha utilizado Node.js para levantarlo, haciendo uso de modulos como Sequelize y PG para utilizar PostgreSQL como base de datos.

## Requisitos

- Node.js (versión 16 o superior)
- PostgreSQL (PgAdmin 4)
- Sequelize ORM
- Pg
- .env

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

3. OPCIONAL: Si encuentra vulnerabilidades  te pide hacer un audit, sigue las instrucciones que te entrega npm por la consola.

    ```bash
    npm audit
    ```

    ```bash
    npm audit fix
    ```

4. Crea el archivo .env y reemplaza la informacion con los datos de tu proyecto

    ```.env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=nombre_base_de_datos
    ```

5. Crea la base de datos en PgAdmin con el nombre "db_bootcamp". Se recomienda que tu usuario sea al Admin, en caso de PgAdmin 4 sería "postgres"
     
6. Asegurate de que los datos ingresados en .env concuerden con los definidos cuando creaste la base de datos.

7. Inicializa el servidor para correr el CRUD completo.

    ```node
    node server.js
    ```