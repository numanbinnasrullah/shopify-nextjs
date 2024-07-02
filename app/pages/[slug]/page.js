import pagesQuery from '@/graphql/pages';
import React from 'react'

const page = async ({params}) => {
    console.log("Page Param",params)
    const page = await pagesQuery(params?.slug);
    console.log("Page========", page)
  return (
    <div className='main-page'>
        <h1>{page?.data?.page?.title}</h1>

        {/* <div
            dangerouslySetInnerHTML={{
              __html: page?.data?.page?.body,
            }}
          /> */}
    </div>
  )
}

export default page