const express = require('express');
const app = express();

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());  // Para que Express pueda leer el cuerpo de las peticiones POST y PATCH

app.get('/productos', (req, res) => {
    //valido datos
    //llamadas a mi BD
    //proceso los datos
    res.send("productos destacados");
});

app.post('/productos', (req, res) => {
    // Aquí podrías usar req.body para procesar los datos recibidos en el cuerpo de la solicitud
    res.send("creando productos destacados");
});

app.get('/user', (req, res) => {
    res.json({
        "nombre": "Alejo",
        "apellido": "Rincón",
        "edad": 42,
        "profesión": "Desarrollador full stack",

    });
});

app.patch('/productos', (req, res) => {
    // Similar a POST, aquí también puedes acceder a los datos con req.body. Para actualizar datos
    res.send("enlazando productos destacados");
});

app.put('/productos', (req, res) => {
    res.send("borrando productos destacados");
});

app.delete('/productos', (req, res) => {
    res.send("borrando productos destacados");
});

app.listen(3000, () => {
    console.log(`servidor en puerto 3000`);
});
