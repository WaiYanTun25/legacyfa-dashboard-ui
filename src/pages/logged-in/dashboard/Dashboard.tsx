import { GraphSection } from "@pages/logged-in/dashboard/components/GraphSection";
import { SalesSection } from "@pages/logged-in/dashboard/components/SalesSection";

export const Dashboard = () => {
  return (
    <>
      <SalesSection />
      <GraphSection />
    </>
  );
};
