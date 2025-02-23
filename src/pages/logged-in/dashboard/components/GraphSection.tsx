import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Product_Data,
  Weekly_Sales_Data,
  Area_Data,
} from "@src/utils/constants";
import { BarChartCard } from "@pages/logged-in/dashboard/components/BarChartCard";

export const GraphSection = () => {
  return (
    <div className="mt-5 lg:ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 text-black">
      <BarChartCard data={Weekly_Sales_Data} />

      <div className="shadow-sm rounded-2xl p-5 lg:col-span-1 bg-white">
        <h1 className="font-bold mb-3">Sales</h1>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart
            data={Area_Data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2797FB" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2797FB" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <Tooltip />

            <Area
              type="monotone"
              dataKey="uv"
              stroke="#2797FB"
              strokeWidth={3}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <p className="text-3xl font-bold mt-3">446</p>
        <p className="text-green-500">↑ 36%</p>
      </div>

      <div className="shadow-sm rounded-2xl p-5 lg:col-span-1 bg-white">
        <h1 className="font-bold mb-3">Profit</h1>
        <p className="text-3xl font-bold">₹ 97,287</p>
        <p className="text-green-500">↑ 27%</p>
      </div>

      <div className="shadow-sm rounded-2xl p-5 lg:col-span-3 bg-white">
        <h1 className="font-bold mb-3">Product Class</h1>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={Product_Data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {Product_Data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="shadow-sm rounded-2xl p-5 lg:col-span-2 bg-white">
        <h1 className="font-bold mb-3">Customer Satisfaction</h1>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="lastMonth" stroke="#8884d8" />
            <Line type="monotone" dataKey="thisMonth" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="shadow-sm rounded-2xl p-5 lg:col-span-1 bg-white flex flex-col items-center justify-center">
        <h1 className="font-bold">Sales Target</h1>
        <p className="text-4xl font-bold text-green-500">82%</p>
        <p>Achieved</p>
      </div>
    </div>
  );
};
