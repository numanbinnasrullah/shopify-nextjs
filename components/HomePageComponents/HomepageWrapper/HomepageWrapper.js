

const HomepageWrapper = ({children}) => {
    return (
        <div class="block w-full bg-white py-[12px] xl:py-0  px-[18px] md:px-7 relative">
            <div class=" w-full max-w-[1920px] mx-auto">
                <div class="flex w-full gap-0 xl:gap-5 items-center justify-between h-32">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HomepageWrapper;