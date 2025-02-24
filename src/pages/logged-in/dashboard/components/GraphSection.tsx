import {
  Product_Data,
  Weekly_Sales_Data,
  Area_Data,
  Profit_Data,
  Order_Data,
  Customer_Satisfaction_Data,
} from "@src/utils/constants";
import { BarChartCard } from "@pages/logged-in/dashboard/components/BarChartCard";
import { AreaChartCard } from "@pages/logged-in/dashboard/components/AreaChartCard";
import { PieChartCard } from "@pages/logged-in/dashboard/components/PieChartCard";
import { LineChartCard } from "@pages/logged-in/dashboard/components/LineChartCard";
import { RecentTable } from "@pages/logged-in/dashboard/components/RecentTable";
import { SalesTargetCard } from "./SalesTargetCard";

export const GraphSection = () => {
  return (
    <>
      <div className="mt-5 lg:ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 text-black">
        <BarChartCard data={Weekly_Sales_Data} />

        <AreaChartCard
          data={Area_Data}
          label="Sales"
          total="446"
          percentage="↑ 36%"
          areaColor="#2797FB"
        />
        <AreaChartCard
          data={Profit_Data}
          label="Profit"
          total="₹ 97,280"
          percentage="↑ 27%"
          areaColor="#35E0A1"
        />

        <PieChartCard title="Product Class" data={Product_Data} />
      </div>
      <div className="mt-5 lg:ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 text-black">
        <LineChartCard data={Customer_Satisfaction_Data} />
        <RecentTable data={Order_Data} title="Recent Orders" />
        <SalesTargetCard />
      </div>
    </>
  );
};
