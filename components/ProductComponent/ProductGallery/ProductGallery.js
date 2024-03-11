'use client'
import { useEffect, useState, useRef } from "react";

const ProductGallery = ({ product, selectedImageId }) => {
    const [selectImage, setSelectImage] = useState(null);
    const sliderRef = useRef(null);

    const changeImage = (image) => {
        setSelectImage(image);
    };

    useEffect(() => {
        const filteredImage = product?.images?.edges.find(item => item.node.id === selectedImageId);
        if (filteredImage) {
            setSelectImage(filteredImage.node.originalSrc);
            // Automatically scroll to the selected thumbnail image
            const imageIndex = product.images.edges.findIndex(item => item.node.id === selectedImageId);
            if (sliderRef.current) {
                sliderRef.current.scrollTo(0, imageIndex * 85); // Assuming each thumbnail has a height of 100px
            }
        }
    }, [selectedImageId, product?.images?.edges]);

    return (
        <>
            <div className="left block w-full">
                <div className="left-content block lg:flex w-full lg:gap-[10px]">
                    <div className="slider-left hidden lg:block w-full max-w-[12%]">
                        <div className="slider-left-content block w-full ">
                            <div ref={sliderRef} className="slide block w-full max-h-[580px] overflow-y-scroll hide-scrollbar">
                                <div className="imgbox block w-full max-w-[80px]">
                                {product?.images?.edges.map((thumbUrl, index) => (
                                        <img
                                            key={index}
                                            src={thumbUrl.node.originalSrc}
                                            alt={`Thumbnail ${index}`}
                                            className={`block w-full h-full object-contain mb-2 cursor-pointer ${thumbUrl.node.id === selectedImageId ? 'selected' : ''}`}
                                            style={{ border: thumbUrl.node.id === selectedImageId ? '2px solid black' : 'none' }}
                                            onClick={() => changeImage(thumbUrl.node.originalSrc)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-right main-product-image-wrapper block w-full lg:max-w-[88%]">
                        <div className="slider-right-content main-product-image-wrapper-content block w-full ">
                            <div className="slide block w-full">
                                <div className="imgbox block w-full">
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

export default ProductGallery;
