import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ProductDescription from '@/components/ProductComponent/ProductDescription/ProductDescription';
import ProductInfo from '@/components/ProductComponent/ProductInfo/ProductInfo';
import ProductWrapper from '@/components/ProductComponent/ProductWrapper/ProductWrapper'
import YouMayAlsoLike from '@/components/ProductComponent/YouMayAlsoLike/YouMayAlsoLike';
import productPageQuery from '@/graphql/product';

const page = async ({params}) => {
  const productPageData = await productPageQuery(params.slug);
  const { menu, product, collection } = productPageData?.data

  // console.log("Product Params", productPageData?.data?.product)
  // productPageData?.data?.product?.variants.edges.map((item, index)=>{
  //   console.log("variantid", item.node.id)
  // })
      return (
        <>
        <Header menu={menu} /> 
          <ProductWrapper>
            <ProductInfo product={product} />
          </ProductWrapper>
          <ProductDescription product={product}  />
          <YouMayAlsoLike collection={collection} />
        <Footer />
          </>
      )
}

export default page