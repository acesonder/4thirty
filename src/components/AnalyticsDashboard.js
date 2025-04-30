import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const AnalyticsDashboard = () => {
  const userDemographicsData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [
      {
        label: 'User Demographics',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const serviceUsageData = {
    labels: ['Service A', 'Service B', 'Service C', 'Service D', 'Service E'],
    datasets: [
      {
        label: 'Service Usage',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const caseResolutionData = {
    labels: ['Resolved', 'Pending', 'Escalated'],
    datasets: [
      {
        label: 'Case Resolution',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const responseTimeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Response Time',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <div>
        <h3>User Demographics</h3>
        <Bar data={userDemographicsData} />
      </div>
      <div>
        <h3>Service Usage</h3>
        <Line data={serviceUsageData} />
      </div>
      <div>
        <h3>Case Resolution</h3>
        <Pie data={caseResolutionData} />
      </div>
      <div>
        <h3>Response Time</h3>
        <Line data={responseTimeData} />
      </div>
      <button onClick={() => console.log('Generate Report')}>Generate Report</button>
      <button onClick={() => console.log('Export Data')}>Export Data</button>
    </div>
  );
};

export default AnalyticsDashboard;
