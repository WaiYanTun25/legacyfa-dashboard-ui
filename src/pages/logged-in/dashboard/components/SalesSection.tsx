import { DashboardCard } from "@src/components/DashboardCard";
import { useTheme } from "@src/hooks";
import { ChartBarSquareIcon, BanknotesIcon } from "@heroicons/react/24/outline";

export const SalesSection = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} shadow-sm p-5 lg:ml-5 rounded-2xl`}
    >
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">Today Sales</h1>
        <span className="text-xs">Sales Summary</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:m-5 m-1">
          <DashboardCard
            icon={
              <BanknotesIcon className="lg:h-15 lg:w-15 h-8 w-8 text-[#F6617F]" />
            }
            amount="₹ 37,500"
            title="Total Sales"
            color="bg-[#FCDEE1]"
            previousAmount="+18% from yesterday"
          />
          <DashboardCard
            icon={
              <ChartBarSquareIcon className="lg:h-15 lg:w-15 h-8 w-8 text-[#47D65D]" />
            }
            amount="365"
            title="Total Orders"
            color="bg-[#C9FAD9]"
            previousAmount="+27% from yesterday"
          />
          <DashboardCard
            icon={
              <ChartBarSquareIcon className="lg:h-15 lg:w-15 h-8 w-8 text-[#F6617F]" />
            }
            amount="36"
            title="New Customers"
            color="bg-[#E8D9FA]"
            previousAmount="+8% from yesterday"
          />
          <DashboardCard
            icon={
              <ChartBarSquareIcon className="lg:h-15 lg:w-15 h-8 w-8 text-[#F6617F]" />
            }
            amount="₹ 16,500"
            title="Total Earnings"
            color="bg-[#FAE9C7]"
            previousAmount="+23% from yesterday"
          />
        </div>
      </div>
    </div>
  );
};
