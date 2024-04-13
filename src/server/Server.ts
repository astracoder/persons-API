import express from 'express';
import 'dotenv/config';

const server = express();
server.use(express.json());

import router from './Routes/routes';

interface Test {

}

server.use(router);

export default server;