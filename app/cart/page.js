import cartPageQuery from "@/graphql/cart";


const CartPage = async () => {
    const cartPageData = await cartPageQuery()
    const { menu } = cartPageData?.data
    console.log("CartPage", cartPageData?.data)
  return (
    <div>CartPage</div>
  )
}

export default CartPage;