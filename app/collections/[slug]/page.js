
import CollectionDescription from '@/components/CollectionComponents/CollectionDescription/CollectionDescription'
import CollectionWrapper from '@/components/CollectionComponents/CollectionWrapper/CollectionWrapper'
import Filter from '@/components/CollectionComponents/Filters/Filter'
import Filters from '@/components/CollectionComponents/Filters/Filters'
import { getSelectedFilter } from '@/components/CollectionComponents/Filters/filteractions'
import GridItems from '@/components/CollectionComponents/GridItems/GridItems'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import collectionPageQuery from '@/graphql/collection'
import filtersQuery from '@/graphql/filters'



const page = async ({params, searchParams }) => {
  console.log("Initial searchParams:", searchParams);

  // Initialize variantOptions
  const variantOptions = [];

  // Loop through each key-value pair in searchParams
  for (const key in searchParams) {
    if (searchParams.hasOwnProperty(key)) {
      let values = searchParams[key];
      console.log("Values", values);
  
      if (!Array.isArray(values)) {
        values = [values]; // Convert to array if not already an array
      }
      console.log("Values 234", values);
  
      // Loop through each value in the array
      values.forEach(value => {
        // Ensure value is not undefined
        if (value !== undefined) {
          if ( value.includes('x')) {
             const simplevalue =  value.replace('x', ' x ')
             const variantOption = { "variantOption": { "name": key.replace('filter.', ''), "value": simplevalue } };
          // Push the variant option object to the variantOptions array
             variantOptions.push(variantOption);
          } else {
            const decodedValue =  decodeURIComponent(value.replace('%20', ' '))
            const variantOption = { "variantOption": { "name": key.replace('filter.', ''), "value": decodedValue } };
            // Push the variant option object to the variantOptions array
            variantOptions.push(variantOption); 
          }
          
          // Construct the variant option object with the desired structure
          // const variantOption = { "variantOption": { "name": key.replace('filter.', ''), "value": value } };
          // Push the variant option object to the variantOptions array
          // variantOptions.push(variantOption);
        }
      });
    }
  }

  console.log("Parent======", variantOptions);

  // Debugging: Log searchParams and variantOptions for further investigation
  console.log("searchParams:", searchParams);
  console.log("variantOptions:", variantOptions);

  let collectionPageData;
  if ( variantOptions.length > 0) {
    // Call filtersQuery if searchParams has values and variantOptions have been populated
    collectionPageData = await filtersQuery(params.slug, JSON.stringify(variantOptions) );
    console.log("Filtered Producst", collectionPageData)
  } else {
    // Otherwise, fall back to collectionPageQuery
    collectionPageData = await collectionPageQuery(params.slug, "");
    console.log("Collection data  aya hy",collectionPageData )
  }

  // const collectionPageData = await collectionPageQuery(params.slug, "")
//   console.log("Collection Page Data", collectionPageData?.data?.collection?.products);
  const { collection } = collectionPageData?.data

  return (
      <>
          {/* <Header menu={menu} /> */}
            <CollectionWrapper>
            
                <CollectionDescription collection={collection} />
                <div class="block w-full">
                    <div class="flex flex-col lg:flex-row">
                        <Filters collection={collection}  slug={params.slug} />
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