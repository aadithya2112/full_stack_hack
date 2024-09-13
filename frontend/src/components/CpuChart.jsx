import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CpuChart = ({ data }) => {
  const formattedData = data.map((item) => ({
    timestamp: new Date(item.timestamp).toLocaleTimeString(),
    utilization: item.cpu.utilization,
    temperature: item.cpu.temperature,
    frequency: item.cpu.frequency,
  }));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">CPU Usage</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="utilization"
            stroke="#ff7300"
            name="Utilization (%)"
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            name="Temperature (°C)"
          />
          <Line
            type="monotone"
            dataKey="frequency"
            stroke="#82ca9d"
            name="Frequency (GHz)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CpuChart;
