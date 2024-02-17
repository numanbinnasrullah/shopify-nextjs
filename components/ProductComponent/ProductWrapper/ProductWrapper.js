import React from 'react'

const ProductWrapper = ({children}) => {
    return (
        <div class="block w-full py-[30px] lg:px-10">
            <div class="block w-full max-w-[1400px] mx-auto">
                <div class="block w-full">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-[60px]">
                    {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductWrapper