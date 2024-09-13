const os = require('os-utils');

module.exports.getMetrics = () => {
    return new Promise((resolve) => {
        os.cpuUsage((cpuPercent) => {
            const metrics = {
                cpuUsage: (cpuPercent * 100).toFixed(2),
                freeMemory: os.freemem(),
                totalMemory: os.totalmem(),
                memoryUsage: ((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2),
            };
            resolve(metrics);
        });
    });
};
