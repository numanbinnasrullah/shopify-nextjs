import React from 'react'

const Filters = () => {
  return (
    <div class="filter-box hidden lg:block w-full max-w-[360px] pr-10">
    <div class="filter-box-content block w-full h-full">

        <div class="variant-box block w-full py-5">
            <div class="variant-box-content block w-full">
                <div class="heading-box block w-full mb-[18px]">
                    <h2 class="text-xl text-[#161619] font-medium">Color</h2>
                </div>
                <div class="variants block w-full">
                    <div class="content flex w-full flex-wrap gap-4">

                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Charcoal</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Ochre</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Grey</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Black</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Silver</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Beige</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Brown</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Red</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Teal</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">White</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Beige</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Brown</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Red</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">Teal</span>
                        <span class="block w-full max-w-fit text-[#838889] border border-[#838889] py-1 px-4 cursor-pointer">White</span>

                    </div>
                </div>
            </div>
        </div>

        <div class="price py-5">
            <div class="price-content">
                <div class="heading-box block w-full mb-[18px]">
                    <h2 class="text-xl text-[#161619] font-medium">PRICE</h2>
                </div>

                <div class="range block w-full">
                    <div class="range-content block w-full">
                        <div class="box block w-full">
                            <div class="box-content block w-full">

                                <div class="range block w-full h-[1px] bg-[#161619] relative after:absolute after:w-4 after:h-4 after:bg-[#161619] after:rounded-full after:top-1/2 after:-translate-y-1/2 after:cursor-w-resize  before:absolute before:w-4 before:h-4 before:bg-[#161619] before:rounded-full before:top-1/2 before:-translate-y-1/2 before:right-0 before:cursor-w-resize"></div>
                                <div class="price-box block w-full py-4">
                                    <div class="price-box-content flex justify-center items-center">
                                        <span class="block w-full max-w-fit text-xs text-[#666668] mr-[2px]">Price:</span>
                                        <span class="block w-full max-w-fit text-xs text-[#666668]">£0</span>
                                        <span class="block w-full max-w-fit text-xs text-[#666668] mx-1">-</span>
                                        <span class="block w-full max-w-fit text-xs text-[#666668]">£10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="btns block w-full py-5">
            <div class="btns-wrapper-content grid gap-5">
                <a href="#" class="w-full h-[60px] cursor-pointer bg-[#161619] border border-[#161619] text-[#FFF] flex justify-center items-center">Filter</a>
                <a href="#" class="w-full h-[60px] cursor-pointer bg-[#FFF] border border-[#161619] text-[#161619] flex justify-center items-center">RESET FILTER</a>
            </div>
        </div>


    </div>
</div>
  )
}

export default Filters