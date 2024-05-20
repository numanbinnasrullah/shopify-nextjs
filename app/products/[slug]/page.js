import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ProductDescription from '@/components/ProductComponent/ProductDescription/ProductDescription';
import ProductInfo from '@/components/ProductComponent/ProductInfo/ProductInfo';
import ProductWrapper from '@/components/ProductComponent/ProductWrapper/ProductWrapper'
import YouMayAlsoLike from '@/components/ProductComponent/YouMayAlsoLike/YouMayAlsoLike';
import cartCreateQuery from '@/graphql/cartcreate';
import productPageQuery from '@/graphql/product';

const page = async ({params}) => {
  const productPageData = await productPageQuery(params.slug);
  const { product, collection } = productPageData?.data
  // const cartCreateQuer = await cartCreateQuery("gid://shopify/ProductVariant/42795461083321");
  // console.log("cartCreateQuer sy cart ka data", cartCreateQuer.data.cartCreate.cart.lines.edges)
  // console.log("Product Params", productPageData?.data?.product)
  // productPageData?.data?.product?.variants.edges.map((item, index)=>{
  //   console.log("variant", item.node)
  // })
      return (
        <>
        {/* <Header menu={menu} />  */}
          <ProductWrapper>
            <ProductInfo product={product} />
          </ProductWrapper>
          <ProductDescription product={product}  />
          <YouMayAlsoLike collection={collection} />
        {/* <Footer /> */}
          </>
      )
  }

export default page