import Link from "next/link"
import {newArrivals, signUp} from "../../../sections/homePageStaticContent";

const MainCollections = ({newArrivalCollection1, newArrivalCollection2, newArrivalCollection3}) => {
    // console.log("New Arrivals ====>", newArrivalCollection1, newArrivalCollection2, newArrivalCollection3)
  return (
    <div class="block w-full px-[18px] md:px-[40px] lg:px-{60px} mb-[50px]">
    <div class="block w-full max-w-[1440px] mx-auto">
        <div class="block w-full">
            <div class="flex flex-col lg:flex-row justify-center w-full">
                
                <div class="block w-full mb-[60px] lg:mb-0 lg:max-w-[65%] lg:pr-10 tabs">
                    <div class="flex flex-col w-full mx-auto gap-10">

                        <div class="block w-full h-full">
                            <Link href={`/collections/${newArrivalCollection1?.handle}`} class="transition-all duration-150 w-full lg:max-w-[920px] block">
                                <div class="block w-full lg:max-w-[920px] relative overflow-hidden">
                                    <img src="/cl-1.png" class=" object-contain transition-all duration-1000 block w-full" width="auto" height="auto" alt="Stripe Image" />
                                    <div class="inner absolute top-0 left-0 block w-full h-full p-7 sm:p-[50px]">
                                        <div class="inner-content block w-full h-full">
                                            <span class=" text-xs sm:text-xl">{newArrivals.sub_heading}</span>
                                            <h2 class="block w-full max-w-[280px] sm:max-w-[400px] lg:max-w-md  text-[24px] sm:text-[4.5vw] lg:text-[40px] font-semibold mb-[15px]">{newArrivals.heading}</h2>
                                            <span class=" transition-all duration-150 ease-linear w-full max-w-[158px] border border-[#161619] text-[#161619] hover:border-[#7f8487] hover:text-[#7f8487] block text-center text-sm leading-[38px]">{newArrivals.btn_text}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div class="block w-full">
                            <div class="block w-full">
                                <h2 class="block w-full text-3xl md:text-4xl mb-[6px] leading-[1.55556]">{signUp.heading}</h2>
                                <p class=" text-sm md:text-base text-[#161619] mb-4">{signUp.text}</p>
                                <div class="block w-full">
                                    <div class="flex gap-4 w-full">
                                        <input type="text" placeholder="Your Email Address" class="border border-black w-full text-sm px-4 leading-[3.43] outline-none placeholder:text-black" />
                                        <button class="bg-black block w-full max-w-[90px] text-white border-none outline-none"><span>Subscribe</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="block w-full lg:max-w-[30%]">
                    <div class=" flex gap-[30px] flex-col md:flex-row lg:block">

                        <div class="block w-full tabs lg:mb-10">
                            <div class="block w-full mx-auto overflow-hidden">
                                <Link href={`/collections/${newArrivalCollection2?.handle}`} class="transition-all duration-150">
                                    <div class="block w-full md:max-w-[440px] mx-auto mb-2 relative">
                                        <img src="/cl-2.png" class=" object-contain transition-all duration-1000 block w-full" width="auto" height="auto" alt="Stripe Image" />
                                        <div class="inner absolute top-0 left-0 block w-full h-full p-7 sm:p-[50px]">
                                            <div class="inner-content flex justify-center items-center flex-col w-full h-full">
                                                <h2 class="block w-full max-w-md text-center text-[34px] sm:text-[40px] md:text-[4vw] lg:text-[2.6vw] xl:text-[36px] 2xl:text-[40px] font-semibold mb-[5px] sm:mb-[10px]">{newArrivalCollection2?.title}</h2>
                                                <span class=" transition-all duration-150 ease-linear w-full max-w-[158px] border border-[#161619] text-[#161619] hover:border-[#7f8487] hover:text-[#7f8487] block text-center text-sm leading-[38px]">Shop Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div class="block w-full tabs">
                            <div class="block w-full mx-auto overflow-hidden">
                                <Link href={`/collections/${newArrivalCollection3?.handle}`} class="transition-all duration-150">
                                    <div class="block w-full lg:max-w-[440px] mx-auto mb-2 relative">
                                        <img src="/cl-3.png" class=" object-contain transition-all duration-1000 block w-full" width="auto" height="auto" alt="Stripe Image" />
                                        <div class="inner absolute top-0 left-0 block w-full h-full p-7 sm:p-[50px]">
                                            <div class="inner-content flex justify-center items-center flex-col w-full h-full">
                                                <h2 class="block w-full max-w-md text-center text-[34px] sm:text-[40px] md:text-[4vw] lg:text-[2.6vw] xl:text-[36px] 2xl:text-[40px] font-semibold mb-[5px] sm:mb-[10px]">{newArrivalCollection3?.title}</h2>
                                                <span class=" transition-all duration-150 ease-linear w-full max-w-[158px] border border-[#161619] text-[#161619] hover:border-[#7f8487] hover:text-[#7f8487] block text-center text-sm leading-[38px]">Shop Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MainCollections