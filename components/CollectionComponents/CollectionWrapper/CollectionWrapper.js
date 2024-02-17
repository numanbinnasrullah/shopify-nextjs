import React from 'react'

const CollectionWrapper = ({children}) => {
    return (
        <div class="main block w-full px-[18px]">
            <div class="nws-container block w-full max-w-[1440px] mx-auto">
                <div class="body block w-full">
                    <div class="content block w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionWrapper