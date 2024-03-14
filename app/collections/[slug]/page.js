
import CollectionDescription from '@/components/CollectionComponents/CollectionDescription/CollectionDescription'
import CollectionWrapper from '@/components/CollectionComponents/CollectionWrapper/CollectionWrapper'
import Filters from '@/components/CollectionComponents/Filters/Filters'
import GridItems from '@/components/CollectionComponents/GridItems/GridItems'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import collectionPageQuery from '@/graphql/collection'


const page = async ({params}) => {
  const collectionPageData = await collectionPageQuery(params.slug)
  const { menu, collection } = collectionPageData?.data
//   console.log("Collection Page Data", collectionPageData?.data?.collection);

  return (
      <>
          <Header menu={menu} />
            <CollectionWrapper>
                <CollectionDescription collection={collection} />
                <div class="block w-full">
                    <div class="flex flex-col lg:flex-row">
                        <Filters collection={collection} />
                        {/* <GridItems collection={collection} /> */}
                    </div>
                </div>
            </CollectionWrapper>
          <Footer />
      </>
  )
}

export default page