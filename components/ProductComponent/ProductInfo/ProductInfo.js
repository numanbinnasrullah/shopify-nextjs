

const ProductInfo = ({product}) => {
    console.log("Product Varients", product?.variants?.edges)
    const colors = Array.from(new Set(product?.variants?.edges.map(variant => variant.node.title.split('/')[1].trim())));
    const sizes = Array.from(new Set(product?.variants?.edges.map(variant => variant.node.title.split('/')[0].trim())));
    console.log("Colors Array", sizes)

  return (
    <div class="right block w-full px-[18px] md:px-10 lg:px-0">
    <div class="right-content block w-full lg:max-w-[600px]">
        <h1 class="text-2xl md:text-[32px] text-[#161619] mb-2">{product?.title}</h1>
        <div class="rating-box block w-full mb-8">
            <div class="rating-box-content block w-full">
                <div class="review block w-full mb-1">
                    <div class="review-content flex items-center">
                        <div class="star flex items-center mr-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                        </div>
                        <span class="text-base text-[#575759]">1 review</span>
                    </div>
                </div>
                <div class="tr block w-full mb-3">
                    <div class="tr-content flex w-full items-baseline">
                        <span class="text-base text-[#575759] mr-1">Tog Rating:</span>
                        <span class="text-base text-[#575759]">15</span>
                    </div>
                </div>
                <div class="tr-box block w-full">
                    <div class="tr-box-content flex w-full flex-wrap gap-5">
                        <span class="block w-full max-w-[38px] py-2 text-xs text-center bg-[#e5e5e5] border-[2px] border-[#00000099] cursor-pointer">15</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="variant mb-14">
            <div class="variant-content">
                <label for="size" class="block w-full text-base text-[#575759] capitalize mb-3">Color:<span class="ml-1">{colors[0]}</span></label>
                <div class="variant-box block w-full">
                    <div class="variant-box-content flex w-full flex-wrap gap-5">
                    <select className="w-[50%] p-2 border border-2" >
                    {colors.map((color, index)=>{
                            return <option key={color} value={color}  className=" cursor-pointer w-full  py-6 text-md text-center bg-[#e5e5e5] border-[2px] border-[#00000099] capitalize">{color}</option>
                        })}
                    </select>
                    </div>
                </div>
            </div>                                
        </div>

        <div class="variant mb-14">
            <div class="variant-content">
                <label for="size" class="block w-full text-base text-[#575759] capitalize mb-3">Size:<span class="ml-1">{sizes[0]}</span></label>
                <div class="variant-box block w-full">
                    <div class="variant-box-content flex w-full flex-wrap gap-5">
                    <select className="w-[50%] p-2  border-2" >
                    {sizes.map((size, index)=>{
                            return <option key={size} value={size}  class="block cursor-pointer w-full  text-md text-center bg-[#e5e5e5] border-[2px] border-[#00000099] capitalize">{size}</option>
                        })}
                    </select>
                    </div>
                </div>
            </div>                                
        </div>






       
     
       
      







        
        <div class="price-box block w-full mb-10">
            <div class="price-box-content flex w-full">
                <span class="text-3xl text-[#161619]"><span>£</span>11.99</span>
            </div>
        </div>
        <div class="stocks block w-full mb-5">
            <div class="stocks-content flex items-center">
                <span class="text-[#161619] text-xs font-medium">49 in stock</span>
            </div>
        </div>
        <div class="ac block w-full mb-12">
            <div class="ac-content block w-full">
                
                <div class="counter block w-full mb-7">
                    <div class="counter-box block w-full max-w-[116px] border border-[#cdcfd0]">
                        <div class="counter-box-content flex w-full items-center justify-between">
                            <span class="block py-5 px-2 w-full max-w-fit cursor-pointer decrement">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                            </span>
                            <input type="number" value="1" class="block w-full max-w-[35px] text-center" />
                            <span class="block py-5 px-2 w-full max-w-fit cursor-pointer increment">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="btn-wrapper block w-full">
                    <a href="#" class="flex cursor-pointer justify-center items-center w-full capitalize bg-[#161619] text-white text-sm text-center h-[60px]">Add to basket</a>
                </div>

            </div>
        </div>
        <div class="menu block w-full">
            <div class="menu-content grid grid-cols-2">
                <div class="left block w-full">
                    <div class="left-content flex items-center w-full max-w-fit cursor-pointer">
                        <span class="block w-full max-w-fit mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[18px] h-[18px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </span>
                        <span class="block w-full max-w-fit text-xs text-[#161619] ">Add to wishlist</span>
                    </div>
                </div>
                <div class="right block w-full">
                    <div class="right-content flex items-center w-full justify-end max-w-fit ml-auto cursor-pointer">
                        <span class="block w-full max-w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[18px] h-[18px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>                                                  
                        </span>
                        <span class="block w-full max-w-fit  text-xs text-[#161619] ml-1">Share</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductInfo