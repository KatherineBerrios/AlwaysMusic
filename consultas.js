// Importando datos desde la base de datos
const pool = require("./configBD");

// Valores ingresados en la terminal para los atributos de la tabla estudiantes
const values = [
    nombre = process.argv[2],
    rut = process.argv[3],
    curso = process.argv[4],
    nivel = process.argv[5],
  ];

// Datos con los que se realizaron las pruebas
//["Brian May" "12.345.678-9" Guitarra 7];

// Insertando datos en la tabla estudiantes
const agregarEstudiante = async () => {
const text = "INSERT INTO estudiantes VALUES ($1, $2, $3, $4)";

  const result = await pool.query(text, values);

  console.log(`Estudiante ${nombre} agregado con éxito`);

  await pool.end();
};

// Actualizando datos en la tabla estudiantes
const editarEstudiante = async () => {
  const text =
    "UPDATE estudiantes SET nombre = $1, rut = $2, curso =$3, nivel = $4";

    const result = await pool.query(text, values);

  console.log(`Estudiante ${nombre} editado con éxito`);

  await pool.end();
};

// Consultando datos de la tabla estudiantes por rut
const  consultaRut= async () => {
  const text = "SELECT * FROM estudiantes WHERE rut = $1";

// Se declara en esta función, ya que solo se solicitará un dato específico
  const values = [rut = process.argv[2]]

  const result = await pool.query(text, values);
  console.log(result.rows);

  await pool.end();
};

// Consultando todos los datos de la tabla estudiantes
const consultaEstudiantes = async () => {

  const result = await pool.query("SELECT * FROM estudiantes");

  console.log("Registro de estudiantes:", result.rows);

  await pool.end();
};

// Borrando datos en la tabla estudiantes
const eliminarEstudiante = async () => {
  const text = "DELETE FROM estudiantes WHERE rut = $1";

  // Se declara en esta función, ya que solo se solicitará un dato específico
  const values = [(rut = process.argv[2])];

  const result = await pool.query(text, values);

  console.log(`Estudiante con rut ${rut} eliminado con éxito`);

  await pool.end();
};

// Exporta los datos de cada función
module.exports = {agregarEstudiante, editarEstudiante, eliminarEstudiante, consultaEstudiantes, consultaRut};
