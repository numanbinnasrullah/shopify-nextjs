'use client'
import { useEffect, useState } from "react";


const ProductGallery = ({ product, selectedImage }) => {
    // console.log("Selected Colors " ,selectedColor)
    // const [filteredImages, setFilteredImages] = useState([]);
    // const [mainImage, setMainImage] = useState(product?.images?.edges.map((item,index)=>{
    //     return item?.node?.originalSrc
    // }));
    const [filteredImages, setFilteredImages] = useState([]);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        // Extracting unique image URLs from variants
        const variants = product?.variants.edges || [];
        const uniqueImageUrls = new Set();

        variants.forEach((variant) => {
            const imageUrl = variant.node.image.url;
            uniqueImageUrls.add(imageUrl);
        });

        // Setting filtered images and main image
        setFilteredImages([...uniqueImageUrls]);
        setMainImage(selectedImage); // Initially selected image

    }, [product, selectedImage]);


    const changeImage = (image) => {
        console.log("image", image)
        setMainImage(image);
    };

    // useEffect(() => {
    //     // Filter the images based on the selected color
    //     const imagesForColor = product?.images?.edges.filter((item) => {
    //         // Assuming the color information is stored in item.node.color
    //         return item.node.color === selectedColor;
    //     });
        
    //     // Set the filtered images
    //     setFilteredImages(imagesForColor);

    //     // Update the main image when the filtered images change
    //     if (imagesForColor && imagesForColor.length > 0) {
    //         setMainImage(imagesForColor[0].node.originalSrc);
    //     } else {
    //         // If no images match the selected color, set main image to null or some default image
    //         setMainImage(null);
    //     }
    // }, [product, selectedColor]);

    // useEffect(() => {
    //     // Filter images based on the selected color
    //     const imagesForColor = product.images.edges.filter((item) => {
    //         // Check if the image tags contain the selected color
    //         return item.node.altText.includes(selectedColor);
    //     });

    //     // Extract URLs of filtered images
    //     const filteredImageURLs = imagesForColor.map((item) => item.node.originalSrc);
        
    //     // Set the main image to the first image in the filtered list
    //     setMainImage(filteredImageURLs[0]);

    //     // Update the state with filtered images
    //     setFilteredImages(filteredImageURLs);
    // }, [selectedColor, product?.images?.edges]);

    return (
        <>

            <div class="left block w-full">
                <div class="left-content block lg:flex w-full lg:gap-[10px]">

                    <div class="slider-left hidden lg:block w-full max-w-[12%]">
                        <div class="slider-left-content block w-full slider-nav">

                            <div class="slide block w-full mb-2">
                                <div class="imgbox block w-full max-w-[80px]">
                                    {filteredImages.map((item, index) => (
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

                    <div class="slider-right main-product-image-wrapper block w-full  lg:max-w-[88%]">
                        <div class="slider-right-content main-product-image-wrapper-content block w-full slider-for">

                            <div class="slide block w-full">
                                <div class="imgbox block w-full">
                                    {/* <img src="/Variant-1-1.png" class="block w-full h-full object-contain" width="auto" height="auto" alt="Product Image" /> */}
                                    {mainImage && <img src={mainImage} alt="Main Product" className="block w-full h-full object-contain" />}
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