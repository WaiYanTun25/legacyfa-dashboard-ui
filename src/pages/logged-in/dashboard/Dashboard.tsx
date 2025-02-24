import { GraphSection } from "@pages/logged-in/dashboard/components/GraphSection";
import { SalesSection } from "@pages/logged-in/dashboard/components/SalesSection";
import { useGetDashboardDataQuery } from "@src/services/api/dashboardApi";

export const Dashboard = () => {
  const { data, isLoading } = useGetDashboardDataQuery({});

  return (
    <>
      <SalesSection data={data?.data} isLoading={isLoading} />
      <GraphSection data={data?.data} isLoading={isLoading} />
    </>
  );
};
