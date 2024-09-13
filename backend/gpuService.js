const nvidia = require('nvidia-smi');

module.exports.getMetrics = () => {
    return new Promise((resolve, reject) => {
        nvidia((err, data) => {
            if (err) reject(err);
            const gpuMetrics = {
                gpuUsage: data.gpuUtilization,
                gpuMemoryUsage: data.memoryUsed / data.memoryTotal * 100
            };
            resolve(gpuMetrics);
        });
    });
};
