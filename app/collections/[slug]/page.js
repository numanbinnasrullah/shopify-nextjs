
import CollectionDescription from '@/components/CollectionComponents/CollectionDescription/CollectionDescription'
import CollectionWrapper from '@/components/CollectionComponents/CollectionWrapper/CollectionWrapper'
import Filters from '@/components/CollectionComponents/Filters/Filters'
import { getSelectedFilter } from '@/components/CollectionComponents/Filters/filteractions'
import GridItems from '@/components/CollectionComponents/GridItems/GridItems'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import collectionPageQuery from '@/graphql/collection'
import filtersQuery from '@/graphql/filters'




const page = async ({params, searchParams }) => {
  // console.log("collection params", params)
// Initialize variantOptions
const variantOptions = [];
let paginate = ""
let priceRange = {};
  // console.log("Search param", params)
// Function to add variant option to variantOptions array
const addVariantOption = (name, value) => {
  if(value.includes('x')){
    // console.log("Valueeeeeee include ", value)
    const valueX =   value.replace('x', ' x ')
    const variantOption = { "variantOption": { "name": name, "value": valueX } };
    variantOptions.push(variantOption);
  } else {
    const variantOption = { "variantOption": { "name": name, "value": value } };
    variantOptions.push(variantOption);
  }
};

// Function to add price range to variantOptions array
const addPriceRange = (min, max) => {
  priceRange = { "price": { "min": min, "max": max } };
  variantOptions.push(priceRange);
};

// Fetch size, color, and price from URL and add them to variantOptions array
for (const key in searchParams) {
  if (searchParams.hasOwnProperty(key)) {
    let values = searchParams[key];
    // console.log("Values", values)
    if (!Array.isArray(values)) {
      values = [values]; // Convert to array if not already an array
    }

    values.forEach(value => {
    
        // console.log("Value above switch", key)
        switch (key) {
          
          case 'filter.size':
            // Add size variant option
            addVariantOption('Size', value);
            break;
          case 'filter.color':
            // Add color variant option
            addVariantOption('Color', value);
            break;
          case 'filter.gt-price':
            // Greater than price
            priceRange.min = parseFloat(value);
            break;
          case 'filter.lt-price':
            // Less than price
            priceRange.max = parseFloat(value);
            break;
          case 'nextPage':
              paginate = JSON.stringify(value);
              break;
          case 'previousPage':
             paginate = JSON.stringify(value);
          break;
          default:
            break;
        }
      
    });
  }
}
// console.log("variantOptionsssssssss  ",  variantOptions)
// Add price range to variantOptions array if it's defined
if (priceRange.min !== undefined && priceRange.max !== undefined) {
  addPriceRange(priceRange.min, priceRange.max);
}

  let collectionPageData;
   let initialcheck ;
  if ( variantOptions.length > 0) {
    initialcheck = false
    // Call filtersQuery if searchParams has values and variantOptions have been populated
    collectionPageData = await filtersQuery(params.slug, JSON.stringify(variantOptions) );
    if(paginate){
      collectionPageData = await filtersQuery(params.slug, JSON.stringify(variantOptions), paginate );
    }
    // console.log("Filtered Products", collectionPageData?.data?.collection?.products?.edges)
  } else {
    initialcheck = true
    // Otherwise, fall back to collectionPageQuery
    collectionPageData = await collectionPageQuery(params.slug, "");
    if(paginate){
      collectionPageData = await collectionPageQuery(params.slug, paginate);
    }
    // console.log("Collection data  aya hy",collectionPageData?.data?.collection?.products )
  }

  // const collectionPageData = await collectionPageQuery(params.slug, "")
//   console.log("Collection Page Data", collectionPageData?.data?.collection?.products);
  const { collection } = collectionPageData?.data
// console.log("initail check", collection?.products?.edges)
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
                  "name": "collection",
                  "item": `http://localhost:3000/collections/${params?.slug}`
                }
              ]
            }) }} />


            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "CollectionPage",
              "@id": `http://localhost:3000/collections/${params?.slug}`,
              "name": params?.slug,
              "url": `http://localhost:3000/collections/${params?.slug}`,
              "image": collection?.image?.url,
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": collection?.products?.edges.map((item, i) => ({
                "@type": "ListItem",
                "position": i + 1,  // Use the index to set the position dynamically
                "item": {
                  "@id": `http://localhost:3000/collections/${params?.slug}/${item?.node.handle}`,
                  "url": `http://localhost:3000/collections/${params?.slug}/${item?.node.handle}`
                }
              }))
              }

            }) }} />

          </head>
          {/* <Header menu={menu} /> */}
            <CollectionWrapper>
            
                <CollectionDescription collection={collection} />
                <div class="block w-full">
                    <div class="flex flex-col lg:flex-row">
                        <Filters collection={collection}  slug={params.slug} initialcheck={initialcheck}  searchParams={searchParams} />
                        {/* <Filter collection={collection} slug={params.slug} /> */}
                        {/* <GridItems collection={collection} /> */}
                    </div>
                </div>
            </CollectionWrapper>
          {/* <Footer /> */}
      </>
  )
}

export default page