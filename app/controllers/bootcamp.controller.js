import db from '../models/index.js';  // Cambiar la importación

const { users: User, bootcamps: Bootcamp } = db; 

// CREAR BOOTCAMP
export const createBootcamp = async (bootcamp) => {
  try {
    const nuevoBootcamp = await db.bootcamps.create({
      title: bootcamp.title,
      cue: bootcamp.cue,
      description: bootcamp.description,
    });
    console.log(`>> Bootcamp creado: ${JSON.stringify(nuevoBootcamp, null, 4)}`);
    return nuevoBootcamp;
  } catch (err) {
    console.log(`>> Error al crear el bootcamp: ${err}`);
  }
};

// AGREGAR USUARIO AL BOOTCAMP
export const addUser = async (bootcamp_id, user_id) => {
  try {
    const bootcamp = await db.bootcamps.findByPk(bootcamp_id);
    if (!bootcamp) {
      console.log("Bootcamp no encontrado!");
      return null;
    }
    const user = await db.users.findByPk(user_id);
    if (!user) {
      console.log("Usuario no encontrado!");
      return null;
    }
    await bootcamp.addUser(user);
    console.log('=========================================================================');
    console.log(` Usuario con id=${user.id} agregado al bootcamp con id=${bootcamp.id}`);
    console.log('=========================================================================');
    return bootcamp;
  } catch (err) {
    console.log("ERROR: No se ha logrado agregar el usuario al bootcamp.", err);
  }
};

// OBTENER BOOTCAMP POR ID
export const findById = async (id) => {
  try {
    const bootcamp = await db.bootcamps.findByPk(id, {
      include: [{
        model: db.users,
        as: "users",
        attributes: ["id", "firstName", "lastName"],
        through: {
          attributes: [],
        }
      }],
    });
    return bootcamp;
  } catch (err) {
    console.log("ERROR: No se pueden obtener los datos del bootcamp.", err);
  }
};

// OBTENER TODOS LOS BOOTCAMPS Y SUS USUARIOS
export const findAll = async () => {
  try {
    const bootcamps = await db.bootcamps.findAll({
      include: [{
        model: db.users,
        as: "users",
        attributes: ["id", "firstName", "lastName"],
        through: {
          attributes: [],
        }
      }],
    });
    return bootcamps;
  } catch (err) {
    console.log(">> Error al intentar obtener los bootcamps con sus usuarios incluidos: ", err);
  }
};