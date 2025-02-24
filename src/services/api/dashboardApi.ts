import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.myber.me/api/test" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "get-dashboard-data",
    }),
  }),
});

export const { useGetUsersQuery } = dashboardApi;
