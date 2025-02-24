import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { ProductDataType } from "@src/utils/constants";
import { InboxStackIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@src/hooks";
import { LoadingSkeleton } from "@src/components/ui/loading-skeleton/LoadingSkeleton";

export const PieChartCard = ({
  data,
  title,
  isLoading,
}: {
  data: ProductDataType[];
  title: string;
  isLoading: boolean;
}) => {
  const { theme } = useTheme();
  return isLoading ? (
    <LoadingSkeleton
      colSpan="lg:col-span-3"
      responsiveHeights={{
        base: "230px",
        sm: "230px",
        md: "230px",
        lg: "280px",
      }}
    />
  ) : (
    <div
      className={`shadow-sm rounded-2xl p-5 lg:col-span-3 ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}
    >
      <h1 className="font-bold mb-3">{title}</h1>
      <div className="flex items-center relative">
        <ResponsiveContainer width="60%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute lg:left-3/10 left-3/10 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12">
          <InboxStackIcon className="w-full h-full object-contain rounded" />
        </div>

        <ul className="ml-5">
          {data.map((item) => (
            <li key={item.name} className="flex items-center mb-2">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
