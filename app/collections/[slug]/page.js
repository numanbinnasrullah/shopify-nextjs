// 'use client'
// import { useParams } from 'next/navigation';

import CollectionDescription from '@/components/CollectionComponents/CollectionDescription/CollectionDescription'
import CollectionWrapper from '@/components/CollectionComponents/CollectionWrapper/CollectionWrapper'
import Filters from '@/components/CollectionComponents/Filters/Filters'
import GridItems from '@/components/CollectionComponents/GridItems/GridItems'

const page = ({params}) => {
  console.log("paramsssss", params.slug)
    // const params = useParams()
    // const collectionSlug = params.slug[params.slug.length - 1];

  return (
    <>
   
            <CollectionWrapper>
                <CollectionDescription collectionSlug={params.slug} />
                <div class="block w-full">
                    <div class="flex flex-col lg:flex-row">
                        <Filters />
                        <GridItems collectionSlug={params.slug} />
                        {/* <BestSellers /> */}
                    </div>
                </div>
            </CollectionWrapper>
    </>

  )
}

export default page