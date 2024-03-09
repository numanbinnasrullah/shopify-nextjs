'use client'
import { useEffect, useState } from "react";


const ProductGallery = ({ product, selectedImageId }) => {
    const [selectImage, setSelectImage] = useState(null);
    
    const changeImage = (image) => {
        setSelectImage(image);
    };

useEffect(()=>{
    const filteredImage = product?.images?.edges.find(item => item.node.id === selectedImageId);
    if(filteredImage){
        setSelectImage(filteredImage?.node?.originalSrc);
    }
},[selectedImageId, product?.images?.edges])

    //     const [variantImages, setVariantImages] = useState([]);
    //     // console.log("selectedImage " ,selectedImage)


    // if (filteredImage?.length > 0) {
    //     const imageURL = filteredImage.map(item => item.node.originalSrc); 
    //     setSelectImage(imageURL)
    //     console.log("Image URLs:", imageURL);
    // } else {
    //     console.log("No images found for the selected ID");
    // }
  

    // useEffect(() => {
    //     // Initialize an empty array to store all variant images
    //     let allVariantImages = [];
    
    //     // Iterate through variants to collect images for each color
    //     variants.forEach((variant) => {
    //         const imageUrl = variant?.node?.image?.url;
    //         // Add image URL to the array if it's not already present
    //         if (!allVariantImages.includes(imageUrl)) {
    //             allVariantImages.push(imageUrl);
    //         }
    //     });
    
    //     // Set the collected variant images
    //     setVariantImages(allVariantImages);
    //     setSelectImage(selectedImage);
    // }, [variants, selectedImage]);
    

    return (
    <>
            <div class="left block w-full">
                <div class="left-content block lg:flex w-full lg:gap-[10px]">
                    <div class="slider-left hidden lg:block w-full max-w-[12%]">
                        <div class="slider-left-content block w-full ">
                            <div class="slide block w-full mb-2 max-h-[580px] overflow-y-scroll hide-scrollbar">
                                <div class="imgbox block w-full max-w-[80px]">
                                    {product?.images?.edges.map((item, index) => (
                                        <img
                                            key={index}
                                            src={item.node.originalSrc}
                                            alt={`Thumbnail ${index}`}
                                            className="block w-full h-full object-contain mb-2 cursor-pointer"
                                            onClick={() => changeImage(item.node.originalSrc)}
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