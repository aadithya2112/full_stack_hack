import React from 'react';
import { Line } from 'react-chartjs-2';

const SystemMetrics = ({ metrics }) => {
    const cpuData = {
        labels: ['CPU Usage'],
        datasets: [
            {
                label: 'CPU (%)',
                data: [metrics.cpuMetrics?.cpuUsage || 0],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const gpuData = {
        labels: ['GPU Usage'],
        datasets: [
            {
                label: 'GPU (%)',
                data: [metrics.gpuMetrics?.gpuUsage || 0],
                borderColor: 'rgb(192, 75, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <h2>System Metrics</h2>
            <Line data={cpuData} />
            <Line data={gpuData} />
        </div>
    );
};

export default SystemMetrics;
