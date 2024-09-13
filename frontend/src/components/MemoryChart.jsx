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

const MemoryChart = ({ data }) => {
  const formattedData = data.map((item) => ({
    timestamp: new Date(item.timestamp).toLocaleTimeString(),
    used: item.memory.used,
    free: item.memory.free,
  }));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Memory Usage</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="used"
            stroke="#82ca9d"
            name="Used (MB)"
          />
          <Line
            type="monotone"
            dataKey="free"
            stroke="#8884d8"
            name="Free (MB)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MemoryChart;
