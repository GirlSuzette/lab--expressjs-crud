// Configurar  Rutas 

const { Router } = require('express')
const app = Router()



const lists = require('../controllers/lists/lists')


app.get('/lists', lists.index);
app.get('/lists/:id', lists.find);
app.post('/lists', lists.create)
app.put('/lists/:id', lists.update)


module.exports = app; 