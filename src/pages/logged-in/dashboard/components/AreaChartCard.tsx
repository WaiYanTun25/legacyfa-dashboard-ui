import { Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { AreaDataType } from "@pages/logged-in/dashboard/dashboard.types";
import { useTheme } from "@src/hooks";

export const AreaChartCard = ({
  data,
  label,
  total,
  percentage,
  areaColor,
}: {
  data: AreaDataType[];
  label: string;
  total: string;
  percentage: string;
  areaColor: string;
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`shadow-sm rounded-2xl p-5 lg:col-span-1 ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}
    >
      <h1 className="font-bold mb-3">{label}</h1>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id={label} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={areaColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={areaColor} stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <Tooltip />

          <Area
            type="monotone"
            dataKey="uv"
            stroke={areaColor}
            strokeWidth={3}
            fill={`url(#${label})`}
          />
        </AreaChart>
      </ResponsiveContainer>

      <p className="text-3xl font-bold mt-3">{total}</p>
      <p className="text-green-500">{percentage}</p>
    </div>
  );
};
