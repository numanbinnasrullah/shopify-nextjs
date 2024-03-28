import GridItems from "../GridItems/GridItems";
import collectionPageQuery from "@/graphql/collection";
import filtersQuery from "@/graphql/filters";
import FilterClient from "./filterClient";



const Filters = async({ collection, filteroptions , slug}) => {
   async function getSelectedFilters(receiveFilters) {
    'use server'
    try {
      const res = await filtersQuery(slug, receiveFilters);
      // console.log("Filtered ProductswwwE", res?.data?.collection?.products?.edges)
      return res?.data?.collection || [];
    } catch (error) {
      console.error("Error fetching filtered products:", error);
      return [];
    }
  }
    

//  const a = await getSelectedFilters(filteroptions)

  
  return (
    <>
      <div class="filter-box hidden lg:block w-full max-w-[300px] pr-10">
       {/* <FilterClient collection={collection} /> */}
       <FilterClient collection={collection} getSelected={getSelectedFilters} />

      </div>



      <GridItems collection={collection}    />
    </>

  )
}

export default Filters