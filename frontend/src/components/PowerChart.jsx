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

const PowerChart = ({ data }) => {
  const formattedData = data.map((item) => ({
    timestamp: new Date(item.timestamp).toLocaleTimeString(),
    powerConsumption: item.power_consumption,
  }));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Power Consumption</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="powerConsumption"
            stroke="#ff0000"
            name="Power (W)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PowerChart;
