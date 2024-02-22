'use client'
import { useState } from "react";

const SidebarToggler = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
  return (
    <>
             <div class="filter-nav block w-full py-5">
        <div class="filter-nav-content grid grid-cols-2 lg:grid-cols-1 w-full">

            <div class="left block lg:hidden w-full ">
            <div className="left-content flex items-center w-full max-w-fit h-full cursor-pointer" onClick={toggleSidebar} >
                    <span class="icon block w-full max-w-fit mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </span>
                    <span class="name">Filter By</span>
            </div>
            
            </div>

            <div class="right">
                <div class="right-content flex items-center justify-end">
                    
                    <div class="counter w-full max-w-fit hidden md:block">
                        <div class="counter-content block w-full">
                            <span class="text-xs mr-14 text-[#161619]">2 Products</span>
                        </div>
                    </div>
                    
                    <div class="sort block w-full max-w-fit md:max-w-[105px] p-1 border-b border-[#e3e7e8]">
                        <div class="sort-content flex items-center justify-between">
                            <span class="pr-3 text-[#161619] text-sm">Sort by</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
{ isSidebarOpen && 
            <div className={`filter fixed top-0 right-0 bottom-0 bg-[#0000004d] transition-all duration-200 ease-linear ${isSidebarOpen ? 'w-full md:w-[50%] lg:w-[30%]' : 'w-0 md:w-[0%]'} z-20`}>
                <div class="filter-content flex w-full h-full justify-end">
                    
                <div className="filter-box block w-full max-w-[100%] bg-white md:translate-x-0 md:relative md:w-[100%] lg:w-[100%] xl:w-[100%] transition-all duration-200 ease-linear">
                        <div class="filter-box-content flex flex-col h-full">

                            <div class="filter-box-top block w-full py-5 px-10">
                                <div class="filter-box-top-content grid grid-cols-2 items-center">
                                    <div class="left block w-full">
                                        <span class="block w-full max-w-fit text-lg font-medium">Filter By</span>
                                    </div>
                                    <div class="right flex justify-end items-center gap-1 w-full">
                                        <span class="text-base font-medium hidden md:block" onClick={closeSidebar}>Close</span>
                                        <span class="block w-full max-w-fit cursor-pointer" onClick={closeSidebar} id="closeFilter">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="filter-main flex-1 overflow-y-auto">
                                <div class="filter-main-content block w-full h-full">

                                    <div class="variant-box block w-full py-5 px-10">
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

                                    <div class="price py-5 px-10">
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

                                    <div class="btns block w-full py-5 px-10">
                                        <div class="btns-wrapper-content grid gap-5">
                                            <a href="#" class="w-full h-[60px] cursor-pointer bg-[#161619] border border-[#161619] text-[#FFF] flex justify-center items-center">Filter</a>
                                            <a href="#" class="w-full h-[60px] cursor-pointer bg-[#FFF] border border-[#161619] text-[#161619] flex justify-center items-center">RESET FILTER</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
}
        </div>
    </div>
    </>
  )
}

export default SidebarToggler