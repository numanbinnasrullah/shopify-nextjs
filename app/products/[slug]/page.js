import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ProductDescription from '@/components/ProductComponent/ProductDescription/ProductDescription';
import ProductGallery from '@/components/ProductComponent/ProductGallery/ProductGallery'
import ProductInfo from '@/components/ProductComponent/ProductInfo/ProductInfo';
import ProductWrapper from '@/components/ProductComponent/ProductWrapper/ProductWrapper'
import YouMayAlsoLike from '@/components/ProductComponent/YouMayAlsoLike/YouMayAlsoLike';
import productPageQuery from '@/graphql/product';

const page = async ({params}) => {
  const productPageData = await productPageQuery(params.slug);
  const { menu, product } = productPageData?.data
  // console.log("Product Page", productPageData?.data?.product?.variants.edges.map((item)=>{
  //   console.log("hhhhhhhhhh", item)
  // }))
  
  console.log("Product Params", productPageData?.data)
    const images = [ 
        '/Variant-1-1.png',
        '/Variant-2.jpg',
        '/Variant-3.png',
        '/Variant-4.png' 
       ]; 
      return (
        <>
        <Header menu={menu} /> 
          <ProductWrapper>
            {/* <ProductGallery images={images} product={product} /> */}
            <ProductInfo product={product} />
          </ProductWrapper>
          <ProductDescription product={product}  />
          <YouMayAlsoLike />
        <Footer />
          </>
      )
}

export default page