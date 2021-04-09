'use strict'

const express = require('express');
const app = express();

const PORT = 3000;
const router = express.Router();

// ruta de prueba
router.get('/ruta_prueba', (req, res) => {
res.send('ruta ok!');

});
app.use(router);

app.listen(PORT, () => {
     console.log('servidor corriendo en pruerto: ' + PORT)

})