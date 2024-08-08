import CollectionDescription from '@/components/CollectionComponents/CollectionDescription/CollectionDescription'
import CollectionWrapper from '@/components/CollectionComponents/CollectionWrapper/CollectionWrapper'
import Filters from '@/components/CollectionComponents/Filters/Filters'
import GridItems from '@/components/CollectionComponents/GridItems/GridItems'
import BestSellers from '@/components/HomePageComponents/BestSellers/BestSellers'
import collectionQuery from '@/graphql/collection'
import React from 'react'

const Collection = async() => {

    return (
        
        <>
            <CollectionWrapper>
                <CollectionDescription />
                <div class="block w-full">
                    <div class="flex flex-col lg:flex-row">
                        {/* <Filters />
                        <GridItems /> */}
                        {/* <BestSellers /> */}
                    </div>
                </div>
            </CollectionWrapper>
            
        </>
    )
}

export default Collection