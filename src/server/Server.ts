import express from 'express';
import './Shared/services/TranslateYup';
import 'dotenv/config';

const server = express();
server.use(express.json());

import router from './Routes/routes';

server.use(router);

export default server;