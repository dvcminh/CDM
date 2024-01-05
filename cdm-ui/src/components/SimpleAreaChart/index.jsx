import React, { useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SimpleAreaChart = ({data}) => {
  const chartData = Object.entries(data).map(([name, uv]) => ({
    name,
    uv,
  }));

  useEffect(() => {
    console.log("chart data");
    console.log(chartData);
  }, [data]);

  return (
    <div style={{ width: '100%', height: '90%' }}>
      <ResponsiveContainer>
        <AreaChart data={chartData} margin={{ top: 10, right: 45, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleAreaChart;
