import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { WeeklySalesDataType } from "@pages/logged-in/dashboard/dashboard.types";
import { useTheme } from "@src/hooks";
import { LoadingSkeleton } from "@src/components/ui/loading-skeleton/LoadingSkeleton";

export const BarChartCard = ({
  data,
  isLoading,
}: {
  data: WeeklySalesDataType[];
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
      className={`shadow-sm rounded-2xl p-5 lg:col-span-2 ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}
    >
      <h1 className="font-bold mb-3">Weekly Sales</h1>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
          barSize={20}
        >
          <XAxis
            dataKey="day"
            tick={{ fill: "#888" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip cursor={{ fill: "transparent" }} />

          <Bar dataKey="sales" radius={[5, 5, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
