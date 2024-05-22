'use client'

import { useEffect, useState } from "react";
import ProductGallery from "../ProductGallery/ProductGallery";
import Link from "next/link";
import Modal from "@/components/modal/modal";
// import cartCreateQuery from "@/graphql/cartcreate";
import { useCartCreateMutation, useUpdateExistingCartMutation } from "@/store/services/cartService";
import { useDispatch } from "react-redux";
import { setBaskitCounterValue } from "@/store/reducers/cartReducer";

const checkVariants = (title, variants) => {
    let sizes = [];
    let colors = [];
    let choices = [];

    // Check if title can be split by "/"
    const canSplit = title.includes("/");
    if (canSplit) {
        sizes = Array.from(
          new Set(variants.map((variant) => variant.node.title.split("/")[0].trim()))
        );
        
        colors = Array.from(
            new Set(variants.map((variant) => variant.node.title.split("/")[1].trim()))
          );
        // Check if choices are available
        if (variants.some(variant => variant.node.title.split("/").length > 2)) {
            choices = Array.from(
                new Set(variants.map((variant) => variant.node.title.split("/")[2].trim()))
            );
        }
       
    } else {
        
         sizes = Array.from(
            new Set(variants.map((variant) => variant.node.title))
          );
        //   console.log("Just Sizes", sizes)
    }
    return { sizes, colors, choices };
  };

const ProductInfo = ({product}) => {
    console.log("ProductInfo", product)
    const [createCart, responseCreate] = useCartCreateMutation();
    const [updateCart, responseUpdate] = useUpdateExistingCartMutation();
    console.log("Cart Create response",responseCreate)
    console.log("Cart Update response",responseUpdate)
    let cartIdExist;
    if (typeof window !== 'undefined') {
        cartIdExist = localStorage.getItem('cartId')
    }
    console.log("Localstorage cart id ******",cartIdExist )
    const variants = product?.variants?.edges || [];
    let colors1 = [];
    let sizes1 = [];
    let choices1 = [];
    variants.forEach(variant => {
        const { title } = variant.node;
        const { sizes, colors, choices } = checkVariants(title, variants);
        sizes1 = [...new Set([...sizes1, ...sizes])];
        colors1 = [...new Set([...colors1, ...colors])];
        choices1 = [...new Set([...choices1, ...choices])];
    });
  

    const [selectedColor, setSelectedColor] = useState(colors1[0]);
    const [selectedSize, setSelectedSize] = useState(sizes1[0]);
    const [selectedChoice, setSelectedChoice] = useState(choices1[0]);
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedImageId, setSelectedImageId] = useState("")
    const [quantityAvailable, setQuantityAvailable] = useState("")
    const [productCount, setProductCount] = useState(1)
    const [selectedVariantForCart, setSelectedVariantForCart] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCartCreated, setIsCartCreated] = useState(false);
    console.log("selectedVariantForCart", selectedVariantForCart);
    const dispatch = useDispatch()

    const createCartData = {
        variantID: selectedVariantForCart,
        quantity: productCount
    }
    const updateCartData = {
        variantID: selectedVariantForCart,
        cartId: cartIdExist,
        quantity: productCount
    }
    const handleAddToBasketClick = () => {
        setIsModalOpen(true);
        if (cartIdExist) {
            console.log("Id exists in localStorage, updating cart...");
            updateCart(updateCartData);
        } else {
            console.log("Creating new cart...");
            createCart(createCartData);
        }
        // dispatch(setBaskitCounterValue(productCount))
    };
    useEffect(() => {
        if (responseCreate?.isSuccess) {
            const counterSum = responseCreate?.data?.res?.data?.cartCreate?.cart?.lines?.edges?.reduce((sum, item) => sum + item.node.quantity, 0);
            console.log("Product count updated*****",counterSum)

            dispatch(setBaskitCounterValue(counterSum));
        }
    }, [responseCreate?.isSuccess]);

    useEffect(() => {
         if (responseUpdate?.isSuccess) {
             const counterSum = responseUpdate?.data?.res?.data?.cartLinesAdd?.cart?.lines?.edges?.reduce((sum, item) => sum + item.node.quantity, 0);
             console.log("Product count updated 12211",counterSum)

             dispatch(setBaskitCounterValue(counterSum));
         }
     }, [responseUpdate?.isSuccess]);

    useEffect(() => {
        if (responseCreate.isSuccess) {
            const cartId = responseCreate.data?.res?.data?.cartCreate?.cart?.id;
            setIsCartCreated(true);
            try {
                    if (typeof window !== 'undefined') {
                    localStorage.setItem('cartId', cartId);
                    }
                } catch (error) {
                    console.error('Error while setting cart Id in localStorage:', error);
                }
            
        }
    }, [responseCreate.isSuccess]);

    useEffect(() => {
        if (responseUpdate.isSuccess) {
            console.log("Cart updated successfully");
        }
    }, [responseUpdate.isSuccess]);
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  

    // console.log("Selected image from state ==>:", selectedImageId);

       // Function to handle size selection
       const handleSizeChange = (event) => {
        const selectSize = event.target.value;
        console.log("Ab size select hua ", selectSize)
        setSelectedSize(selectSize);
        
        // Update selected price
        getSelectedVariantPrice( selectSize, selectedColor, selectedChoice);
        console.log("selected color ", selectedColor)
        
        
        };

     const handleColorChange = (event) => {
        const selectColor = event.target.value;
        // console.log("ffffff", selectColor)
        setSelectedColor(selectColor);
        // console.log("ffffff", selectColor)
        // Find sizes and choices for selected color
        const { sizes, choices } = getSizesAndChoicesForColor(selectColor);
        // console.log("size return", sizes)

        setSelectedSize(sizes.includes(selectedSize) ? selectedSize : sizes[0]);
        // Update selected size and choice based on the first option of each list
        setSelectedChoice(choices1[0] || '');


        // Update selected price
        getSelectedVariantPrice( selectedSize, selectColor, selectedChoice);
      
    };

    const getSizesAndChoicesForColor = (color) => {
        // console.log('getSizesAndChoicesForColor', color);
        const filteredVariants = variants.filter(variant => {
            const titleParts = variant.node.title.split("/");
            if (titleParts.length === 1) {
                // If title cannot be split, consider the color as the only option
                return titleParts[0].trim() === color;
            } else {
                return titleParts[1].trim() === color;
            }
        });
        // console.log("Check result", filteredVariants);
        let sizes = [];
        let choices = [];
    
        if (filteredVariants.length > 0) {
            sizes = [...new Set(filteredVariants.map(variant => {
                const titleParts = variant.node.title.split("/");
                return titleParts[0].trim();
            }))];
            // Check if choices exist in any variant
            if (filteredVariants.some(variant => variant.node.title.split("/").length > 2)) {
                choices = [...new Set(filteredVariants.map(variant => {
                    const titleParts = variant.node.title.split("/");
                    return titleParts[2].trim();
                }))];
            }
        }
        return { sizes, choices };
    };

       
     
        const getSelectedVariantPrice = (size, color, choice) => {
            // console.log("Compareddddd ====> :", size, color, choice);
            // console.log("Compare1 ====> :", selectedSize, selectedColor, selectedChoice);
            // console.log("Variantsdddddddddd:", variants);
        
            let selectedTitle = "";
        
            if (size && color && choice) {
                selectedTitle = `${size} / ${color} / ${choice}`;
            } else if (size && color) {
                selectedTitle = `${size} / ${color}`;
            } else if (size) {
                selectedTitle = `${size}`;
            }
        
            const selectedVariant = variants.find(
                (variant) => variant.node.title.includes(selectedTitle)
            );
            console.log("selectedVariant", selectedVariant);
        
            // console.log("Selected Variant Price:", selectedVariant); 
            setSelectedPrice(selectedVariant?.node?.price?.amount);
            setSelectedImageId(selectedVariant?.node?.image?.id);
            
            // const selectedImage = variants.find(
            //     (item) => item.node.image.id === selectedVariant?.node?.image?.id
            // );
            // // setSelectedImageId(selectedVariant?.node?.image?.id);
            // setSelectedImageId(selectedImage?.node?.image?.id);
            //  console.log("Selected Image", selectedImage);

            setQuantityAvailable(selectedVariant?.node.quantityAvailable)

            setSelectedVariantForCart(selectedVariant?.node?.id)
            
        };
        

 

    // Function to handle choice selection
    const handleChoiceChange = (event) => {
        setSelectedChoice(event.target.value);

         // Update selected price
         getSelectedVariantPrice(selectedColor, selectedSize, event.target.value);
         
    };


    const handleProductCountDecrease = () => {
        if(productCount > 1){
            setProductCount(productCount - 1)
        }
        
    };
    const handleProductCountIncrease = () => {
        setProductCount(productCount + 1)
    };

    useEffect(() => {
        // console.log("Compare1111 ====> :", selectedSize, selectedColor, selectedChoice);
        // Set default price on component mount
        getSelectedVariantPrice( selectedSize, selectedColor, selectedChoice);
    //    console.log("Check get", selectedPrice)
      
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (!event.target.closest('.modal')) {
            setIsModalOpen(false);
          }
        };
    
        document.body.addEventListener('click', handleOutsideClick);
    
        return () => {
          document.body.removeEventListener('click', handleOutsideClick);
        };
      }, []);
    

  return (
    <>
        <ProductGallery variants={variants} selectedColor={selectedColor} selectedImageId={selectedImageId} product={product} />
    <div class="right block w-full px-[18px] md:px-10 lg:px-0">
    <div class="right-content block w-full lg:max-w-[600px]">
        <h1 class="text-2xl md:text-[32px] text-[#161619] mb-2">{product?.title}</h1>
        <div class="rating-box block w-full mb-8">
            <div class="rating-box-content block w-full">
                <div class="review block w-full mb-1">
                    <div class="review-content flex items-center">
                        <div class="star flex items-center mr-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#339999" viewBox="0 0 24 24" stroke-width="1.5" stroke="#339999" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                        </div>
                        <span class="text-base text-[#575759]">1 review</span>
                    </div>
                </div>
                <div class="tr block w-full mb-3">
                    <div class="tr-content flex w-full items-baseline">
                        <span class="text-base text-[#575759] mr-1">Tog Rating:</span>
                        <span class="text-base text-[#575759]">15</span>
                    </div>
                </div>
                <div class="tr-box block w-full">
                    <div class="tr-box-content flex w-full flex-wrap gap-5">
                        <span class="block w-full max-w-[38px] py-2 text-xs text-center bg-[#e5e5e5] border-[2px] border-[#00000099] cursor-pointer">15</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="variant mb-14 flex ">
            {
                selectedColor ?  <>
                <div class="variant-content flex-1">
                <label for="size" class=" w-full text-base text-[#575759] capitalize mb-3">Color:<span class="ml-1">{selectedColor}</span></label>
                <div class="variant-box block w-full">
                        <div class="variant-box-content flex w-full flex-wrap gap-5">
                        <select className="w-[50%] p-2  border-2" value={selectedColor} onChange={handleColorChange}>
                        {colors1.map((color, index)=>{
                                        return <option key={color} value={color}  className=" cursor-pointer w-full  py-6 text-md text-center bg-[#e5e5e5] border-[2px] border-[#00000099] capitalize">{color}</option>
                                    })}
                                </select>
                                </div>
                            </div>
                        </div> 

                    <div class="variant-content flex-1">
                    <label for="size" class=" w-full text-base text-[#575759] capitalize mb-3">Size:<span class="ml-1">{selectedSize}</span></label>
                    <div class="variant-box block w-full">
                        <div class="variant-box-content flex w-full flex-wrap gap-5">
                        <select className="w-[50%] p-2  border-2" value={selectedSize} onChange={handleSizeChange}>
                            {getSizesAndChoicesForColor(selectedColor).sizes.map((size, index) => (
                                <option key={index} value={size} className=" cursor-pointer w-full  py-6 text-md text-center bg-[#e5e5e5] border-[2px] border-[#00000099] capitalize">{size}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    </div>
{
    selectedChoice &&  <div class="variant-content flex-1">
    <label for="size" class=" w-full text-base text-[#575759] capitalize mb-3">Choices:<span class="ml-1">{selectedChoice}</span></label>
    <div class="variant-box block w-full">
        <div class="variant-box-content flex w-full flex-wrap gap-5">
        <select className="w-[50%] p-2  border-2" value={selectedSize} onChange={handleChoiceChange}>
            {getSizesAndChoicesForColor(selectedColor).choices.map((choice, index) => (
                <option key={index} value={choice} className=" cursor-pointer w-full  py-6 text-md text-center bg-[#e5e5e5] border-[2px] border-[#00000099] capitalize">{choice}</option>
            ))}
        </select>
        </div>
    </div>
</div>
}
                   
                </> :   <div class="variant-content flex-1">
                <label for="size" class=" w-full text-base text-[#575759] capitalize mb-3">Size<span class="ml-1">{selectedColor}</span></label>
                <div class="variant-box block w-full">
                    <div class="variant-box-content flex w-full flex-wrap gap-5">
                    <select className="w-[50%] p-2  border-2" value={selectedSize} onChange={handleSizeChange}>
                    {sizes1.map((size, index) => (
                        <option key={index} value={size} className=" cursor-pointer w-full  py-6 text-md text-center bg-[#e5e5e5] border-[2px] border-[#00000099] capitalize">{size}</option>
                    ))}
                    </select>
                    </div>
                </div>
            </div>
            }
            

        </div>

      
        <div class="price-box block w-full mb-10">
            <div class="price-box-content flex w-full">
                <span class="text-3xl text-[#161619]">
                {/* {selectedPrice ? `£${selectedPrice.amount}` : 'Select Color and Size'} */}
                Price: {selectedPrice}
                </span>
            </div>
        </div>
        <div class="stocks block w-full mb-5">
            <div class="stocks-content flex items-center">
                <span class="text-[#161619] text-xs font-medium">{quantityAvailable > 0  ? `${quantityAvailable} in Stock` : "Out of Stock"}</span>
            </div>
        </div>
        <div class="ac block w-full mb-12">
            <div class="ac-content block w-full">
                
                <div class="counter block w-full mb-7">
                    <div class="counter-box block w-full max-w-[116px] border border-[#cdcfd0]">
                        <div class="counter-box-content flex w-full items-center justify-between">
                            <button class="block py-5 px-2 w-full max-w-fit cursor-pointer decrement" onClick={handleProductCountDecrease} disabled={productCount <= 1} style={{ cursor: productCount <= 1 ? 'not-allowed' : 'pointer' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                            </button>
                            {productCount}
                            <button class="block py-5 px-2 w-full max-w-fit cursor-pointer " onClick={handleProductCountIncrease}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="btn-wrapper block w-full">
                    <button  onClick={handleAddToBasketClick} className={`flex justify-center items-center w-full capitalize bg-[#161619] text-white text-sm text-center h-[60px] ${quantityAvailable <= 0 ? 'bg-gray-400 cursor-not-allowed' : ''}`} disabled={quantityAvailable <= 0}>{quantityAvailable <= 0 ? "Out of stock": "Add to basket"}</button>
                </div>

            </div>
        </div>
        <div class="menu block w-full">
            <div class="menu-content grid grid-cols-2">
                <div class="left block w-full">
                    <div class="left-content flex items-center w-full max-w-fit cursor-pointer">
                        <span class="block w-full max-w-fit mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[18px] h-[18px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </span>
                        <span class="block w-full max-w-fit text-xs text-[#161619] ">Add to wishlist</span>
                    </div>
                </div>
                <div class="right block w-full">
                    <div class="right-content flex items-center w-full justify-end max-w-fit ml-auto cursor-pointer">
                        <span class="block w-full max-w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[18px] h-[18px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>                                                  
                        </span>
                        <span class="block w-full max-w-fit  text-xs text-[#161619] ml-1">Share</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} product={product} selectedImageId={selectedImageId} selectedPrice={selectedPrice} selectedSize={selectedSize} />
    </>
      
  )
}

export default ProductInfo