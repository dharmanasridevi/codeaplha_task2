import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from social media APIs
    // Example for Twitter:
    axios.get('/api/twitter/analytics')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {/* Render data */}
      <div className="metrics">
        {data.map((metric, index) => (
          <div key={index} className="metric">
            <h3>{metric.title}</h3>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
