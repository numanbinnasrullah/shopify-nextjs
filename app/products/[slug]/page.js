import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ProductDescription from '@/components/ProductComponent/ProductDescription/ProductDescription';
import ProductInfo from '@/components/ProductComponent/ProductInfo/ProductInfo';
import ProductWrapper from '@/components/ProductComponent/ProductWrapper/ProductWrapper'
import YouMayAlsoLike from '@/components/ProductComponent/YouMayAlsoLike/YouMayAlsoLike';
import cartCreateQuery from '@/graphql/cartcreate';
import productPageQuery from '@/graphql/product';


// export async function generateMetadata({ params }) {
//   const productPageData = await productPageQuery(params.slug);
//   // console.log("productPageData for SEO", productPageData?.data?.product?.seo?.title)
//   // const meta = await GetSinglePost(params.slug);
//   // const robots = meta?.post?.seo?.robots;

//   // Initialize variables to store the status of index and follow
//   let isIndex = false;
//   let isFollow = false;

//   // Iterate through the robots array
//   // robots.forEach((value) => {
//   //   if (value === "index") {
//   //     isIndex = true;
//   //   } else if (value === "noindex") {
//   //     isIndex = false;
//   //   } else if (value === "follow") {
//   //     isFollow = true;
//   //   } else if (value === "nofollow") {
//   //     isFollow = false;
//   //   }
//   // });

//   // console.log(meta.post.seo.focusKeywords);
//   return {
//     title: `${productPageData?.data?.product?.seo?.title}`,
//     // generator: `${productPageData?.data?.product?.seo?.description}`,
//     applicationName: process.env.applicationName,
//     // // keywords: meta.post.seo.focusKeywords.split(","),
//     description: productPageData?.data?.product?.seo?.description,
//     // authors: [{ name: `${meta.post.author?.node?.slug}`, url: `${process.env.NEXT_PUBLIC_BASE_URL}/author/${meta.post.author?.node?.slug}` }],
//     // creator: `${meta.post.author?.node?.slug}`,
//     // publisher: `${process.env.Site_Title}`,
//     metadataBase: new URL(`${process.env.BASE_URL}`),
//     // alternates: {
//     //   canonical: '/',
//     // },
//     openGraph: {
//       title: productPageData?.data?.product?.seo?.title,
//       description: productPageData?.data?.product?.seo?.description,
//       url: `${process.env.BASE_URL}`,
//       siteName: `${process.env.applicationName}`,
//       images: [
//         {
//           url: productPageData?.data?.product?.images?.edges.map((thumbUrl, index) => ({key:index, url:thumbUrl.node.originalSrc})),
//           // width: 800,
//           // height: 600,
//         },
//         // {
//         //   url: `${process.env.WP_URL + process.env.images_path + meta?.post.featuredImage?.node?.mediaDetails.file}`,
//         //   width: 1800,
//         //   height: 1600,
//         //   alt: `${process.env.Site_Title}`,
//         // },
//       ],
//       type: 'website',
//     },
//     // twitter: {
//     //   card: 'summary_large_image',
//     //   title: meta?.post?.seo?.title,
//     //   description: meta?.post?.seo?.description,
//     //   creator: `${process.env.NEXT_PUBLIC_BASE_URL}`,
//     //   images: [`${process.env.WP_URL + process.env.images_path + meta?.post.featuredImage?.node?.mediaDetails.file}`],
//     // },
//     // robots: {
//     //   index: { isIndex },
//     //   follow: { isFollow },
//     //   nocache: true,
//     //   googleBot: {
//     //     index: { isIndex },
//     //     follow: { isFollow },
//     //     noimageindex: true,
//     //     'max-video-preview': -1,
//     //     'max-image-preview': 'large',
//     //     'max-snippet': -1,
//     //   },
//     // },
//     manifest: 'https://nextjs.org/manifest.json',

//   };
// }




const page = async ({params}) => {
  
  const productPageData = await productPageQuery(params.slug);
  const { product, collection } = productPageData?.data
  const productId = product?.id.split('/').pop()
  console.log("Product id leany k leay", product?.featuredImage?.url)
  // const cartCreateQuer = await cartCreateQuery("gid://shopify/ProductVariant/42795461083321");
  // console.log("cartCreateQuer sy cart ka data", cartCreateQuer.data.cartCreate.cart.lines.edges)
  // console.log("Product Params", productPageData?.data?.product)
  // productPageData?.data?.product?.variants.edges.map((item, index)=>{
  //   console.log("variant", item.node)
  // })





      return (
        <>
        <head>
           
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
         
            {
              "@type": "ListItem",
              "position": 1,
              "name": "product",
              "item": `http://localhost:3000/product/${params?.slug}`
            }
          ]
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Product",
          "@id": `http://localhost:3000/product/${params?.slug}`,
          "mpn": productId,
          "offers": product?.variants?.edges.map((variant, i) => ({
            key: `article-${i}`,
          "@type": "Offer",
          "name": variant?.node?.title,
          "availability": "https://schema.org/InStock",
          "price": variant?.node?.price?.amount,
          "priceCurrency": variant?.node?.price?.currencyCode,
          "priceValidUntil": "2024-07-15",
          "sku": variant?.node?.sku,
          "url": `http://localhost:3000/product/${params?.slug}`,
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": 0,
              "currency": "GBP"
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": "UK"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 2,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 3,
                "maxValue": 5,
                "unitCode": "DAY"
              }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "UK",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 30,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn"
          }
        })),
          "brand": {
          "@type": "Brand",
            "name": "Moonlight Bedding"
          },
          "name": params?.slug,
          "description": product?.description,
          "category": "Plain Dyed Duvet Cover",
          "url": `product/${params?.slug}`,
         "sku": product?.variants?.edges.map((variant, i) => ({ key: i, sku: variant?.node?.sku})),
          "image": {
            "@type": "ImageObject",
            "url": product?.featuredImage?.url,
            "name": params?.slug,
            "width": "1024",
            "height": "1024"
          }
        }) }} />
        



      </head>
        {/* <Header menu={menu} />  */}
          <ProductWrapper>
            <ProductInfo product={product} />
          </ProductWrapper>
          <ProductDescription product={product}  />
          <YouMayAlsoLike collection={collection} />
        {/* <Footer /> */}
          </>
      )
  }

export default page