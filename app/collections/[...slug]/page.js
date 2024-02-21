'use client'
import { useParams } from 'next/navigation';

import CollectionDescription from '@/components/CollectionComponents/CollectionDescription/CollectionDescription'
import CollectionWrapper from '@/components/CollectionComponents/CollectionWrapper/CollectionWrapper'
import Filters from '@/components/CollectionComponents/Filters/Filters'
import GridItems from '@/components/CollectionComponents/GridItems/GridItems'

const page = () => {
    const params = useParams()
    const collectionSlug = params.slug[params.slug.length - 1];

  return (
    <>
   
            <CollectionWrapper>
                <CollectionDescription collectionTitle={decodeURIComponent(collectionSlug)} />
                <div class="block w-full">
                    <div class="flex flex-col lg:flex-row">
                        <Filters />
                        <GridItems />
                        {/* <BestSellers /> */}
                    </div>
                </div>
            </CollectionWrapper>
    </>

  )
}

export default page