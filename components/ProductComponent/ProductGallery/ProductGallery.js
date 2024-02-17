'use client'
import { useState } from "react";


const ProductGallery = ({ images }) => {
    const [mainImage, setMainImage] = useState(images[0]);

    const changeImage = (image) => {
        setMainImage(image);
    };
    return (
        <>

            <div class="left block w-full">
                <div class="left-content block lg:flex w-full lg:gap-[10px]">

                    <div class="slider-left hidden lg:block w-full max-w-[12%]">
                        <div class="slider-left-content block w-full slider-nav">

                            <div class="slide block w-full mb-2">
                                <div class="imgbox block w-full max-w-[80px]">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index}`}
                                            className="block w-full h-full object-contain mb-2 cursor-pointer"
                                            onClick={() => changeImage(image)}
                                        />
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>

                    <div class="slider-right main-product-image-wrapper block w-full  lg:max-w-[88%]">
                        <div class="slider-right-content main-product-image-wrapper-content block w-full slider-for">

                            <div class="slide block w-full">
                                <div class="imgbox block w-full">
                                    {/* <img src="/Variant-1-1.png" class="block w-full h-full object-contain" width="auto" height="auto" alt="Product Image" /> */}
                                    <img src={mainImage} alt="Main Product" className="block w-full h-full object-contain" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductGallery