// db.js
const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'master_db',
};

// Función para establecer la conexión a la base de datos
function connectToDatabase() {
  const connection = mysql.createConnection(dbConfig);

  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        reject(error);
      } else {
        console.log('Conexión exitosa a la base de datos');
        resolve(connection);
      }
    });
  });
}

module.exports = {
  connectToDatabase,
};
