

import { fetchCollection } from "@/graphql/singleCollection";


const CollectionDescription = async({collectionSlug}) => {
  const fetchedCollection = await fetchCollection(collectionSlug);
  // console.log("fetchedCollection",fetchedCollection)

  return (
    <div class="up block w-full">
    <div class="up-content block w-full">
        <div class="heading-box block w-full mb-8">
            <h2 class="block w-full text-5xl text-center font-medium sm:text-6xl">{fetchedCollection?.title}</h2>
        </div>
        <div class="content block w-full mb-7">
         
            <p class="block w-full text-base font-normal leading-[1.55556] text-[#161619]"> {fetchedCollection?.description}</p>
        </div>
    </div>
</div>
  )
}





export default CollectionDescription