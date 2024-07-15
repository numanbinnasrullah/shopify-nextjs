import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogService = createApi({
    reducerPath: 'blogs',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/',
    }),
    endpoints: (builder) => ({
        mainBlogs: builder.query({
            query: () => (console.log("Blogs Toolkit"),{
                    url: "blogs",
                    method: 'GET'
            })
        })
    }),
});

export const {  useMainBlogsQuery } = blogService;
export default blogService;
