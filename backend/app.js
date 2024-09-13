const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const metricsRouter = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());
app.use('/api/metrics', metricsRouter);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});

require('./socket')(io);
