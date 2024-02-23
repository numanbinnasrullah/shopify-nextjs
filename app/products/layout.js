import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


const ProductLayout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default ProductLayout;