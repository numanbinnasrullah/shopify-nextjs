

const RichText = () => {
  return (
    <div class="block w-full py-5">
    <div class="block w-full max-w-[1440px] mx-auto">
        <div class="block w-full">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                
                <div class="block w-full p-5">
                    <div class="block w-full max-w-fit mx-auto">
                        <div class="block w-full max-w-[45px] mx-auto mb-2">
                            <img src="/s-1.png" class="block w-full" width="auto" height="auto" alt="Stripe Image" />
                        </div>
                        <h4 class="block w-full text-center font-semibold text-lg sm:text-xl md:text-2xl">{process.env.Rich_Text_1}</h4>
                        <span class="block w-full text-center text-[#161619] text-xs sm:text-sm md:text-base ">{process.env.Rich_Text_2}</span>
                    </div>
                </div>

                <div class="block w-full p-5">
                    <div class="block w-full max-w-fit mx-auto">
                        <div class="block w-full max-w-[45px] mx-auto mb-2">
                            <img src="/s-2.png" class="block w-full" width="auto" height="auto" alt="Stripe Image" />
                        </div>
                        <h4 class="block w-full text-center font-semibold text-lg sm:text-xl md:text-2xl">{process.env.Rich_Text_3}</h4>
                        <span class="block w-full text-center text-[#161619] text-xs sm:text-sm md:text-base ">{process.env.Rich_Text_4}</span>
                    </div>
                </div>

                <div class="block w-full p-5 sm:col-span-2 lg:col-span-1">
                    <div class="block w-full max-w-fit mx-auto">
                        <div class="block w-full max-w-[45px] mx-auto mb-2">
                            <img src="/s-3.png" class="block w-full" width="auto" height="auto" alt="Stripe Image" />
                        </div>
                        <h4 class="block w-full text-center font-semibold text-lg sm:text-xl md:text-2xl">{process.env.Rich_Text_5}</h4>
                        <span class="block w-full text-center text-[#161619] text-xs sm:text-sm md:text-base ">{process.env.Rich_Text_6}</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default RichText