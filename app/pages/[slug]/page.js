import pagesQuery from '@/graphql/pages';
import React from 'react'
import { faqs } from '@/sections/faq';
import CustomFAQ from '../../../components/customFaq/customFaq';
import Sitemap from '@/components/sitemap/Sitemap';
import ContactUs from '@/components/contact-us/ContactUs';

const page = async ({params}) => {
    // console.log("Page Param",params)

    // Fetch page content based on slug
    let pageContent;
    if (params?.slug) {
        pageContent = await pagesQuery(params.slug);
    }

        // Verify the structure of the page object
        if (!pageContent || !pageContent.data || !pageContent.data.page || !pageContent.data.page.body) {
          // Handle custom pages like FAQ
          if (params?.slug === 'faq') {
              return <CustomFAQ />
              
          }else if (params?.slug === 'contact-us') {
            return <ContactUs />
            
        } else if(params?.slug === 'sitemap'){
            return <Sitemap />
          } else {
              console.error("Invalid page structure:", pageContent);
              return <div>Error: Invalid page structure</div>;
          }
      }


  //   const page = await pagesQuery(params?.slug);
  //   console.log("Page========", page)
  //   // Verify the structure of the page object
  //   if (!page || !page.data || !page.data.page || !page.data.page.body) {
  //     console.error("Invalid page structure:", page);
  //     return <div>Error: Invalid page structure</div>;
  // }
    // Render Shopify page content
    return (
        <div className='main-page'>
            <h1>{pageContent?.data?.page?.title}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: pageContent?.data?.page?.body,
                }}
            />
        </div>
    );
}

export default page