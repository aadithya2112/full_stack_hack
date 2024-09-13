const cpuService = require('./cpuService');
const gpuService = require('./gpuService');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Client connected:', socket.id);

        const intervalId = setInterval(async () => {
            const cpuMetrics = await cpuService.getMetrics();
            const gpuMetrics = await gpuService.getMetrics();
            socket.emit('systemMetrics', { cpuMetrics, gpuMetrics });
        }, 1000);

        socket.on('disconnect', () => {
            console.log('Client disconnected');
            clearInterval(intervalId);
        });
    });
};
