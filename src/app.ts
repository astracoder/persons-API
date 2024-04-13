import server from './server/Server';
const PORT = process.env.PORT;

server.listen(PORT || 3000, () => {
    console.log(`Server is running! http://localhost:${PORT}`);
});