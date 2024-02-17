import { FEATURED_COLLECTION_QUERY } from "@/graphql/featuredCollections";

 const fetchfeaturedCollections = async () => {
    try {
        const response = await fetch('https://reactstore1.myshopify.com/api/graphql.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': '902fd2f1b08ce2377bad6f2a9aaae656', // Replace with your actual access token
            },
            body: JSON.stringify({ query: FEATURED_COLLECTION_QUERY }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const res = await response.json();
        return res.data.collections.edges
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
const FeaturedCollections = async() => {
    const featuredCollections = await fetchfeaturedCollections()
    console.log("Featured Collections:==>", featuredCollections)
  return (
    <div class="block w-full px-[6px] md:px-[40px] lg:px-{60px} mb-[50px]">
    <div class="block w-full max-w-[1440px] mx-auto">
        <div class="block w-full">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {featuredCollections?.map((item, index)=>{
                    console.log(item?.node?.image?.url)
                    return    <div class="block w-full px-3 tabs">
                    <div class="block w-full mx-auto overflow-hidden">
                        <a href="#" class="transition-all duration-150">
                            <div class="block w-full md:max-w-[440px] mx-auto mb-2 relative">
                                <img src={item?.node?.image?.url} class=" object-contain transition-all duration-1000 block w-full" width="auto" height="auto" alt="Stripe Image" />
                                <div class="inner absolute top-0 left-0 block w-full h-full p-7 sm:p-[50px]">
                                    <div class="inner-content block w-full h-full">
                                        <h2 class="block w-full text-[7vw] md:text-[3.2vw] lg:text-[2.5vw] 2xl:text-[45px] font-semibold mb-[5px] sm:mb-[10px]">{item.node.title}</h2>
                                        <span class="shop relative text-sm sm:text-base py-2 after:absolute after:left-0 after:bottom-0 after:w-6 after:bg-black after:h-[2px] after:transition-all after:duration-200 after:ease-linear hover:after:w-full">Shop Now</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                })}
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