// src/SuperAdmin/Dashboard/page.tsx
"use client"; // Ensure this is at the top if using client-side features

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, BarChart, Bar, Cell } from 'recharts';

// Sample data
const data = {
  users: [
    { name: 'Jan', count: 400 },
    { name: 'Feb', count: 300 },
    { name: 'Mar', count: 500 },
    // Add more data as needed
  ],
  likes: [
    { name: 'Jan', count: 120 },
    { name: 'Feb', count: 80 },
    { name: 'Mar', count: 200 },
    // Add more data as needed
  ],
  comments: [
    { name: 'Comment A', count: 50, color: '#8884d8' },
    { name: 'Comment B', count: 70, color: '#82ca9d' },
    { name: 'Comment C', count: 90, color: '#ffc658' },
    // Add more data as needed
  ],
  
  blogs: [
    { name: 'Jan', count: 30 },
    { name: 'Feb', count: 20 },
    { name: 'Mar', count: 40 },
    // Add more data as needed
  ],
  products: [
    { name: 'Jan', count: 60 },
    { name: 'Feb', count: 50 },
    { name: 'Mar', count: 70 },
    // Add more data as needed
  ]
};

const DashboardPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Number of Users</h2>
          <LineChart width={500} height={300} data={data.users}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Number of Likes</h2>
          <BarChart width={500} height={300} data={data.likes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Number of Comments</h2>
          <PieChart width={400} height={300}>
            <Pie data={data.comments} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
              {data.comments.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Number of Blogs</h2>
          <LineChart width={500} height={300} data={data.blogs}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#ff7300" />
          </LineChart>
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Number of Products</h2>
          <BarChart width={500} height={300} data={data.products}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
