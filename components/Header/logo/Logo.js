import Image from "next/image"
import Link from "next/link"


const Logo = () => {
  return (
    <>
        
         <div class="block xl:hidden w-full max-w-[25%] ">
                    <div class="block w-full max-w-fit cursor-pointer" id="btnhamburger">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
                <div class="block w-full max-w-[50%] xl:max-w-[20%] shrink-0">
                    <div class="block w-full mx-auto xl:mx-0 max-w-[170px]">
                        <Link href="/"><Image src={process.env.logo} width="170" height="45" /></Link>
                        
                        {/* <img src="Moonlight-Logo-Final.png" class="block w-full object-contain" width="auto" height="auto" alt="Image" /> */}
                    </div>
                </div>
        
    </>
  )
}

export default Logo;