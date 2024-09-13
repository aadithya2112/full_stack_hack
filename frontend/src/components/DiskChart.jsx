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

const DiskChart = ({ data }) => {
  const formattedData = data.map((item) => ({
    timestamp: new Date(item.timestamp).toLocaleTimeString(),
    readSpeed: item.disk.read_speed,
    writeSpeed: item.disk.write_speed,
    iops: item.disk.iops,
  }));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Disk Usage</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="readSpeed"
            stroke="#ff7300"
            name="Read Speed (GB/s)"
          />
          <Line
            type="monotone"
            dataKey="writeSpeed"
            stroke="#8884d8"
            name="Write Speed (GB/s)"
          />
          <Line type="monotone" dataKey="iops" stroke="#82ca9d" name="IOPS" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DiskChart;
