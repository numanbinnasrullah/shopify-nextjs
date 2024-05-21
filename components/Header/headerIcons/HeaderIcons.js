'use client'
import { setBaskitCounterValue } from "@/store/reducers/cartReducer"
import { useRetrieveCartMutation } from "@/store/services/cartService"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const HeaderIcons = () => {
    const dispatch = useDispatch()
   
    // const cartId = JSON.stringify(localStorage.getItem('cartId'))
    const [cartId, setCartId] = useState("")
    const {baskitCounter} = useSelector( state => state.cartReducer)
    const [sendVariantId, retrieveResponse] =  useRetrieveCartMutation();
    console.log("Cart Counter Value77777", baskitCounter)
    let counterSum = 0;
    // const b = retrieveResponse?.data?.res?.data?.cart?.lines?.edges?.map((item, i)=>{
    //     console.log("cart Item Quantity ",typeof(item.node.quantity))
    //     counterSum = counterSum + item.node.quantity
    //     console.log("Before return", counterSum)
    //      return counterSum
    // })
    // console.log("counterSum", counterSum)
    // useEffect(()=>{
    //     console.log(" useEffect counterSum", counterSum)
    //     sendVariantId(cartId)
    //     dispatch(setBaskitCounterValue(counterSum))
    // },[])
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCartId = localStorage.getItem('cartId');
            setCartId(JSON.stringify(storedCartId));
        }
    }, []);
    useEffect(() => {
        sendVariantId(cartId)
    }, []) // Add cartId to dependency array

   useEffect(() => {
       console.log("Add cart countr some", counterSum)
        if (retrieveResponse.data?.res?.data?.cart?.lines?.edges) {
            const counterSum = retrieveResponse?.data?.res?.data?.cart?.lines?.edges?.reduce((sum, item) => sum + item.node.quantity, 0);
            dispatch(setBaskitCounterValue(counterSum));
        }
    }, [retrieveResponse?.isSuccess]);


  return (
    <>
             <div class="block w-full max-w-[25%] xl:max-w-[20%]">
                    <div class="flex items-center w-full h-full justify-end">
                        <a href="#" class="hidden xl:block w-full max-w-fit mr-10">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </span>
                        </a>
                        <div class="search-box hidden xl:block w-full max-w-fit mr-6">
                            <div class="search-box-content flex relative">
                                <span class="block w-full max-w-fit cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        {/* <a href="#" class="hidden xl:block w-full max-w-fit mr-10">
                            <span counter="0" class="whishcounter relative">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </span>
                        </a> */}
                        <Link href="/cart" class="block w-full max-w-fit mr-7">
                            <span counter2={`${baskitCounter}`} class="cartcounter relative">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
    </>
  )
}

export default HeaderIcons