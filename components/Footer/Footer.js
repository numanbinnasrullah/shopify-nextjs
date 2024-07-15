import Link from "next/link"
import {HomePageAssets} from "../../assets/homepageAssets"
import {informationMenu, customerService, Address, copyRight, paymentMethods, socialIcons} from "../../sections/footerContent"
const Footer = () => {
  return (
    <footer class="block w-full bg-[#161619]">
    <div class="block w-full max-w-[940px] xl:max-w-[1170px] mx-auto">
        <div class="block w-full px-5 py-[60px] lg:border-b lg:border-[#2e2e30]">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                <div class="block w-full mb-6 lg:mb-0">
                    <div class="block w-full">
                        <div class="block w-full mb-6 max-w-[240px]">
                            <a href="#" class="block w-full"><img src={HomePageAssets.logo} width="auto" height="auto" alt="Logo Image" /></a>
                        </div>
                        <div class="block w-full mb-5">
                            <div class="flex w-full items-center">
                                <span class="block w-full max-w-fit mr-1" >
                                <div dangerouslySetInnerHTML={{ __html: Address.address.svg }} />
                                </span>
                                <span class="block w-full text-[#838889] text-sm "> {Address.address.text}</span>
                            </div>
                            {/* <span class="block w-full text-[#838889] text-sm truncate"> Birmingham, (B20 2QQ)</span> */}
                        </div>
                        <div class="block w-full mb-5">
                            <div class="flex w-full items-center">
                                <span class="block w-full max-w-fit mr-1">
                                <div dangerouslySetInnerHTML={{ __html: Address.email.svg }} />
                                </span>
                                <a href="#" class="block w-full text-[#838889] text-sm"><span>{Address.email.text}</span></a>
                            </div>
                        </div>
                        <div class="block w-full">
                            <div class="flex items-center w-full">
                                <span class="block w-full max-w-fit mr-1">
                                <div dangerouslySetInnerHTML={{ __html: Address.phone.svg }} />
                                </span>
                                <span class="block w-full text-[#838889] text-sm">{Address.phone.text}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="block w-full">
                    <div class="block w-full">
                        <h4 class="block w-full text-white uppercase text-2xl mb-6">{informationMenu.heading}</h4>
                        <div class="block w-full">
                            <div class="block w-full">
                                <a href="#" class="block w-full max-w-fit text-white text-sm py-2 mb-1 capitalize"><span>blog</span></a>
                                <a href="#" class="block w-full max-w-fit text-white text-sm py-2 mb-1 capitalize"><span>about us</span></a>
                                <a href="#" class="block w-full max-w-fit text-white text-sm py-2 mb-1 capitalize"><span>privacy policy</span></a>
                                <a href="#" class="block w-full max-w-fit text-white text-sm py-2 mb-1 capitalize"><span>shipping & delivery</span></a>
                                <a href="#" class="block w-full max-w-fit text-white text-sm py-2 mb-1 capitalize"><span>sitemap</span></a>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div class="block w-full">
                    <div class="block w-full">
                        <h4 class="block w-full text-white uppercase text-2xl mb-6">{informationMenu.heading}</h4>
                        <div class="block w-full">
                            <div class="block w-full">
                                {informationMenu.links.map((link, index) => (
                                <Link key={index} href={link.url} className="block w-full max-w-fit text-white text-sm py-2 mb-1 capitalize">
                                    <span>{link.name}</span>
                                </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="block w-full">
                    <div class="block w-full">
                        <h4 class="block w-full text-white uppercase text-2xl mb-6">{customerService.heading}</h4>
                        <div class="block w-full">
                            <div class="block w-full">
                            {customerService.links.map((link, index) => (
                                <Link key={index} href={link.url} className="block w-full max-w-fit text-white text-sm py-2 mb-1 capitalize">
                                    <span>{link.name}</span>
                                </Link>
                                ))}
                                {/* <Link className="block w-full max-w-fit text-white text-sm py-2 mb-1 capitalize" href="pages/faq">FAQ</Link> */}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div class="block w-full py-10 px-5">
            <div class="flex items-center flex-col lg:flex-row">
                <div class="hidden w-full lg:block">
                    <p class="block w-full text-[#838685] text-sm">
                       {copyRight.text}
                    </p>
                </div>
                <div class="block w-full mb-5 lg:mb-0">
                    <div class="flex items-center justify-center w-full gap-1 flex-wrap lg:flex-nowrap">
                    {paymentMethods.map((item) => (
                            <div key={item.id} dangerouslySetInnerHTML={{ __html: item.svg }} />
                        ))}
                    </div>
                </div>
                <div class="block w-full mb-5 lg:mb-0">
                    <div class="flex justify-center lg:justify-end gap-6 items-center">
                    
                    {socialIcons.map((item) => (
                        <span class="block w-full max-w-[13px] fill-white">
                        <div key={item.id} dangerouslySetInnerHTML={{ __html: item.svg }} />
                        </span>
                    ))}

                        {/* <span class="block w-full max-w-[13px] fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                        </span>
                        <span class="block w-full max-w-[13px] fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </span>
                        <span class="block w-full max-w-[13px] fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
                        </span>
                        <span class="block w-full max-w-[13px] fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        </span> */}
                    </div>
                </div>
                <div class="block lg:hidden w-full">
                    <p class="block w-full text-[#838685] text-sm text-center lg:text-start">
                        &copy; 2023 Moonlight Bedding / Registered in England No. 9820747 VAT Registered: 247640105
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer