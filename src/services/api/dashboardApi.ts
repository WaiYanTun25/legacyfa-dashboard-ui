import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.myber.me/api/test" }),
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: () => "get-dashboard-data",
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;
