
import Link from "next/link"

const FeaturedCollections = async({ featuredCollections}) => {
    // const { collection1, collection2, collection3 } = featuredCollections;
    // console.log("Featured Collection Home",featuredCollections)
    // const featuredCollections = await fetchfeaturedCollections()
    // const ArrayFromMainObject = Object.values(featuredCollections);
   
    // ArrayFromMainObject.map((item, index)=>{
    //     console.log("Featured Collection Item", item)
    // })
  return (
    <div class="block w-full px-[6px] md:px-[40px] lg:px-{60px} mb-[50px]">
    <div class="block w-full max-w-[1440px] mx-auto">
        <div class="block w-full">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    featuredCollections?.map((item, index)=>{
                        return <div class="block w-full px-3 tabs" key={index}>
                        <div class="block w-full mx-auto overflow-hidden">
                            <Link href={`/collections/${item?.handle}`} class="transition-all duration-150">
                                <div class="block w-full md:max-w-[440px] mx-auto mb-2 relative">
                                    <img src={item?.image?.url} class=" object-contain transition-all duration-1000 block w-full" width="auto" height="auto" alt="Stripe Image" />
                                    <div class="inner absolute top-0 left-0 block w-full h-full p-7 sm:p-[50px]">
                                        <div class="inner-content block w-full h-full">
                                            <h2 class="block w-full text-[7vw] md:text-[3.2vw] lg:text-[2.5vw] 2xl:text-[45px] font-semibold mb-[5px] sm:mb-[10px]">{item?.title}</h2>
                                            <span class="shop relative text-sm sm:text-base py-2 after:absolute after:left-0 after:bottom-0 after:w-6 after:bg-black after:h-[2px] after:transition-all after:duration-200 after:ease-linear hover:after:w-full">Shop Now</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    })
                }
            

                {/* {featuredCollections?.map((item, index)=>{
                    console.log(item?.node?.image?.url)
                    return    <div class="block w-full px-3 tabs">
                    <div class="block w-full mx-auto overflow-hidden">
                        <Link href={`/collections/${item.node.title.toLowerCase()}`} class="transition-all duration-150">
                            <div class="block w-full md:max-w-[440px] mx-auto mb-2 relative">
                                <img src={item?.node?.image?.url} class=" object-contain transition-all duration-1000 block w-full" width="auto" height="auto" alt="Stripe Image" />
                                <div class="inner absolute top-0 left-0 block w-full h-full p-7 sm:p-[50px]">
                                    <div class="inner-content block w-full h-full">
                                        <h2 class="block w-full text-[7vw] md:text-[3.2vw] lg:text-[2.5vw] 2xl:text-[45px] font-semibold mb-[5px] sm:mb-[10px]">{item.node.title}</h2>
                                        <span class="shop relative text-sm sm:text-base py-2 after:absolute after:left-0 after:bottom-0 after:w-6 after:bg-black after:h-[2px] after:transition-all after:duration-200 after:ease-linear hover:after:w-full">Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                })} */}
                {/* <div class="block w-full px-3 tabs">
                    <div class="block w-full mx-auto overflow-hidden">
                        <a href="#" class="transition-all duration-150">
                            <div class="block w-full md:max-w-[440px] mx-auto mb-2 relative">
                                <img src="/st-1.png" class=" object-contain transition-all duration-1000 block w-full" width="auto" height="auto" alt="Stripe Image" />
                                <div class="inner absolute top-0 left-0 block w-full h-full p-7 sm:p-[50px]">
                                    <div class="inner-content block w-full h-full">
                                        <h2 class="block w-full text-[7vw] md:text-[3.2vw] lg:text-[2.5vw] 2xl:text-[45px] font-semibold mb-[5px] sm:mb-[10px]">Fitted Sheets</h2>
                                        <span class="shop relative text-sm sm:text-base py-2 after:absolute after:left-0 after:bottom-0 after:w-6 after:bg-black after:h-[2px] after:transition-all after:duration-200 after:ease-linear hover:after:w-full">Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div> */}

                {/* <div class="block w-full px-3 tabs md:hidden lg:block">
                    <div class="block w-full mx-auto overflow-hidden">
                        <a href="#" class="transition-all duration-150">
                            <div class="block w-full md:max-w-[440px] mx-auto mb-2 relative">
                                <img src="/st-2.png" class=" object-contain transition-all duration-1000 block w-full" width="auto" height="auto" alt="Stripe Image" />
                                <div class="inner absolute top-0 left-0 block w-full h-full p-7 sm:p-[50px]">
                                    <div class="inner-content block w-full h-full">
                                        <h2 class="block w-full text-[7vw] md:text-[3.2vw] lg:text-[2.5vw] 2xl:text-[45px] font-semibold mb-[5px] sm:mb-[10px]">Fitted Sheets</h2>
                                        <span class="shop relative text-sm sm:text-base py-2 after:absolute after:left-0 after:bottom-0 after:w-6 after:bg-black after:h-[2px] after:transition-all after:duration-200 after:ease-linear hover:after:w-full">Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div> */}

                {/* <div class="block w-full px-3 tabs">
                    <div class="block w-full mx-auto overflow-hidden">
                        <a href="#" class="transition-all duration-150">
                            <div class="block w-full md:max-w-[440px] mx-auto mb-2 relative">
                                <img src="/st-3.png" class=" object-contain transition-all duration-1000 block w-full" width="auto" height="auto" alt="Stripe Image" />
                                <div class="inner absolute top-0 left-0 block w-full h-full p-7 sm:p-[50px]">
                                    <div class="inner-content block w-full h-full">
                                        <h2 class="block w-full text-[7vw] md:text-[3.2vw] lg:text-[2.5vw] 2xl:text-[45px] font-semibold mb-[5px] sm:mb-[10px]">Fitted Sheets</h2>
                                        <span class="shop relative text-sm sm:text-base py-2 after:absolute after:left-0 after:bottom-0 after:w-6 after:bg-black after:h-[2px] after:transition-all after:duration-200 after:ease-linear hover:after:w-full">Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
</div>
  )
}

export default FeaturedCollections