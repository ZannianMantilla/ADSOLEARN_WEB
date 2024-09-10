const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Conexión a la base de datos
async function connectDB() {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'adsolearn'
    });
}


app.post('/api/register-aprendiz', async (req, res) => {
    const { nombre, apellido, correo_ins, password, telefono, edad } = req.body;


    if (!nombre || !apellido || !correo_ins || !password || !telefono || !edad) {
        return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }

    try {
        const connection = await connectDB();


        const query = `
            INSERT INTO aprendices (nombre, apellido, correo_institucional, password, telefono, fecha_nacimiento)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        await connection.execute(query, [nombre, apellido, correo_ins, password, telefono, edad]);
        await connection.end();

        res.status(200).json({ success: true, message: 'Registro exitoso' });

    } catch (err) {
        console.error('Error en la base de datos:', err);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
