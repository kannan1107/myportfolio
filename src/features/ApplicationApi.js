import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL || "";

export const appApi = createApi({
  reducerPath: "api",
  tagTypes: ["Event", "Doto"],

  baseQuery: fetchBaseQuery({
    baseUrl,

    prepareHeaders: (headers, { getState }) => {
      const state = getState();

      const rawToken =
        state.auth?.token ||
        state.auth?.user?.token ||
        localStorage.getItem("token");

      const token = rawToken?.replace(/"/g, "");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    sendMail: builder.mutation({
      query: (email) => ({
        url: "/api/query",
        method: "POST",
        body: email,
      }),
    }),
  }),
});

export default appApi;
