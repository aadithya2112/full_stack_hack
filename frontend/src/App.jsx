import Dashboard from "./components/GraphChart";
import ResourceChart from "./components/ResourceChart";
import React from "react";
import CpuChart from "./components/CpuChart";
import MemoryChart from "./components/MemoryChart";
import DiskChart from "./components/DiskChart";
import NetworkChart from "./components/NetworkChart";
import PowerChart from "./components/PowerChart";

const resourceData = [
  {
    timestamp: "2024-09-14T00:30:00",
    cpu: { utilization: 84.01, temperature: 83.85, frequency: 3.44 },
    memory: { total: 1024, used: 835.04, free: 38.62 },
    disk: { read_speed: 1.8, write_speed: 0.48, iops: 10920 },
    network: { receive: 195.76, transmit: 56.19 },
    power_consumption: 867.71,
  },
  {
    timestamp: "2024-09-14T00:31:00",
    cpu: { utilization: 73.78, temperature: 61.99, frequency: 2.75 },
    memory: { total: 1024, used: 922.36, free: 205.09 },
    disk: { read_speed: 2.62, write_speed: 0.47, iops: 11607 },
    network: { receive: 139.73, transmit: 45.4 },
    power_consumption: 828.09,
  },
  {
    timestamp: "2024-09-14T00:32:00",
    cpu: { utilization: 96.18, temperature: 63.35, frequency: 3.58 },
    memory: { total: 1024, used: 647.91, free: 297.41 },
    disk: { read_speed: 2.43, write_speed: 0.11, iops: 13517 },
    network: { receive: 136.14, transmit: 59.57 },
    power_consumption: 973.02,
  },
  {
    timestamp: "2024-09-14T00:33:00",
    cpu: { utilization: 75.23, temperature: 88.49, frequency: 3.82 },
    memory: { total: 1024, used: 889.33, free: 156.39 },
    disk: { read_speed: 1.32, write_speed: 0.21, iops: 13164 },
    network: { receive: 108.35, transmit: 51.58 },
    power_consumption: 847.87,
  },
  {
    timestamp: "2024-09-14T00:34:00",
    cpu: { utilization: 78.27, temperature: 61.56, frequency: 3.37 },
    memory: { total: 1024, used: 635.63, free: 43.33 },
    disk: { read_speed: 1.97, write_speed: 0.25, iops: 14562 },
    network: { receive: 168.36, transmit: 38.68 },
    power_consumption: 823.57,
  },
  {
    timestamp: "2024-09-14T00:35:00",
    cpu: { utilization: 75.9, temperature: 65.22, frequency: 2.73 },
    memory: { total: 1024, used: 593.68, free: 304.17 },
    disk: { read_speed: 2.23, write_speed: 0.23, iops: 10659 },
    network: { receive: 154.76, transmit: 42.6 },
    power_consumption: 812.09,
  },
  {
    timestamp: "2024-09-14T00:36:00",
    cpu: { utilization: 79.64, temperature: 72.52, frequency: 3.99 },
    memory: { total: 1024, used: 862.88, free: 480.33 },
    disk: { read_speed: 1.75, write_speed: 0.29, iops: 13975 },
    network: { receive: 199.25, transmit: 55.68 },
    power_consumption: 991.41,
  },
  {
    timestamp: "2024-09-14T00:37:00",
    cpu: { utilization: 91.73, temperature: 87.49, frequency: 3.18 },
    memory: { total: 1024, used: 528.43, free: 489.6 },
    disk: { read_speed: 1.78, write_speed: 0.22, iops: 16757 },
    network: { receive: 178.12, transmit: 60.19 },
    power_consumption: 953.17,
  },
  {
    timestamp: "2024-09-14T00:38:00",
    cpu: { utilization: 84.28, temperature: 78.64, frequency: 2.85 },
    memory: { total: 1024, used: 865.07, free: 190.12 },
    disk: { read_speed: 1.15, write_speed: 0.41, iops: 11586 },
    network: { receive: 139.31, transmit: 33.2 },
    power_consumption: 942.01,
  },
  {
    timestamp: "2024-09-14T00:39:00",
    cpu: { utilization: 81.15, temperature: 63.32, frequency: 3.51 },
    memory: { total: 1024, used: 602.09, free: 6.6 },
    disk: { read_speed: 2.84, write_speed: 0.18, iops: 15538 },
    network: { receive: 179.24, transmit: 40.66 },
    power_consumption: 844.1,
  },
];

function App() {
  return (
    <div className="App p-6">
      <CpuChart data={resourceData} />
      <MemoryChart data={resourceData} />
      <DiskChart data={resourceData} />
      <NetworkChart data={resourceData} />
      <PowerChart data={resourceData} />
    </div>
  );
}

export default App;
