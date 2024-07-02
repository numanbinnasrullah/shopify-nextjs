import {customerService} from '../../../sections/homePageStaticContent'
import {HomePageAssets} from "../../../assets/homepageAssets"

const RichText = () => {
  return (
    <div class="block w-full py-5">
    <div class="block w-full max-w-[1440px] mx-auto">
        <div class="block w-full">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                
                <div class="block w-full p-5">
                    <div class="block w-full max-w-fit mx-auto">
                        <div class="block w-full max-w-[45px] mx-auto mb-2">
                            <img src={HomePageAssets.deliver} class="block w-full" width="auto" height="auto" alt="Stripe Image" />
                        </div>
                        <h4 class="block w-full text-center font-semibold text-lg sm:text-xl md:text-2xl">{customerService?.section1.heading}</h4>
                        <span class="block w-full text-center text-[#161619] text-xs sm:text-sm md:text-base ">{customerService?.section1.text}</span>
                    </div>
                </div>

                <div class="block w-full p-5">
                    <div class="block w-full max-w-fit mx-auto">
                        <div class="block w-full max-w-[45px] mx-auto mb-2">
                            <img src={HomePageAssets.customerService} class="block w-full" width="auto" height="auto" alt="Stripe Image" />
                        </div>
                        <h4 class="block w-full text-center font-semibold text-lg sm:text-xl md:text-2xl">{customerService?.section2.heading}</h4>
                        <span class="block w-full text-center text-[#161619] text-xs sm:text-sm md:text-base ">{customerService?.section2.text}</span>
                    </div>
                </div>

                <div class="block w-full p-5 sm:col-span-2 lg:col-span-1">
                    <div class="block w-full max-w-fit mx-auto">
                        <div class="block w-full max-w-[45px] mx-auto mb-2">
                            <img src={HomePageAssets.guarantee} class="block w-full" width="auto" height="auto" alt="Stripe Image" />
                        </div>
                        <h4 class="block w-full text-center font-semibold text-lg sm:text-xl md:text-2xl">{customerService?.section3.heading}</h4>
                        <span class="block w-full text-center text-[#161619] text-xs sm:text-sm md:text-base ">{customerService?.section3.text}</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default RichText