import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: [],
    endpoints: (builder) => ({}),

});



// export everything at the end for readability and maintainability
export { api };
export const { useGetQuery } = api;