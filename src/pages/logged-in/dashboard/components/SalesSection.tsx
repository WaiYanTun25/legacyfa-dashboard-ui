import { DashboardCard } from "@src/components/DashboardCard";
import { useTheme } from "@src/hooks";
import {
  ChartBarSquareIcon,
  BanknotesIcon,
  UserCircleIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import { CardDataType } from "@src/utils/constants";

export const SalesSection = ({
  data,
  isLoading,
}: {
  isLoading: boolean;
  data: {
    totalSales: CardDataType;
    totalOrders: CardDataType;
    newCustomers: CardDataType;
    totalEarnings: CardDataType;
  };
}) => {
  const { theme } = useTheme();
  const LoadingSkeleton = () => (
    <div className="relative bg-gray-200/50 backdrop-blur-md rounded-[1em] lg:rounded-[2em] h-[120px] lg:h-[150px] shadow overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-shimmer"></div>
    </div>
  );
  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} shadow-sm p-5 lg:ml-5 rounded-2xl`}
    >
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">Today Sales</h1>
        <span className="text-xs">Sales Summary</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:m-5 m-1">
          {isLoading ? (
            <>
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </>
          ) : (
            <>
              <DashboardCard
                icon={
                  <BanknotesIcon className="lg:h-15 lg:w-15 h-8 w-8 text-[#F6617F]" />
                }
                amount={data.totalSales.amount}
                title="Total Sales"
                color="bg-[#FCDEE1]"
                previousAmount={data.totalSales.previousAmount}
              />
              <DashboardCard
                icon={
                  <ChartBarSquareIcon className="lg:h-15 lg:w-15 h-8 w-8 text-[#47D65D]" />
                }
                amount={data.totalOrders.amount}
                title="Total Orders"
                color="bg-[#C9FAD9]"
                previousAmount={data.totalOrders.previousAmount}
              />
              <DashboardCard
                icon={
                  <UserCircleIcon className="lg:h-15 lg:w-15 h-8 w-8 text-[#BE85FC]" />
                }
                amount={data.newCustomers.amount}
                title="New Customers"
                color="bg-[#E8D9FA]"
                previousAmount={data.newCustomers.previousAmount}
              />
              <DashboardCard
                icon={
                  <CircleStackIcon className="lg:h-15 lg:w-15 h-8 w-8 text-[#FC957D]" />
                }
                amount={data.totalEarnings.amount}
                title="Total Earnings"
                color="bg-[#FAE9C7]"
                previousAmount={data.totalEarnings.previousAmount}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
