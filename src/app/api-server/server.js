const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const app = express();
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'Registro_Ingreso',
  password: '12345678',
  port: 5432,
});

app.use(bodyParser.json());

// Registro
app.post('/registro', async (req, res) => {
  const { nombre, correo, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO usuarios (nombre, correo, password) VALUES ($1, $2, $3)';
    await pool.query(query, [nombre, correo, hashedPassword]);
    res.status(201).send('Usuario registrado correctamente');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al registrar usuario');
  }
});

// Ingreso
app.post('/login', async (req, res) => {
  const { nombre, password } = req.body;

  try {
    const query = 'SELECT * FROM usuarios WHERE nombre = $1';
    const result = await pool.query(query, [nombre]);

    if (result.rows.length === 0) {
      return res.status(401).send('Nombre o contraseña incorrectos');
    }

    const usuario = result.rows[0];
    const match = await bcrypt.compare(password, usuario.password);

    if (!match) {
      return res.status(401).send('Nombre o contraseña incorrectos');
    }

    res.status(200).send('Inicio de sesión exitoso');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al iniciar sesión');
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
