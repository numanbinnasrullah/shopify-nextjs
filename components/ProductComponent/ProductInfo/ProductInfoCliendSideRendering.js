'use client'

import { useEffect, useState } from "react";

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
          console.log("Just Sizes", sizes)
    }
    return { sizes, colors, choices };
  };


const ProductInfoCliendSideRendering = ({product}) => {

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
    const [selectedImage, setSelectedImage] = useState("")
    const [quantityAvailable, setQuantityAvailable] = useState("")
    const [productCount, setProductCount] = useState(1)
    console.log("Sizes:", selectedSize);

     const handleColorChange = (event) => {
        const selectColor = event.target.value;
        console.log("ffffff", selectColor)
        setSelectedColor(selectColor);
        console.log("ffffff", selectColor)
        // Find sizes and choices for selected color
        const { sizes, choices } = getSizesAndChoicesForColor(selectColor);
        console.log("size return", sizes)
        
        // Update selected size and choice based on the first option of each list
        setSelectedSize(sizes[0] || '');
        setSelectedChoice(choices[0] || '');

        // Update selected price
        getSelectedVariantPrice( selectedSize, selectColor, selectedChoice);
      
    };

    const getSizesAndChoicesForColor = (color) => {
        console.log('getSizesAndChoicesForColor', color);
        const filteredVariants = variants.filter(variant => {
            const titleParts = variant.node.title.split("/");
            if (titleParts.length === 1) {
                // If title cannot be split, consider the color as the only option
                return titleParts[0].trim() === color;
            } else {
                return titleParts[1].trim() === color;
            }
        });
        console.log("Check result", filteredVariants);
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
            console.log("Compareddddd ====> :", size, color, choice);
            console.log("Compare1 ====> :", selectedSize, selectedColor, selectedChoice);
            console.log("Variantsdddddddddd:", variants);
        
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
        
            console.log("Selected Variant Price:", selectedVariant); // Selected variant ko check karein
            setSelectedPrice(selectedVariant?.node?.price?.amount);
        
            const selectedImage = variants.find(
                (item) => item.node.image.id === selectedVariant?.node?.image?.id
            );
            setSelectedImage(selectedImage?.node?.image?.url);
            console.log("Selected Image", selectedImage?.node?.image?.url);

            setQuantityAvailable(selectedVariant?.node.quantityAvailable)
        };
        

    // Function to handle size selection
    const handleSizeChange = (event) => {
        const selectSize = event.target.value;
        console.log("Ab size select hua ", selectSize)
        setSelectedSize(selectSize);
        
        // Update selected price
         getSelectedVariantPrice( selectSize, selectedColor, selectedChoice);
        
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
        console.log("Compare1111 ====> :", selectedSize, selectedColor, selectedChoice);
        // Set default price on component mount
        getSelectedVariantPrice( selectedSize, selectedColor, selectedChoice);
       console.log("Check get", selectedPrice)
      
    }, []);


  return (
    <>
    
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
                            <button class="block py-5 px-2 w-full max-w-fit cursor-pointer increment" onClick={handleProductCountIncrease}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="btn-wrapper block w-full">
                    <a href="#" class="flex cursor-pointer justify-center items-center w-full capitalize bg-[#161619] text-white text-sm text-center h-[60px]">Add to basket</a>
                </div>

            </div>
        </div>
    </>
  )
}

export default ProductInfoCliendSideRendering