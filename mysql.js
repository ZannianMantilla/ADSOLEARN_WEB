const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',      
  user: 'root',     
  password: '', 
  database: 'adsolearn' 
});


connection.connect((err) => {
  if (err) {
    console.error('Error al conectarse a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Realiza una consulta de ejemplo
connection.query('SELECT * FROM tu_tabla', (err, results) => {
  if (err) {
    console.error('Error al realizar la consulta:', err);
    return;
  }
  console.log('Resultados de la consulta:', results);
});

// Cierra la conexión
connection.end();
