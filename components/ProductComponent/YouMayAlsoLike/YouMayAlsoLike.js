import Link from 'next/link'
import React from 'react'

const YouMayAlsoLike = ({collection}) => {
  return (
    <div class="block w-full px-[18px] md:px-[40px] lg:px-{60px}">
    <div class="block w-full max-w-[1440px] mx-auto">
        <div class="block w-full md:px-[12px] 2xl:px-5">
            <div class="block w-full mb-12">
                <h2 class="block w-full max-w-fit text-2xl md:text-3xl">You May Also Lik</h2>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[28px] mb-[35px]">
            {
                collection?.products.edges.map((item, index)=>{
                    const prices = item?.node?.variants?.edges.map((item, index) => item?.node?.price?.amount);
                    const compareAtPrices = item?.node?.variants?.edges.map((item, index) => item?.node?.compareAtPrice?.amount);
                    const uniquePrices = [...new Set(prices)].sort((a, b) => a - b);
                    const uniqueComparePrices = [...new Set(compareAtPrices)].sort((a, b) => a - b);
                    const lowestPrice = uniquePrices[0];
                    const lowestComparePrice = uniqueComparePrices[0];
                    console.log("LowestCompareprices", lowestComparePrice)
                    return <div class="product block w-full transition-all duration-150 ease-linear col-span-1 md:col-auto">
                    <div class="product-content block w-full">
                        <div class="product-imgbox block w-full h-full">
                            <Link href={`/products/${item?.node?.handle}`} class="block w-full h-full leading-[0] relative">
                                {
                                    item?.node?.media?.edges?.map((item, index)=>{
                                        return index === 1 && <img src={item?.node?.previewImage?.url} class="block w-full object-contain transition-all duration-150 ease-linear" width="auto" height="auto" alt="Product Image" />
                                    })
                                }
                                <img src={item?.node?.featuredImage?.url}  class="block w-full object-contain absolute top-0 left-0 transition-all duration-150 ease-linear" width="auto" height="auto" alt="Product Image" />
                            </Link>
                        </div>
                        <div class="product-info block w-full py-5 px-3 md:px-5 transition-transform duration-150 ease-linear">
                            <div class="product-info-content block w-full relative overflow-hidden">
                                <a href="#" class="block w-full mb-[6px] max-w-fit">
                                    <h2 class="block w-full text-base text-[#161619] max-w-fit truncate">{item?.node?.title}</h2>
                                </a>
                                <div class="review-box block w-full">
                                    <div class="review-content flex w-full flex-wrap">
                                        <div class="stars flex w-full max-w-fit items-center flex-wrap">
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <span class="text-lg">1 review</span>
                                    </div>
                                </div>
                                {/* {
                                    item?.node?.variants?.edges.map((item, index)=>{
                                        return <div class="price-box block w-full">
                                        <div class="price-box-content flex w-full max-w-fit items-center">
                                            <span class="text-sm font-medium">{item?.node?.price?.amount}</span>
                                            <span class="text-sm font-medium px-1">-</span>
                                            <span class="text-sm font-medium">{item?.node?.compareAtPrice?.amount}</span>
                                        </div>
                                    </div>
                                    })
                                } */}
                                <div class="price-box block w-full">
                                    <div class="price-box-content flex w-full max-w-fit items-center">
                                        <span class="text-sm font-medium">£{lowestPrice}</span>
                                        <span class="text-sm font-medium px-1">-</span>
                                        <span class="text-sm font-medium">${lowestComparePrice}</span>
                                    </div>
                                </div>
                                <div class="so block w-full pt-4 absolute -bottom-11 left-0">
                                    <div class="so-content grid md:grid-cols-2 items-center w-full">
                                        <a href="#" class="block w-full max-w-fit"><span class="block w-full max-w-fit font-semibold text-sm sm:text-base lg:text-[1.16vw] xl:text-sm uppercase">Select options</span></a>
                                        <div class="so-icon block w-full">
                                            <div class="so-icon-content flex w-full justify-end">
                                                <a href="#" class="hidden xl:block w-full max-w-fit mx-2">
                                                    <span class="block w-full max-w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>                                                          
                                                    </span>
                                                </a>
                                                <a href="#" class="hidden md:block w-full max-w-fit mx-2">
                                                    <span class="block w-full max-w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                        </svg>                                                          
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                })
            }
            

                {/* <div class="product block w-full transition-all duration-150 ease-linear col-span-1 md:col-auto">
                    <div class="product-content block w-full">
                        <div class="product-imgbox block w-full h-full">
                            <a href="#" class="block w-full h-full leading-[0] relative">
                                <img src="/p-2.2.jpg" class="block w-full object-contain transition-all duration-150 ease-linear" width="auto" height="auto" alt="Product Image" />
                                <img src="/p-2.png" class="block w-full object-contain absolute top-0 left-0 transition-all duration-150 ease-linear" width="auto" height="auto" alt="Product Image" />
                            </a>
                        </div>
                        <div class="product-info block w-full py-5 px-3 md:px-5 transition-transform duration-150 ease-linear">
                            <div class="product-info-content block w-full relative overflow-hidden">
                                <a href="#" class="block w-full mb-[6px] max-w-fit">
                                    <h2 class="block w-full text-base text-[#161619] max-w-fit truncate">15 Tog Duvet</h2>
                                </a>
                                <div class="review-box block w-full">
                                    <div class="review-content flex w-full flex-wrap">
                                        <div class="stars flex w-full max-w-fit items-center flex-wrap">
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <span class="text-lg">1 review</span>
                                    </div>
                                </div>
                                <div class="price-box block w-full">
                                    <div class="price-box-content flex w-full max-w-fit items-center">
                                        <span class="text-sm font-medium">£11.99</span>
                                        <span class="text-sm font-medium px-1">-</span>
                                        <span class="text-sm font-medium">£18.99</span>
                                    </div>
                                </div>
                                <div class="so block w-full pt-4 absolute -bottom-11 left-0">
                                    <div class="so-content grid md:grid-cols-2 items-center w-full">
                                        <a href="#" class="block w-full max-w-fit"><span class="block w-full max-w-fit font-semibold text-sm sm:text-base lg:text-[1.16vw] xl:text-sm uppercase">Select options</span></a>
                                        <div class="so-icon block w-full">
                                            <div class="so-icon-content flex w-full justify-end">
                                                <a href="#" class="hidden xl:block w-full max-w-fit mx-2">
                                                    <span class="block w-full max-w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>                                                          
                                                    </span>
                                                </a>
                                                <a href="#" class="hidden md:block w-full max-w-fit mx-2">
                                                    <span class="block w-full max-w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                        </svg>                                                          
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div class="product hidden md:block w-full transition-all duration-150 ease-linear col-span-1 md:col-auto">
                    <div class="product-content block w-full">
                        <div class="product-imgbox block w-full h-full">
                            <a href="#" class="block w-full h-full leading-[0] relative">
                                <img src="p-3.3.jpg" class="block w-full object-contain transition-all duration-150 ease-linear" width="auto" height="auto" alt="Product Image" />
                                <img src="p-3.jpg" class="block w-full object-contain absolute top-0 left-0 transition-all duration-150 ease-linear" width="auto" height="auto" alt="Product Image" />
                            </a>
                        </div>
                        <div class="product-info block w-full py-5 px-3 md:px-5 transition-transform duration-150 ease-linear">
                            <div class="product-info-content block w-full relative overflow-hidden">
                                <a href="#" class="block w-full mb-[6px] max-w-fit">
                                    <h2 class="block w-full text-base text-[#161619] max-w-fit truncate">15 Tog Duvet</h2>
                                </a>
                                <div class="review-box block w-full">
                                    <div class="review-content flex w-full flex-wrap">
                                        <div class="stars flex w-full max-w-fit items-center flex-wrap">
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <span class="text-lg">1 review</span>
                                    </div>
                                </div>
                                <div class="price-box block w-full">
                                    <div class="price-box-content flex w-full max-w-fit items-center">
                                        <span class="text-sm font-medium">£11.99</span>
                                        <span class="text-sm font-medium px-1">-</span>
                                        <span class="text-sm font-medium">£18.99</span>
                                    </div>
                                </div>
                                <div class="so block w-full pt-4 absolute -bottom-11 left-0">
                                    <div class="so-content grid md:grid-cols-2 items-center w-full">
                                        <a href="#" class="block w-full max-w-fit"><span class="block w-full max-w-fit font-semibold text-sm sm:text-base lg:text-[1.16vw] xl:text-sm uppercase">Select options</span></a>
                                        <div class="so-icon block w-full">
                                            <div class="so-icon-content flex w-full justify-end">
                                                <a href="#" class="hidden xl:block w-full max-w-fit mx-2">
                                                    <span class="block w-full max-w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>                                                          
                                                    </span>
                                                </a>
                                                <a href="#" class="hidden md:block w-full max-w-fit mx-2">
                                                    <span class="block w-full max-w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                        </svg>                                                          
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div class="product hidden md:block w-full transition-all duration-150 ease-linear col-span-1 md:col-auto">
                    <div class="product-content block w-full">
                        <div class="product-imgbox block w-full h-full">
                            <a href="#" class="block w-full h-full leading-[0] relative">
                                <img src="p-3.3.jpg" class="block w-full object-contain transition-all duration-150 ease-linear" width="auto" height="auto" alt="Product Image" />
                                <img src="p-3.jpg" class="block w-full object-contain absolute top-0 left-0 transition-all duration-150 ease-linear" width="auto" height="auto" alt="Product Image" />
                            </a>
                        </div>
                        <div class="product-info block w-full py-5 px-3 md:px-5 transition-transform duration-150 ease-linear">
                            <div class="product-info-content block w-full relative overflow-hidden">
                                <a href="#" class="block w-full mb-[6px] max-w-fit">
                                    <h2 class="block w-full text-base text-[#161619] max-w-fit truncate">15 Tog Duvet</h2>
                                </a>
                                <div class="review-box block w-full">
                                    <div class="review-content flex w-full flex-wrap">
                                        <div class="stars flex w-full max-w-fit items-center flex-wrap">
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                            <span class="pr-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 28 26" fill="none">
                                                    <path d="M14 0L17.703 8.90319L27.3148 9.67376L19.9917 15.9468L22.229 25.3262L14 20.3L5.77101 25.3262L8.00834 15.9468L0.685208 9.67376L10.297 8.90319L14 0Z" fill="#339999"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <span class="text-lg">1 review</span>
                                    </div>
                                </div>
                                <div class="price-box block w-full">
                                    <div class="price-box-content flex w-full max-w-fit items-center">
                                        <span class="text-sm font-medium">£11.99</span>
                                        <span class="text-sm font-medium px-1">-</span>
                                        <span class="text-sm font-medium">£18.99</span>
                                    </div>
                                </div>
                                <div class="so block w-full pt-4 absolute -bottom-11 left-0">
                                    <div class="so-content grid md:grid-cols-2 items-center w-full">
                                        <a href="#" class="block w-full max-w-fit"><span class="block w-full max-w-fit font-semibold text-sm sm:text-base lg:text-[1.16vw] xl:text-sm uppercase">Select options</span></a>
                                        <div class="so-icon block w-full">
                                            <div class="so-icon-content flex w-full justify-end">
                                                <a href="#" class="hidden xl:block w-full max-w-fit mx-2">
                                                    <span class="block w-full max-w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>                                                          
                                                    </span>
                                                </a>
                                                <a href="#" class="hidden md:block w-full max-w-fit mx-2">
                                                    <span class="block w-full max-w-fit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                        </svg>                                                          
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
</div>
  )
}

export default YouMayAlsoLike