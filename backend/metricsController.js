const cpuService = require('./cpuService');
const gpuService = require('./gpuService');

exports.getMetrics = async (req, res) => {
    try {
        const cpuMetrics = await cpuService.getMetrics();
        const gpuMetrics = await gpuService.getMetrics();
        res.json({ cpuMetrics, gpuMetrics });
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch metrics' });
    }
};
