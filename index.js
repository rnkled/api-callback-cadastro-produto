const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8888;


app.use(cors());

app.use(express.json());

var dados = []
var quantidade = 0
var date = new Date(Date.now())

app.get('/', (req, res) => {
    res.send({monitoramento: date.toLocaleString('pt-BR'), quantidade: quantidade, dados: dados});
    // dados = []
    // quantidade = 0
});
app.post('/', async (req, res) => {
    try {    
        dados.push(req.body)
        quantidade += 1
        res.send({status:"recebido"})   
    } catch (error) {
        res.status(400).send({error: error})
    }
})

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
