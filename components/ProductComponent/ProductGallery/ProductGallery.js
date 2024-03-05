'use client'
import { useEffect, useState } from "react";


const ProductGallery = ({ product, selectedImage,variants }) => {

        const [selectImage, setSelectImage] = useState("");
        const [variantImages, setVariantImages] = useState([]);
        console.log("selectedImage " ,selectedImage)



    const changeImage = (image) => {
        console.log("image", image)
        setSelectImage(image);
    };

    useEffect(() => {
        // Initialize an empty array to store all variant images
        let allVariantImages = [];
    
        // Iterate through variants to collect images for each color
        variants.forEach((variant) => {
            const imageUrl = variant?.node?.image?.url;
            // Add image URL to the array if it's not already present
            if (!allVariantImages.includes(imageUrl)) {
                allVariantImages.push(imageUrl);
            }
        });
    
        // Set the collected variant images
        setVariantImages(allVariantImages);
        setSelectImage(selectedImage);
    }, [variants, selectedImage]);
    

    return (
    <>
            <div class="left block w-full">
                <div class="left-content block lg:flex w-full lg:gap-[10px]">
                    <div class="slider-left hidden lg:block w-full max-w-[12%]">
                        <div class="slider-left-content block w-full ">
                            <div class="slide block w-full mb-2 max-h-[580px] overflow-y-scroll hide-scrollbar">
                                <div class="imgbox block w-full max-w-[80px]">
                                    {variantImages?.map((item, index) => (
                                        <img
                                            key={index}
                                            src={item}
                                            alt={`Thumbnail ${index}`}
                                            className="block w-full h-full object-contain mb-2 cursor-pointer"
                                            onClick={() => changeImage(item)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider-right main-product-image-wrapper block w-full lg:max-w-[88%]">
                        <div class="slider-right-content main-product-image-wrapper-content block w-full slider-for">
                            <div class="slide block w-full">
                                <div class="imgbox block w-full">
                                    {selectImage && <img src={selectImage} alt="Main Product" className="block w-full h-full object-contain" />}
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