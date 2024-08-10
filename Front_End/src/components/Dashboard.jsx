import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Dashboard.css';

const HistogramDashboard = () => {
  const vehicleData = [
    { name: 'Bike', count: 10, returns: 2, date: '2024-07-01' },
    { name: 'Car', count: 20, returns: 4, date: '2024-07-01' },
    { name: 'Tempo', count: 5, returns: 1, date: '2024-07-01' },
    { name: 'Van', count: 8, returns: 2, date: '2024-07-01' },
    { name: 'Auto', count: 3, returns: 1, date: '2024-07-01' },
    { name: 'Water', count: 10, returns: 3, date: '2024-07-01' },
  ];

  return (
    <div className="histogram-dashboard-container">
      <h1>Vehicle Data Histogram</h1>
      <div className="chart-container">
        <BarChart
          width={600}
          height={300}
          data={vehicleData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
          <Bar dataKey="returns" fill="#82ca9d" />
        </BarChart>
        <div className="date-box">
          <h2>Data Dates</h2>
          <ul>
            {vehicleData.map((vehicle) => (
              <li key={vehicle.date}>
                <strong>{vehicle.date}</strong>: {vehicle.name} (Count: {vehicle.count}, Returns: {vehicle.returns})
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="data-section">
        <h2>Detailed Vehicle Data</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Vehicle Type</th>
              <th>Count</th>
              <th>Returns</th>
            </tr>
          </thead>
          <tbody>
            {vehicleData.map((vehicle) => (
              <tr key={vehicle.date}>
                <td>{vehicle.date}</td>
                <td>{vehicle.name}</td>
                <td>{vehicle.count}</td>
                <td>{vehicle.returns}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistogramDashboard;
