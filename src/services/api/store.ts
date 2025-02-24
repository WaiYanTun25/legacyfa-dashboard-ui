import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi } from "@services/api/dashboardApi";
import { loginApi } from "@services/api/loginApi";

const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware, loginApi.middleware),
});

export default store;
