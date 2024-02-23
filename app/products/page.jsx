import ProductDescription from '@/components/ProductComponent/ProductDescription/ProductDescription';
import ProductGallery from '@/components/ProductComponent/ProductGallery/ProductGallery'
import ProductInfo from '@/components/ProductComponent/ProductInfo/ProductInfo';
import ProductWrapper from '@/components/ProductComponent/ProductWrapper/ProductWrapper'
import YouMayAlsoLike from '@/components/ProductComponent/YouMayAlsoLike/YouMayAlsoLike';

const Product = () => {
  const images = [ 
    '/Variant-1-1.png',
    '/Variant-2.jpg',
    '/Variant-3.png',
    '/Variant-4.png'
   ];
  return (
    <>
    <ProductWrapper>
     
      <ProductGallery images={images} />
      <ProductInfo />
     
    </ProductWrapper>
      <ProductDescription />
      <YouMayAlsoLike />
      </>
  )
}

export default Product