import db from '../models/index.js';


const { bootcamps: Bootcamp } = db; 

// CREAR USUARIOS
export const createUser = async (user) => {
  try {
    const newUser = await db.users.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    console.log(`Se ha creado el usuario: ${JSON.stringify(newUser, null, 4)}`);
    return newUser;
  } catch (err) {
    console.log("Error al tratar de crear el usuario.", err);
  }
};

// OBTENER LOS BOOTCAMPS DE UN USUARIO
export const findUserById = async (user_id) => {
  try {
    const user = await db.users.findByPk(user_id, {
      include: [{
        model: db.bootcamps,
        as: "bootcamps",
        attributes: ["id", "title"],
        through: {
          attributes: [],
        },
      }],
    });
    return user;
  } catch (err) {
    console.log("Error mientras se intentaba obtener el usuario", err);
  }
};

// OBTENER TODOS LOS USUARIOS Y SUS BOOTCAMPS
export const findAll = async () => {
  try {
    const users = await db.users.findAll({
      include: [{
        model: db.bootcamps,
        as: "bootcamps",
        attributes: ["id", "title"],
        through: {
          attributes: [],
        },
      }],
    });
    return users;
  } catch (err) {
    console.log("Error al intentar obtener todos los usuarios y sus bootcamps.", err);
  }
};

// ACTUALIZAR
export const updateUserById = async (user_id, fName, lName) => {
  try {
    const updatedUser = await db.users.update(
      { firstName: fName, lastName: lName },
      { where: { id: user_id } }
    );
    console.log(`Se ha actualizado el usuario: ${JSON.stringify(updatedUser, null, 4)}`);
    return updatedUser;
  } catch (err) {
    console.log("Error mal intentar actualizar el usuario:.", err);
  }
};

// ELIMINAR
export const deleteUserById = async (user_id) => {
  try {
    const deletedUser = await db.users.destroy({ where: { id: user_id } });
    console.log(`Se ha eliminado el usuario con id=${user_id}`);
    return deletedUser;
  } catch (err) {
    console.log("Error al intentar eliminar el usuario:.", err);
  }
};
  