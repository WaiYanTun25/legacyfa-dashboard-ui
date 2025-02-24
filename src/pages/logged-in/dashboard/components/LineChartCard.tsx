import { LoadingSkeleton } from "@src/components/ui/loading-skeleton/LoadingSkeleton";
import { useTheme } from "@src/hooks";
import { CustomerSatisfactionDataType } from "@src/utils/constants";
import React from "react";
import { LineChart, Line, ResponsiveContainer, Legend } from "recharts";

export const LineChartCard = ({
  data,
  isLoading,
}: {
  data: CustomerSatisfactionDataType[];
  isLoading: boolean;
}) => {
  const { theme } = useTheme();
  return isLoading ? (
    <LoadingSkeleton
      colSpan="lg:col-span-2"
      responsiveHeights={{
        base: "230px",
        sm: "230px",
        md: "230px",
        lg: "280px",
      }}
    />
  ) : (
    <div
      className={`shadow-sm rounded-2xl p-5 lg:col-span-2  ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}
    >
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
