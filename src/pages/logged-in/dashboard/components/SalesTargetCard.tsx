import { useTheme } from "@src/hooks";
import { PieChart, Pie, Cell } from "recharts";
import { SalesTargetDataType } from "@src/utils/constants";

const COLORS = ["#35E0A1", "#E5F6EF"];

export const SalesTargetCard = ({
  data,
  title,
}: {
  data: SalesTargetDataType[];
  title: string;
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`shadow-md rounded-2xl flex flex-col items-center p-4 lg:col-span-1 ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}
    >
      <h1 className="font-bold text-lg self-start">{title}</h1>
      <PieChart width={120} height={120} className="mt-10">
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={35}
          outerRadius={50}
          startAngle={90}
          endAngle={-270}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <p className="text-2xl font-bold -mt-19">82%</p>
      <p className="font-medium mt-20">Achieved</p>
    </div>
  );
};
