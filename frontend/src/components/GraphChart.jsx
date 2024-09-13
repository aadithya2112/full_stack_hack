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

// Utility function to transform the data
const processData = (events) => {
  return events
    .filter(
      (event) => event.metrics || (event.resources && event.resources.GPU_0) // Filter only the relevant events
    )
    .map((event) => {
      const { timestamp, metrics, resources } = event;

      // Metrics (like loss, accuracy)
      if (metrics) {
        return {
          timestamp,
          loss: metrics.loss,
          accuracy: metrics.accuracy,
        };
      }

      // Resources (like GPU utilization)
      if (resources && resources.GPU_0) {
        return {
          timestamp,
          GPU_0_utilization: parseFloat(resources.GPU_0.utilization),
          GPU_1_utilization: parseFloat(resources.GPU_1.utilization),
        };
      }

      return null;
    })
    .filter(Boolean); // Remove null values
};

const Dashboard = ({ data }) => {
  const chartData = processData(data.training_session.events);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Training Session Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">
          Resource Utilization & Metrics
        </h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
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
              <Line
                type="monotone"
                dataKey="GPU_0_utilization"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                name="GPU 0 Utilization"
              />
              <Line
                type="monotone"
                dataKey="GPU_1_utilization"
                stroke="#82ca9d"
                name="GPU 1 Utilization"
              />
              <Line
                type="monotone"
                dataKey="loss"
                stroke="#ff7300"
                name="Loss"
              />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#387908"
                name="Accuracy"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
