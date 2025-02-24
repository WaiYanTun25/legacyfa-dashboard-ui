import { GraphSection } from "@pages/logged-in/dashboard/components/GraphSection";
import { SalesSection } from "@pages/logged-in/dashboard/components/SalesSection";
import { useGetDashboardDataQuery } from "@src/services/api/dashboardApi";

export const Dashboard = () => {
  const { data, isLoading } = useGetDashboardDataQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <SalesSection data={data?.data} />
      <GraphSection data={data?.data} />
    </>
  );
};
