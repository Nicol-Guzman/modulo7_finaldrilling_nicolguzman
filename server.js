import { sequelize } from './app/models/index.js';
import * as userController from './app/controllers/user.controller.js';
import * as bootcampController from './app/controllers/bootcamp.controller.js';

const run = async () => {
    try {
        // CREAR USUARIOS
        const user1 = await userController.createUser({
            firstName: 'Mateo',
            lastName: 'Díaz',
            email: 'mateo.diaz@correo.com',
        });

        const user2 = await userController.createUser({
            firstName: 'Santiago',
            lastName: 'Mejias',
            email: 'santiago.mejias@correo.com',
        });

        const user3 = await userController.createUser({
            firstName: 'Lucas',
            lastName: 'Rojas',
            email: 'lucas.rojas@correo.com',
        });

        const user4 = await userController.createUser({
            firstName: 'Facundo',
            lastName: 'Fernández',
            email: 'facundo.fernandez@correo.com',
        });

        // CREAR BOOTCAMPS
        const bootcamp1 = await bootcampController.createBootcamp({
            title: 'Introduciendo El Bootcamp De React',
            cue: 10,
            description: 'React es la librería más usada en JavaScript para el desarrollo de interfaces.',
        });

        const bootcamp2 = await bootcampController.createBootcamp({
            title: 'Bootcamp Desarrollo Web Full Stack',
            cue: 12,
            description: 'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como JavaScript, nodeJS, Angular, MongoDB, ExpressJS.',
        });

        const bootcamp3 = await bootcampController.createBootcamp({
            title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning',
            cue: 12,
            description: 'Domina Data Science todo el ecosistema de lenguajes y herramientas de Big Data e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.',
        });

        // AAGREGAR USUARIOS A BOOTCAMPS
        await bootcampController.addUser(bootcamp1.id, user1.id);
        await bootcampController.addUser(bootcamp1.id, user2.id);
        await bootcampController.addUser(bootcamp2.id, user1.id);
        await bootcampController.addUser(bootcamp3.id, user1.id);
        await bootcampController.addUser(bootcamp3.id, user2.id);
        await bootcampController.addUser(bootcamp3.id, user3.id);
        await bootcampController.addUser(bootcamp3.id, user4.id);

        // CONSULTA 1: Bootcamp por ID, incluyendo usuarios
        const _bootcamp1 = await bootcampController.findById(bootcamp1.id);
        console.log('>> Bootcamp:', JSON.stringify(_bootcamp1, null, 2));

        // CONSULTA 2: Listar todos los bootcamps
        const bootcamps = await bootcampController.findAll();
        console.log('>> Bootcamps:', JSON.stringify(bootcamps, null, 2));

        // CONSULTA 3: Obtener un usuario por ID, incluyendo bootcamps
        const _user = await userController.findUserById(user1.id);
        console.log('>> Usuario 1:', JSON.stringify(_user, null, 2));

        // CONSULTA 4: Listar todos los usuarios y sus bootcamps
        const users = await userController.findAll();
        console.log('>> Usuarios:', JSON.stringify(users, null, 2));

        // CONSULTA 5: Actualizar usuario por ID
        await userController.updateUserById(user1.id, 'Pedro', 'Sánchez');
        const _updatedUser = await userController.findUserById(user1.id);
        console.log('>> Usuario actualizado:', JSON.stringify(_updatedUser, null, 2));

        // CONSULTA 6: Eliminar un usuario por ID (POR FAVOR DESCOMENTAR Y VOLVER A LANZAR SERVIDOR)
        await userController.deleteUserById(user1.id);
        console.log('Usuario eliminado.');

    } catch (error) {
        console.error('Error en la creación de datos:', error);
    }
};

sequelize.sync({ force: true })
    .then(() => {
        console.log('Base de datos sincronizada...');
        run();
    })
    .catch((error) => {
        console.error('Error intentando sincronizar la base de datos:', error);
    });
