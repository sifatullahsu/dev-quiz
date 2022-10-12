import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const topicsData = useLoaderData().data;

  return (
    <section id='statistics' className='py-14'>
      <div className='container mx-auto'>
        <div className='text-center p-4'>
          <h2 className='text-3xl font-semibold mb-3 text-indigo-800'>Statistics Report</h2>
          <p className='mb-12'>This is our all topics quiz total satistics report in a chart</p>
        </div>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '100px' }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={topicsData} margin={{ top: 10, right: 30, left: 0, bottom: 0, }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistics;