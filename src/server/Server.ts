import express from 'express';
const server = express();
const PORT = 3000;

server.get('/', (req, res) => {
    return res.send('Home');
});

export { server, PORT };