import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const collectionService = createApi({
    reducerPath: 'collection',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shopify-nextjs-mu-nine.vercel.app/api/',
    }),
    endpoints: (builder) => ({
        getCollection: builder.mutation({
            query: (collectionData) => (console.log("collection page Toolkit Query",collectionData),{
                url: 'collection',
                method: 'POST',
                body: collectionData
            }),
        }),
    }),
});

export const { useGetCollectionMutation } = collectionService;
export default collectionService;
