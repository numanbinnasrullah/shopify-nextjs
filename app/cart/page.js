import Header from "@/components/Header/Header";
import cartPageQuery from "@/graphql/cart";


const CartPage = async () => {
    const cartPageData = await cartPageQuery()
    const { menu } = cartPageData?.data
    console.log("CartPage", cartPageData?.data)
  return (
    <>
      <Header menu={menu} /> 
      Cart page...
    </>
  )
}

export default CartPage;