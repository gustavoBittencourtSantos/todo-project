const port = 3000;
const express = require('express');
const server =  express();
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

server.listen(port, () =>{
    console.log(`Rodando na porta ${port}`);
})
