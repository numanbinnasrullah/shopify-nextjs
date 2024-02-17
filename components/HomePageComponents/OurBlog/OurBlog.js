import { BLOGS_QUERY } from "@/graphql/blogs";

const blogs = async () => {
    try {
        const response = await fetch('https://reactstore1.myshopify.com/api/graphql.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': '902fd2f1b08ce2377bad6f2a9aaae656', // Replace with your actual access token
            },
            body: JSON.stringify({ query: BLOGS_QUERY }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const res = await response.json();
        return res.data.blogs.edges
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
const OurBlog = async() => {
    const fetchBlogs = await blogs();
    fetchBlogs.map((item, index) =>{
        console.log("articles :", item.node.articles.edges)
    })
    console.log("Blogs :", fetchBlogs)
  return (
    <div class="block w-full px-[18px] md:px-[40px] lg:px-{60px} mb-[60px]">
    <div class="block w-full max-w-[1440px] mx-auto">
        <div class="block w-full">
            <div class="block w-full">
                <h2 class="block w-full text-3xl md:text-4xl leading-[1.55556] text-center mb-10">Our Blog</h2>
                <div class="block w-full">
                    <div class="grid gap-[40px] md:grid-cols-2 lg:grid-cols-3">

                    {
                        fetchBlogs.map((item, index) =>{
                            return <>
                            {
                             item.node.articles.edges.map((article, index) =>{
                                return   <div class="block w-full xl:px-5">
                                <div class="block w-full  md:max-w-[425px] mx-auto">
                                    <div class="block w-full md:max-w-[425px] mb-6">
                                        <a href="#" class="block w-full"><img src="/b-1.png" class="block w-full object-contain" width="auto" height="auto" alt="Blog Image" /></a>
                                    </div>
                                    <div class="block w-full">
                                        <h2 class="block w-full max-w-fit mb-[30px]"><a href="#" class="text-lg text-black font-medium block w-full max-w-fit">How To Clean A Rug By Yourself?</a></h2>
                                        <p class="block w-full text-base text-[#161619] line-clamp-2 mb-[30px]">
                                            Rugs are not just functional elements in our homes; they are also essential aesthetic pieces that contribute to the overal
                                        </p>
                                        <a href="#" class="block w-full max-w-[158px]"><span class=" transition-all duration-150 ease-linear w-full max-w-[158px] border border-[#161619] text-[#161619] hover:bg-[#161619] hover:text-[#FFF] block text-center text-xs leading-[38px]">CONTINUE READING</span></a>
                                    </div>
                                </div>
                            </div>
                             })
                            }
                            </>
                        })
                    }
                        {/* <div class="block w-full xl:px-5">
                            <div class="block w-full  md:max-w-[425px] mx-auto">
                                <div class="block w-full md:max-w-[425px] mb-6">
                                    <a href="#" class="block w-full"><img src="/b-1.png" class="block w-full object-contain" width="auto" height="auto" alt="Blog Image" /></a>
                                </div>
                                <div class="block w-full">
                                    <h2 class="block w-full max-w-fit mb-[30px]"><a href="#" class="text-lg text-black font-medium block w-full max-w-fit">How To Clean A Rug By Yourself?</a></h2>
                                    <p class="block w-full text-base text-[#161619] line-clamp-2 mb-[30px]">
                                        Rugs are not just functional elements in our homes; they are also essential aesthetic pieces that contribute to the overal
                                    </p>
                                    <a href="#" class="block w-full max-w-[158px]"><span class=" transition-all duration-150 ease-linear w-full max-w-[158px] border border-[#161619] text-[#161619] hover:bg-[#161619] hover:text-[#FFF] block text-center text-xs leading-[38px]">CONTINUE READING</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="block w-full xl:px-5">
                            <div class="block w-full  md:max-w-[425px] mx-auto">
                                <div class="block w-full md:max-w-[425px] mb-6">
                                    <a href="#" class="block w-full"><img src="/b-2.png" class="block w-full object-contain" width="auto" height="auto" alt="Blog Image" /></a>
                                </div>
                                <div class="block w-full">
                                    <h2 class="block w-full max-w-fit mb-[30px]"><a href="#" class="text-lg text-black font-medium block w-full max-w-fit">How To Clean A Rug By Yourself?</a></h2>
                                    <p class="block w-full text-base text-[#161619] line-clamp-2 mb-[30px]">
                                        Rugs are not just functional elements in our homes; they are also essential aesthetic pieces that contribute to the overal
                                    </p>
                                    <a href="#" class="block w-full max-w-[158px]"><span class=" transition-all duration-150 ease-linear w-full max-w-[158px] border border-[#161619] text-[#161619] hover:bg-[#161619] hover:text-[#FFF] block text-center text-xs leading-[38px]">CONTINUE READING</span></a>
                                </div>
                            </div>
                        </div>

                        <div class=" block md:hidden lg:block w-full xl:px-5">
                            <div class="block w-full md:max-w-[425px] mx-auto">
                                <div class="block w-full md:max-w-[425px] mb-6">
                                    <a href="#" class="block w-full"><img src="/b-3.png" class="block w-full object-contain" width="auto" height="auto" alt="Blog Image" /></a>
                                </div>
                                <div class="block w-full">
                                    <h2 class="block w-full max-w-fit mb-[30px]"><a href="#" class="text-lg text-black font-medium block w-full max-w-fit">How To Clean A Rug By Yourself?</a></h2>
                                    <p class="block w-full text-base text-[#161619] line-clamp-2 mb-[30px]">
                                        Rugs are not just functional elements in our homes; they are also essential aesthetic pieces that contribute to the overal
                                    </p>
                                    <a href="#" class="block w-full max-w-[158px]"><span class=" transition-all duration-150 ease-linear w-full max-w-[158px] border border-[#161619] text-[#161619] hover:bg-[#161619] hover:text-[#FFF] block text-center text-xs leading-[38px]">CONTINUE READING</span></a>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default OurBlog