import express from 'express';


const app = express();

app.get('/users', (request, response) => {
    // console.log('Listagem de usuarios');
    // response.send('Teste conectado');

    response.json([
        'Jorge',
        'Maria',
        'José',
        'Huguinho'
    ])
});

app.listen(3333);