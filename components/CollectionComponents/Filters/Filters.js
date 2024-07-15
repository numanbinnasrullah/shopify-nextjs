'use client'
import { useGetCollectionMutation } from "@/store/services/collectionService";
import GridItems from "../GridItems/GridItems";
import FilterClient from "./filterClient";
import { useEffect } from "react";

export async function generateMetadata({ params }) {
  const [getCollection, getCollectionRes] =  useGetCollectionMutation();
  // console.log("Get Collection SEO*******", getCollectionRes?.data?.res?.data?.collection)
  // const meta = await GetSinglePost(params.slug);
  // const robots = meta?.post?.seo?.robots;

  // Initialize variables to store the status of index and follow
  let isIndex = false;
  let isFollow = false;

  // Iterate through the robots array
  // robots.forEach((value) => {
  //   if (value === "index") {
  //     isIndex = true;
  //   } else if (value === "noindex") {
  //     isIndex = false;
  //   } else if (value === "follow") {
  //     isFollow = true;
  //   } else if (value === "nofollow") {
  //     isFollow = false;
  //   }
  // });

  // console.log(meta.post.seo.focusKeywords);
  return {
    title: `${productPageData?.data?.product?.seo?.title}`,
    // generator: `${productPageData?.data?.product?.seo?.description}`,
    applicationName: process.env.applicationName,
    // // keywords: meta.post.seo.focusKeywords.split(","),
    description: productPageData?.data?.product?.seo?.description,
    // authors: [{ name: `${meta.post.author?.node?.slug}`, url: `${process.env.NEXT_PUBLIC_BASE_URL}/author/${meta.post.author?.node?.slug}` }],
    // creator: `${meta.post.author?.node?.slug}`,
    // publisher: `${process.env.Site_Title}`,
    metadataBase: new URL(`${process.env.BASE_URL}`),
    // alternates: {
    //   canonical: '/',
    // },
    openGraph: {
      title: productPageData?.data?.product?.seo?.title,
      description: productPageData?.data?.product?.seo?.description,
      url: `${process.env.BASE_URL}`,
      siteName: `${process.env.applicationName}`,
      images: [
        {
          url: productPageData?.data?.product?.images?.edges.map((thumbUrl, index) => {return thumbUrl.node.originalSrc}),
          // width: 800,
          // height: 600,
        },
        // {
        //   url: `${process.env.WP_URL + process.env.images_path + meta?.post.featuredImage?.node?.mediaDetails.file}`,
        //   width: 1800,
        //   height: 1600,
        //   alt: `${process.env.Site_Title}`,
        // },
      ],
      type: 'website',
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: meta?.post?.seo?.title,
    //   description: meta?.post?.seo?.description,
    //   creator: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    //   images: [`${process.env.WP_URL + process.env.images_path + meta?.post.featuredImage?.node?.mediaDetails.file}`],
    // },
    // robots: {
    //   index: { isIndex },
    //   follow: { isFollow },
    //   nocache: true,
    //   googleBot: {
    //     index: { isIndex },
    //     follow: { isFollow },
    //     noimageindex: true,
    //     'max-video-preview': -1,
    //     'max-image-preview': 'large',
    //     'max-snippet': -1,
    //   },
    // },
    // manifest: 'https://nextjs.org/manifest.json',

  };
}

const Filters =  ({ collection, slug, initialcheck, variantOptions}) => {
  // const [getCollection, getCollectionRes] =  useGetCollectionMutation();
  // console.log("Get Collection Try", getCollectionRes?.data?.res?.data?.collection)
  var collectionData = {
    slug: slug
  }
  // useEffect(()=>{
  //   getCollection(collectionData)
  // },[])
  return (
    <>
      <div class="filter-box hidden lg:block w-full max-w-[300px] pr-10">
       <FilterClient collection={collection}  initialcheck={initialcheck} slug={slug} variantOptions={variantOptions} />
      </div>
      <GridItems collection={collection}    />
      
    </>

  )
}

export default Filters;