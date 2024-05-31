import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Analytics() {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    // Fetch analytics data from APIs
    axios.get('/api/analytics')
      .then(response => setAnalytics(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="analytics">
      <h2>Engagement Analytics</h2>
      <div className="analytics-data">
        {analytics.map((data, index) => (
          <div key={index} className="analytic">
            <h3>{data.metric}</h3>
            <p>{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
