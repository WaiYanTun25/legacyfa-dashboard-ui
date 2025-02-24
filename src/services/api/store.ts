import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi } from "@services/api/dashboardApi";

const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});

export default store;
