import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const filtersService = createApi({
    reducerPath: 'filters',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/',
    }),
    endpoints: (builder) => ({
        filterRequest: builder.mutation({
            query: (filterData) => (console.log("Filters data",filterData),{
                url: 'filters',
                method: 'POST',
                body: filterData
            }),
        }),
        
    }),
});

export const { useFilterRequestMutation } = filtersService;
export default filtersService;
