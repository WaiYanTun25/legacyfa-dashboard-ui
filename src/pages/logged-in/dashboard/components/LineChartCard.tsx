import React from "react";
import { LineChart, Line, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Jan", lastMonth: 30, thisMonth: 50 },
  { name: "Feb", lastMonth: 50, thisMonth: 60 },
  { name: "Mar", lastMonth: 40, thisMonth: 55 },
  { name: "Apr", lastMonth: 60, thisMonth: 70 },
  { name: "May", lastMonth: 50, thisMonth: 65 },
  { name: "Jun", lastMonth: 70, thisMonth: 90 },
];

export const LineChartCard = () => {
  return (
    <div className="shadow-sm rounded-2xl p-5 bg-white lg:col-span-2">
      <h1 className="font-bold mb-3">Customer Satisfaction</h1>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <Legend />
          <Line
            type="monotone"
            dataKey="lastMonth"
            stroke="#2C9AFA"
            strokeWidth={2}
            dot={{ fill: "#2C9AFA", r: 3 }}
            fill="#2C9AFA"
          />
          <Line
            type="monotone"
            dataKey="thisMonth"
            stroke="#33DF9F"
            strokeWidth={2}
            dot={{ fill: "#33DF9F", r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCard;
