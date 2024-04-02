'use server';

import filtersQuery from "@/graphql/filters";

export async function getSelectedFilter(receiveFilters) {
    
  try {
    const res = await filtersQuery("curtains", receiveFilters);
    console.log("Filtered Products", res?.data?.collection?.products?.edges);
    return res?.data?.collection || [];
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    return [];
  }
}
