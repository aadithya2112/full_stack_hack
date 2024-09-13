import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ResourceChart = ({ data }) => {
  // Format the data to use 'timestamp' as the key and display multiple metrics over time
  const formattedData = data.map((item) => ({
    timestamp: new Date(item.timestamp).toLocaleTimeString(), // Format the timestamp for readability
    cpuUtilization: item.cpu.utilization,
    cpuTemperature: item.cpu.temperature,
    cpuFrequency: item.cpu.frequency,
    memoryUsed: item.memory.used,
    memoryFree: item.memory.free,
    diskReadSpeed: item.disk.read_speed,
    diskWriteSpeed: item.disk.write_speed,
    networkReceive: item.network.receive,
    networkTransmit: item.network.transmit,
    powerConsumption: item.power_consumption,
  }));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Resource Utilization Overview</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={formattedData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* CPU Utilization */}
              <Line
                type="monotone"
                dataKey="cpuUtilization"
                stroke="#ff7300"
                name="CPU Utilization (%)"
                dot={false}
              />
              {/* CPU Temperature */}
              <Line
                type="monotone"
                dataKey="cpuTemperature"
                stroke="#8884d8"
                name="CPU Temperature (°C)"
                dot={false}
              />
              {/* CPU Frequency */}
              <Line
                type="monotone"
                dataKey="cpuFrequency"
                stroke="#82ca9d"
                name="CPU Frequency (GHz)"
                dot={false}
              />
              {/* Memory Used */}
              <Line
                type="monotone"
                dataKey="memoryUsed"
                stroke="#d0ed57"
                name="Memory Used (GB)"
                dot={false}
              />
              {/* Memory Free */}
              <Line
                type="monotone"
                dataKey="memoryFree"
                stroke="#a4de6c"
                name="Memory Free (GB)"
                dot={false}
              />
              {/* Disk Read Speed */}
              <Line
                type="monotone"
                dataKey="diskReadSpeed"
                stroke="#8884d8"
                name="Disk Read Speed (GB/s)"
                dot={false}
              />
              {/* Disk Write Speed */}
              <Line
                type="monotone"
                dataKey="diskWriteSpeed"
                stroke="#ffc658"
                name="Disk Write Speed (GB/s)"
                dot={false}
              />
              {/* Network Receive */}
              <Line
                type="monotone"
                dataKey="networkReceive"
                stroke="#ff6347"
                name="Network Receive (MB/s)"
                dot={false}
              />
              {/* Network Transmit */}
              <Line
                type="monotone"
                dataKey="networkTransmit"
                stroke="#4682b4"
                name="Network Transmit (MB/s)"
                dot={false}
              />
              {/* Power Consumption */}
              <Line
                type="monotone"
                dataKey="powerConsumption"
                stroke="#ff0000"
                name="Power Consumption (W)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResourceChart;
