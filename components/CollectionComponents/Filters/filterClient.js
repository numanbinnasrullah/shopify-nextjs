"use client"

import { useEffect, useState } from "react";
import GridItems from "../GridItems/GridItems";
import { useRouter } from "next/navigation";
import { getSelectedFilters } from "./filteractions";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


const FilterClient = ({ collection, getSelected }) => {
  collection?.products?.filters?.filter(filter => filter.label.includes('Price')).map((filter, index) => (
    filter.values.map((value, index) => {
      console.log("Filter Price is here", value.input)
    })
  )
  )

  //   const priceFilter = collection?.products?.filters?.find(filter => filter.label.includes('Price'));
  // let minPrice = 0;
  // let maxPrice = 0;

  // if (priceFilter && priceFilter.values.length > 0) {
  //     const priceData = JSON.parse(priceFilter.values[0].input);
  //     minPrice = priceData.price.min;
  //     maxPrice = priceData.price.max;
  //     console.log("minPrice", minPrice)
  //     console.log("maxPrice", maxPrice)
  // }
  // console.log("collection filter Price", collection?.products)
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  //   if (selectedSizes.length > 0 || selectedColors.length > 0) {
  //     collectionPageQuery(slug, selectedSizes, selectedColors);
  //  }

  const [sizesOpen, setSizesOpen] = useState(true);
  const [colorsOpen, setColorsOpen] = useState(false);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedRange, setSelectedRange] = useState([0, 0]);
  // console.log("selected range", selectedRange)

  const router = useRouter();

  const toggleSizes = () => {
    setSizesOpen((prevSizesOpen) => !prevSizesOpen);
  };

  const toggleColors = () => {
    setColorsOpen((prevColorsOpen) => !prevColorsOpen);
  };


  const handleSizeChange = (size) => {
    setSelectedSizes((prevSelectedSizes) => {
      const newSelectedSizes = prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((selectedSize) => selectedSize !== size)
        : [...prevSelectedSizes, size];
  
      updateUrl({ size: newSelectedSizes, color: selectedColors });
      return newSelectedSizes;
    });
  };
  
  const handleColorChange = (color) => {
    setSelectedColors((prevSelectedColors) => {
      const newSelectedColors = prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((selectedColor) => selectedColor !== color)
        : [...prevSelectedColors, color];
  
      updateUrl({ size: selectedSizes, color: newSelectedColors });
      return newSelectedColors;
    });
  };



  const updateUrl = ({ size, color }) => {
    const params = new URLSearchParams(window.location.search);

    // Clear existing size and color parameters
    params.delete("filter.size");
    params.delete("filter.color");

    // Add new size parameters
    size.forEach((size) => {
      params.append("filter.size", size);
    });

    // Add new color parameters
    color.forEach((color) => {
      params.append("filter.color", color);
    });
    

    // Construct the new URL
    const url = `${collection.handle}/?${params.toString().replace(/\+/g, "")}`;

    // Push the updated URL
    router.push(url, undefined, { shallow: true });
  };

useEffect(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Get selected sizes and colors from URL parameters
  const sizesFromUrl = urlParams.getAll('filter.size').map(size => size.replace('x', ' x '));
  const colorsFromUrl = urlParams.getAll('filter.color');
  
  console.log("sizesFromUrl", sizesFromUrl);

  // Update selectedSizes and selectedColors states with values from URL
  setSelectedSizes(sizesFromUrl);
  setSelectedColors(colorsFromUrl);

}, []);
  

  // useEffect(() => {
  //   // Extract selected filters from URL query parameters
  //   const params = new URLSearchParams(window.location.search);
  //   const sizesFromUrl = params.getAll("filter.size");
  //   const colorsFromUrl = params.getAll("filter.color");
  //   console.log("paramsssss", params)
  //   if(params.size > 0){
  //     console.log("paramsssss 111", params)

  //   }
  // console.log("Page Reload UseEfect")
  // },[]);

  // useEffect(() => {
  //   const savedSizes = JSON.parse(localStorage.getItem('selectedSizes')) || [];
  //   const savedColors = JSON.parse(localStorage.getItem('selectedColors')) || [];

  //   setSelectedSizes(savedSizes);
  //   setSelectedColors(savedColors);

  // }, []);

  useEffect(() => {
    const fetchData = () => {
      if (selectedSizes.length > 0 || selectedColors.length > 0) {
        const filters = [];

        // Construct filter options for sizes
        selectedSizes.forEach(size => {
          filters.push({ variantOption: { name: "Size", value: size } });
        });

        // Construct filter options for colors
        selectedColors.forEach(color => {
          filters.push({ variantOption: { name: "Color", value: color } });
        });

        return Promise.resolve(getSelectedFilters(JSON.stringify(filters)))
          .then(ab => {
            console.log("ab", ab);
            // Do something with the resolved value 'ab'
          })
          .catch(error => {
            // Handle any errors
            console.error("Error:", error);
          });
        // const params = new URLSearchParams();
        // selectedSizes.forEach((size) => params.append("size", size));
        // selectedColors.forEach((color) => params.append("color", color));
        // router.push({ pathname: router.pathname, query: params.toString() });
        // const res = await collectionPageQuery(slug, filters);
        // console.log("Filters Res", res)

      } else {
        const filters = [];
        console.log(" Else Filters", filters);
        return Promise.resolve(getSelectedFilters(JSON.stringify(filters)))
          .then(() => {
            // Do something when the promise is resolved
          })
          .catch(error => {
            // Handle any errors
            console.error("Error:", error);
          });
      }
    };

    fetchData();
  }, [selectedSizes, selectedColors, getSelected]);

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  useEffect(() => {
    const priceFilter = collection?.products?.filters?.find((filter) =>
      filter.label.includes("Price")
    );

    if (priceFilter && priceFilter.values.length > 0) {
      const priceData = JSON.parse(priceFilter.values[0].input);
      setMinPrice(priceData.price.min);
      setMaxPrice(priceData.price.max);
      setSelectedRange([priceData.price.min, priceData.price.max]);
    }
  }, [collection]);

  return (
    <>
      <div class="filter-box-content block w-full h-full">

        <div class="variant-box block w-full py-5">
          <div class="variant-box-content block w-full">
            <div class="heading-box block w-full mb-[40px]">
              {/* <h2 class="text-xl text-[#161619] font-medium">Color</h2> */}
            </div>
            <div class="variants block w-full">
              <div className="border-b border-gray-200">
                {collection?.products?.filters?.filter(filter => filter.label.includes('Size'))
                  .map((filter, index) => (
                    <div key={index} className="py-4 border-b border-gray-200">
                      <button
                        className="flex justify-between items-center w-full text-lg font-medium focus:outline-none"
                        onClick={toggleSizes}
                      >
                        <span>{filter.label}</span>
                        <svg
                          className={`h-6 w-6 transition-transform ${sizesOpen ? 'transform rotate-180' : ''}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.293 12.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-3.5-3.5a1 1 0 010-1.414l3.5-3.5a1 1 0 011.414 1.414l-4 4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {sizesOpen && (
                        <div className="mt-2">
                          {filter.values.map((value, index) => (
                            <label key={index} className="block mb-2">
                              <input
                                type="checkbox"
                                className="form-checkbox text-blue-500 cursor-pointer"
                                checked={selectedSizes.includes(value.label)}
                                onChange={() => handleSizeChange(value.label)}
                              />
                              <span className="ml-2 cursor-pointer">{value.label}</span>
                             
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>




              <div className="border-b border-gray-200">
                {collection?.products?.filters
                  .filter(filter => filter.label.includes('Color'))
                  .map((filter, index) => (
                    <div key={index} className="py-4 border-b border-gray-200">
                      <button
                        className="flex justify-between items-center w-full text-lg font-medium focus:outline-none"
                        onClick={toggleColors}
                      >
                        <span>{filter.label}</span>
                        <svg
                          className={`h-6 w-6 transition-transform ${colorsOpen ? 'transform rotate-180' : ''}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.293 12.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-3.5-3.5a1 1 0 010-1.414l3.5-3.5a1 1 0 011.414 1.414l-4 4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {colorsOpen && (
                        <div className="mt-2">
                          {filter.values.map((value, index) => (
                            <label key={index} className="block mb-2">
                              <input
                                type="checkbox"
                                className="form-checkbox text-blue-500 cursor-pointer"
                                checked={selectedColors.includes(value.label)}
                                onChange={() => handleColorChange(value.label)}
                              />
                              <span className="ml-2 cursor-pointer">{value.label}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>









            </div>
          </div>
        </div>

        <div className="price py-5 ">
          <div className="price-content ">
            <div className="heading-box block w-full mb-[18px] ">
              <h2 className="text-xl text-[#161619] font-medium ">PRICE</h2>
            </div>

            <div className="range block w-full ">
              <div className="range-content block w-full ">
                <div className="box block w-full ">
                  <div className="box-content block w-full ">
                    <div className="price-slider ">
                      <Slider
                        min={minPrice}
                        max={maxPrice}
                        value={selectedRange}
                        onChange={handleRangeChange}
                        range

                      />
                      <div className="price-values ">
                        <span>Price: £{selectedRange[0]}</span>
                        <span>-</span>
                        <span>£{selectedRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="btns block w-full py-5">
          <div class="btns-wrapper-content grid gap-5">
            <a href="#" class="w-full h-[60px] cursor-pointer bg-[#161619] border border-[#161619] text-[#FFF] flex justify-center items-center">Filter</a>
            <a href="#" class="w-full h-[60px] cursor-pointer bg-[#FFF] border border-[#161619] text-[#161619] flex justify-center items-center">RESET FILTER</a>
          </div>
        </div>


      </div>
    </>
  )
}

export default FilterClient;