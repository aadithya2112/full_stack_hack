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

const NetworkChart = ({ data }) => {
  const formattedData = data.map((item) => ({
    timestamp: new Date(item.timestamp).toLocaleTimeString(),
    receive: item.network.receive,
    transmit: item.network.transmit,
  }));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Network Usage</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="receive"
            stroke="#8884d8"
            name="Receive (MB/s)"
          />
          <Line
            type="monotone"
            dataKey="transmit"
            stroke="#82ca9d"
            name="Transmit (MB/s)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NetworkChart;
