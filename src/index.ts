import { server, PORT } from './server/Server';

server.listen(PORT, () => {
    console.log(`Server is running! http://localhost:${PORT}`);
});