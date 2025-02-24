import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.myber.me/api/test" }),
  endpoints: (builder) => ({
    submitLogin: builder.mutation({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body: {
          email: body.email,
          password: body.password,
        },
      }),
    }),
  }),
});

export const { useSubmitLoginMutation } = loginApi;
