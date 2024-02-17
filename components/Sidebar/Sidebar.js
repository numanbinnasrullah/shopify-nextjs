'use client'
import { useEffect, useRef, useState } from 'react'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleDocumentClick = (event) => {
            if (isOpen) {
                handleClickOutside(event);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isOpen]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
    {isOpen && (
                <div className="block w-full fixed top-0 left-0 bg-[#00000082] h-full z-20" onClick={toggleSidebar}></div>
            )}
<div className={`block w-full fixed top-0 left-0 bg-[#00000082] h-full z-20 transition-all duration-150 ease-linear opacity-0 pointer-events-none ${isOpen ? 'opacity-100 pointer-events-auto' : ''}`} id="sidenav">
<div className="flex w-full h-full" ref={sidebarRef}>

<div className={`block w-full max-w-[380px] bg-white px-[18px] overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-150 ease-linear`} ref={sidebarRef}>
                            <div class="block w-full h-full">
                                
                                <div class="block sm:hidden w-full py-3">
                                    <div class="flex items-center justify-between">
                                        <div class="block w-full max-w-[25%]">
                                            <div class="block w-fit" id="btnCrossSide">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="block w-full max-w-[50%]">
                                            <div class="block w-full">
                                                <img src="moonlight-logo.png" class="block w-full object-contain" width="auto" height="auto" alt="Logo Image" />
                                            </div>
                                        </div>
                                        <div class="block w-full max-w-[25%]">
                                            <div class="flex justify-end w-full">
                                                <a href="#" class="block w-full max-w-fit mr-7">
                                                    <span counter2="0" class="cartcounter relative">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="block w-full">
                                    <form class="block w-full py-[11px] border-b border-[#e3e7e8]">
                                        <div class="flex w-full">
                                            <span class="block w-full max-w-fit cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                                                </svg>
                                            </span>
                                            <input type="text" class="block w-full outline-none px-2 text-sm text-gray-600" placeholder="Search" />
                                        </div>
                                    </form>
                                </div>

                                <div class="block w-full py-3">
                                    <ul class="block w-full" id="sideNavMenuList">
                                        <li>
                                            <a href="#" class="block w-full max-w-fit text-xl text-black uppercase py-[15px]">
                                                <span>Bedding</span>
                                            </a>
                                            <ul class="block w-full mt-0 pl-0 h-0 border-l overflow-hidden border-[#e3e7e8] transition-all duration-150 ease-linear">
                                                <li>
                                                    <a href="#" class="block w-full max-w-fit text-base font-medium text-black uppercase pb-[15px]">
                                                        <span>Duvet Covers</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block w-full max-w-fit text-base font-medium text-black uppercase py-[15px]">
                                                        <span>Duvet tog</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block w-full max-w-fit text-base font-medium text-black uppercase py-[15px]">
                                                        <span>FITTED SHEETS</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block w-full max-w-fit text-base font-medium text-black uppercase py-[15px]">
                                                        <span>FLAT SHEETS</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block w-full max-w-fit text-base font-medium text-black uppercase py-[15px]">
                                                        <span>MATTRESS PROTECTORS</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block w-full max-w-fit text-base font-medium text-black uppercase pt-[15px]">
                                                        <span>PILLOWS</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" class="block w-full max-w-fit text-xl text-black uppercase py-[15px]">
                                                <span>Pillowcases</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="block w-full max-w-fit text-xl text-black uppercase py-[15px]">
                                                <span>cushions</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="block w-full max-w-fit text-xl text-black uppercase py-[15px]">
                                                <span>blankets</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="block w-full max-w-fit text-xl text-black uppercase py-[15px]">
                                                <span>rugs</span>
                                            </a>
                                            <ul class="block w-full mt-0 pl-0 h-0 border-l overflow-hidden border-[#e3e7e8] transition-all duration-150 ease-linear">
                                                <li>
                                                    <a href="#" class="block w-full max-w-fit text-base font-medium text-black uppercase pb-[15px]">
                                                        <span>CASHMERE RUGS</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block w-full max-w-fit text-base font-medium text-black uppercase pt-[15px]">
                                                        <span>PRINTED RUGS</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" class="block w-full max-w-fit text-xl text-black uppercase py-[15px]">
                                                <span>bathmats</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="block w-full max-w-fit text-xl text-black uppercase py-[15px]">
                                                <span>sofa covers</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="block w-full max-w-fit text-xl text-black uppercase py-[15px]">
                                                <span>new arrivals</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="block w-full">
                                    <div class="block w-full">
                                        <a href="#" class="block w-full max-w-fit text-xl text-black uppercase py-[15px]"><span>Sign in</span></a>
                                        <a href="#" class="block w-full max-w-fit ml-auto pr-[22px] py-[15px]">
                                            <span counter="0" class="whishcounter relative">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <button className="absolute top-0 left-0 mt-4 ml-4 text-white" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
    </>
  )
}

export default Sidebar