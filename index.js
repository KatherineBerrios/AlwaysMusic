// Importando datos desde consultas.js
const {
  consultaEstudiantes,
  agregarEstudiante,
  eliminarEstudiante,
  editarEstudiante,
  consultaRut,
} = require("./consultas");

// Llamamos a la función para ejecutar la consulta
agregarEstudiante();
eliminarEstudiante();
editarEstudiante();
consultaEstudiantes();
consultaRut();
