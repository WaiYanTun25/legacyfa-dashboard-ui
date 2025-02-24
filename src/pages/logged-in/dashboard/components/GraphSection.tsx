import {
  CustomerSatisfactionDataType,
  OrderDataType,
  SalesTargetDataType,
  ProductDataType,
} from "@src/utils/constants";
import { BarChartCard } from "@pages/logged-in/dashboard/components/BarChartCard";
import { AreaChartCard } from "@pages/logged-in/dashboard/components/AreaChartCard";
import { PieChartCard } from "@pages/logged-in/dashboard/components/PieChartCard";
import { LineChartCard } from "@pages/logged-in/dashboard/components/LineChartCard";
import { RecentTable } from "@pages/logged-in/dashboard/components/RecentTable";
import { SalesTargetCard } from "./SalesTargetCard";
import { AreaDataType, WeeklySalesDataType } from "../dashboard.types";

export const GraphSection = ({
  data,
}: {
  data: {
    salesData: WeeklySalesDataType[];
    areaData: AreaDataType[];
    profitData: AreaDataType[];
    products: ProductDataType[];
    customerSatisfactionData: CustomerSatisfactionDataType[];
    orderData: OrderDataType[];
    salesTargetData: SalesTargetDataType[];
  };
}) => {
  return (
    <>
      <div className="mt-5 lg:ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 text-black">
        <BarChartCard data={data.salesData} />

        <AreaChartCard
          data={data.areaData}
          label="Sales"
          total="446"
          percentage="↑ 36%"
          areaColor="#2797FB"
        />
        <AreaChartCard
          data={data.profitData}
          label="Profit"
          total="₹ 97,280"
          percentage="↑ 27%"
          areaColor="#35E0A1"
        />

        <PieChartCard title="Product Class" data={data.products} />
      </div>
      <div className="mt-5 lg:ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 text-black">
        <LineChartCard data={data.customerSatisfactionData} />
        <RecentTable data={data.orderData} title="Recent Orders" />
        <SalesTargetCard data={data.salesTargetData} title="Sales Target" />
      </div>
    </>
  );
};
