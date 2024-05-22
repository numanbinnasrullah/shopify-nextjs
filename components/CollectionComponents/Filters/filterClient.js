"use client"

import { useEffect, useState } from "react";
import GridItems from "../GridItems/GridItems";
import { getSelectedFilter, getSelectedFilters } from "./filteractions";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { usePathname } from 'next/navigation'
import { useFilterRequestMutation } from "@/store/services/filterService";


const FilterClient = ({ collection, getSelected, initialcheck, slug, variantOptions }) => {
 
  const [sendFilterdata, retrieveFilterResponse] =  useFilterRequestMutation();
 
  console.log("Collection Page console",slug, collection?.products?.filters)
  // console.log("retrieveFilterResponse", retrieveFilterResponse)
  // collection?.products?.filters?.filter(filter => filter.label.includes('Price')).map((filter, index) => (
  //   filter.values.map((value, index) => {
  //     // console.log("Filter Price is here", value.input)
  //   })
  // )
  // )
  const priceFilter = collection?.products?.filters?.find((filter) =>
  filter.label.includes("Price")
  );
  console.log("priceFilter", priceFilter?.values[0].input)
  let priceData;
  if(priceFilter?.values[0].input){
    priceData = JSON.parse(priceFilter?.values[0].input);
  }
  
  const maxiumun_Value = priceData?.price?.max
  const minimum_value = priceData?.price?.min
  // const maxi = 50
  // const mini = 10
  // console.log("maxxx",mini,maxi)
  // console.log("initiakcheck", initialcheck)
  if(initialcheck){
    if (typeof window !== 'undefined') {
      localStorage.setItem('maximumValue', JSON.stringify(maxiumun_Value));
      localStorage.setItem('minimumValue', JSON.stringify(minimum_value));
    }
  }

  
  // console.log("mlppoolm",typeof(priceData?.price?.max))
  

  const storedMaximumValue = JSON.parse(localStorage.getItem('maximumValue'));
  const storedMinimumValue = JSON.parse(localStorage.getItem('minimumValue'));

// Now you can use storedMaximumValue and storedMinimumValue as needed
// console.log("Stored Maximum Value:", storedMaximumValue);
// console.log("Stored Minimum Value:", storedMinimumValue);

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

  const [minPrice, setMinPrice] = useState(storedMinimumValue);
  const [maxPrice, setMaxPrice] = useState(storedMaximumValue);
  const [afterminPrice, setafterminPrice] = useState(storedMinimumValue);
  const [aftermaxPrice, setaftermaxPrice] = useState(storedMaximumValue);
  // console.log("max Priceeeeeeeee", maxPrice)
  const [selectedRange, setSelectedRange] = useState([minPrice, maxPrice]);
  const [checkrange , setCheckRange] = useState(false) // Initialize with 0 to 100 range
  const [timer, setTimer] = useState(null);
  const [result, setResult] = useState([]);

  // console.log("Use Effect chlaa mnmnm", selectedRange)
  // console.log("minPrice", minPrice)
  // console.log("maxPrice", maxPrice)
  // console.log("selectedRange", selectedRange)


  const toggleSizes = () => {
    setSizesOpen((prevSizesOpen) => !prevSizesOpen);
  };

  const toggleColors = () => {
    setColorsOpen((prevColorsOpen) => !prevColorsOpen);
  };


  const handleSizeChange = (size) => {
    console.log("handle size", size)
    setSelectedSizes((prevSelectedSizes) => {
      const newSelectedSizes = prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((selectedSize) => selectedSize !== size)
        : [...prevSelectedSizes, size];
        updateUrl({ size: newSelectedSizes, color: selectedColors });
        // sendFilterdata(filtersdata)
        window.location.reload(); 
      return newSelectedSizes;
    });
  }
  
  const handleColorChange = (color) => {
    setSelectedColors((prevSelectedColors) => {
      const newSelectedColors = prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((selectedColor) => selectedColor !== color)
        : [...prevSelectedColors, color];
        updateUrl({ size: selectedSizes, color: newSelectedColors });
        window.location.reload(); 
      return newSelectedColors;
    });
  };



  const updateUrl = ({ size, color }) => {
    const params = new URLSearchParams(window.location.search);
  
    // Clear existing size and color parameters
    params.delete("filter.size");
    params.delete("filter.color");
    params.delete("nextPage");
    params.delete("previousPage");
    // Add new size parameters
    size.forEach((sizeItem) => {
      console.log("Sizes select ", sizeItem);
      // Check if size contains "x" or is a single word
      if (sizeItem.includes("x") || !/\s/.test(sizeItem)) {
        // If size contains "x" or is a single word, add it directly to params
        params.append("filter.size", sizeItem);
      } else {
        // If size is in the format of "Super King" or similar, add it with space
        const encodedSize = encodeURIComponent(size);
        params.append("filter.size", encodedSize);
      }
    });
  
    // Add new color parameters
    color.forEach((color) => {
      params.append("filter.color", color);
    });
    let convertToStr = params.toString()
    try {
      if (params && params instanceof URLSearchParams) {
        const decodedParams = decodeURIComponent(convertToStr);
        const newUrl = `?${decodedParams.replace(/\+/g, "")}`;
        console.log("new URL", newUrl);
      }
    } catch (error) {
      console.error("Error generating new URL:", error);
    }
    // const newUrl = `?${params.toString().replace(/\+/g, "")}`;
    console.log("new URL", newUrl)
    history.pushState(null, '', newUrl);
  };


useEffect(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Get selected sizes and colors from URL parameters
  const sizesFromUrl = urlParams.getAll('filter.size').map(size => {
    console.log("size get ker lea hy url sy", size)
    if ( size.includes('x')) {
      return  size.replace('x', ' x ')
    } else {
      return  decodeURIComponent(size.replace('%20', ' '))
    }
});
// var variantOptions = [];

//  if (sizesFromUrl.length > 0) {
//   let formattedResult = sizesFromUrl.map(size => ({
//     variantOption: {
//       name: 'Size',
//       value: size
//     }
//   }));
  // variantOptions.push(formattedResult);
//   console.log("sizesFromUrl cvcvcv", formattedResult);
  
//   formattedResult.map((item,i ) => {
//     console.log("11223344",item)
//     const filtersdata = {slug, item}
//     sendFilterdata(filtersdata)
//   })
// }
  const colorsFromUrl = urlParams.getAll('filter.color');
  

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

  // useEffect(() => {
  //   const fetchData = () => {
  //     if (selectedSizes.length > 0 || selectedColors.length > 0) {
  //       const filters = [];

  //       // Construct filter options for sizes
  //       selectedSizes.forEach(size => {
  //         filters.push({ variantOption: { name: "Size", value: size } });
  //       });

  //       // Construct filter options for colors
  //       selectedColors.forEach(color => {
  //         filters.push({ variantOption: { name: "Color", value: color } });
  //       });

  //       return Promise.resolve(getSelectedFilter(JSON.stringify(filters)))
  //         .then(ab => {
  //           console.log("ab", ab);
  //           // Do something with the resolved value 'ab'
  //         })
  //         .catch(error => {
  //           // Handle any errors
  //           console.error("Error:", error);
  //         });
  //       // const params = new URLSearchParams();
  //       // selectedSizes.forEach((size) => params.append("size", size));
  //       // selectedColors.forEach((color) => params.append("color", color));
  //       // router.push({ pathname: router.pathname, query: params.toString() });
  //       // const res = await collectionPageQuery(slug, filters);
  //       // console.log("Filters Res", res)

  //     } else {
  //       const filters = [];
  //       console.log(" Else Filters", filters);
  //       return Promise.resolve(getSelectedFilter(JSON.stringify(filters)))
  //         .then(() => {
  //           // Do something when the promise is resolved
  //         })
  //         .catch(error => {
  //           // Handle any errors
  //           console.error("Error:", error);
  //         });
  //     }
  //   };

  //   fetchData();
  // }, [selectedSizes, selectedColors, getSelected]);

  const updateURL = (range) => {
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        console.log("updateURL", params.get("lt-price"));
  
        params.delete("filter.gt-price");
        params.delete("filter.lt-price");
        params.append("filter.gt-price", range[0]);
        params.append("filter.lt-price", range[1]);
  
        const newUrl = `?${params.toString()}`;
        console.log("newUrl", newUrl);
  
        history.pushState(null, '', newUrl);
      } catch (error) {
        console.error("Error in updateURL function:", error);
      }
    } else {
      console.error("updateURL function is running in a non-browser environment");
    }
  };
  //  Function to update URL with debouncing
  //  const updateURL = (range) => {
  //   const params = new URLSearchParams(window.location.search);
  //   console.log("updateURL", params.get("lt-price"))
  //   params.delete("filter.gt-price");
  //   params.delete("filter.lt-price");
  //   params.append("filter.gt-price", range[0]);
  //   params.append("filter.lt-price", range[1]);
  //   const newUrl = `?${params.toString()}`;
  //   console.log("newUrl", newUrl)
  //   history.pushState(null, '', newUrl);
  // };

  // Function to handle range change
  const handleRangeChange = (range) => {
    console.log("handleRangeChange", range)
    setSelectedRange(range); 

    // Clear previous timer
    clearTimeout(timer);

    // Set a new timer to update URL after 500ms
    const newTimer = setTimeout(() => {
      updateURL(range);
      window.location.reload(); 
    }, 1500);

    // Save the timer for cleanup
    setTimer(newTimer);
    setCheckRange(true)
    
  };



  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   console.log("Params", params);
  //   const priceFilter = collection?.products?.filters?.find((filter) =>
  //     filter.label.includes("Price")
  //   );
  
  //   if (params.size === 0) {
  //     console.log("No products")
  //     // Agar parameters available nahi hain
  //     setMinPrice(minPrice); // Set initial min price
  //     setMaxPrice(maxPrice); // Set initial max price
  //     // setSelectedRange([minPrice, maxPrice]); // Set initial selected range
  //     setSelectedRange([minPrice, maxPrice]);
  //   } else {
  //     // Agar parameters available hain
  //     // if (priceFilter && priceFilter.values.length > 0) {
  //     //   const priceData = JSON.parse(priceFilter.values[0].input);
  //     //   console.log("Price data",priceData)
  //     //   setMinPrice(priceData.price.min);
  //     //   setMaxPrice(priceData.price.max);
  //     //   setSelectedRange([priceData.price.min, priceData.price.max]);
  //     // }
  //   }
  // }, []);


  useEffect(() => {
   
  const params = new URLSearchParams(window.location.search);
  // console.log("params",params);
    if(params.size > 0){
      const minPriceParam = Number(params.get("filter.gt-price"))
      const maxPriceParam = Number(params.get("filter.lt-price"))
      console.log("Use Effect chla 1", Number(minPriceParam))
      console.log("Use Effect chlaa", maxPriceParam)
      if(minPriceParam || maxPriceParam){
        setafterminPrice(Number(minPriceParam))
        setaftermaxPrice(Number(maxPriceParam))
  
        console.log("asdasdasdasd", typeof(aftermaxPrice))
  
        console.log("asdasdasdasdasdasd", afterminPrice)
        console.log("asdas", aftermaxPrice)
        // setMinPrice(minPriceParam);
        // setMaxPrice(maxPriceParam);
        setSelectedRange([minPriceParam, maxPriceParam]);
      }
    }

    if(params.has("filter.gt-price") || params.has("filter.lt-price")) {
      setCheckRange(true);
    }
  }, [afterminPrice, aftermaxPrice]);

  // const RemoveFilter = (receiveFilter) => {
  //   if (receiveFilter.includes('x')) {
  //     receiveFilter = receiveFilter.replace(/\s/g, '');
  //     console.log("removeFilter", receiveFilter)
  //   }
  //   const params = new URLSearchParams(window.location.search);
  
  //   // // Extract the filter value that was clicked
  //   const clickedFilter = receiveFilter;
  //   console.log("clickedFilter", clickedFilter)
  
  //   // // Determine the key to delete based on the filter type (size or color)
  //   const filterKey = clickedFilter.includes('x') ? 'filter.size' : 'filter.color';
  //   console.log("deleteFilter", filterKey)
  
  //   // // Get the current selected filter values from the URL parameters
  //   const currentFilters = params.getAll(filterKey);
  //   console.log("currentFilters", currentFilters)
  
  //   // // Remove the clicked filter value from the list of current filters
  //   const updatedFilters = currentFilters.filter(filter => filter !== clickedFilter);
  //   console.log(" updatedFilters", updatedFilters)
  //   // // Update the URL parameters with the updated filter values
  //   if (updatedFilters.length === 0) {
  //     // If there are no remaining filters, delete the entire key
  //     params.delete(filterKey);
  //   } else {
  //     // Otherwise, update the filter key with the remaining filter values
  //     params.set(filterKey, updatedFilters);
  //   }
  
  //   // // Construct the new URL with the updated filter values
  //   const filteredUrl = '?' + params.toString();
  
  //   // // Optionally, you can update the browser's history to reflect the new URL
  //   window.history.pushState({}, '', window.location.pathname + filteredUrl);
  //   window.location.reload(); // Reload the page
  // };

  const RemoveFilter = (receiveFilter, filterType) => {
      if (receiveFilter.includes('x')) {
      receiveFilter = receiveFilter.replace(/\s/g, '');
      console.log("removeFilter", receiveFilter)
    }
   
    const params = new URLSearchParams(window.location.search);
    console.log("filterType", params.get("nextPage"))
    
    // Determine the key to delete based on the filter type (size or color)
    const filterKey = 'filter.' + filterType; // Use the filterType parameter
  
    // Get the current selected filter values from the URL parameters
    const currentFilters = params.getAll(filterKey);
    console.log("currentFilters", filterKey )
    // Remove the clicked filter value from the list of current filters
    const updatedFilters = currentFilters.filter(filter => filter !== receiveFilter);
   
      params.delete("nextPage");
      params.delete("previousPage");
    
    // Construct the new URL parameters without the clicked filter value
    let newParams = '';
    if (updatedFilters.length > 0) {
      newParams = '?' + filterKey + '=' + updatedFilters.join('&' + filterKey + '=');
    }
  
    // Construct the final URL parameters by including all other filters
    const otherFilterKeys = Array.from(params.keys()).filter(key => key !== filterKey);
    const otherFilters = otherFilterKeys.map(key => key + '=' + params.getAll(key).join('&' + key + '=')).join('&');
  
    // Combine the new and other URL parameters
    if (newParams !== '') {
      newParams += '&' + otherFilters;
    } else {
      newParams = '?' + otherFilters;
    }
  
    // Optionally, you can update the browser's history to reflect the new URL
    window.history.pushState({}, '', window.location.pathname + newParams);
    window.location.reload(); // Reload the page
    
    // params.delete("nextPage");
    // params.delete("previousPage");
  };


  
  const RemovePriceFilter = (gtPrice, ltPrice) => {
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        console.log("filterType", ltPrice);
  
        // Remove the parameter from the URL parameters
        params.delete(gtPrice);
        params.delete(ltPrice);
  
        // Construct the new URL parameters
        const newParams = params.toString();
  
        // Optionally, you can update the browser's history to reflect the new URL
        window.history.pushState({}, '', window.location.pathname + '?' + newParams);
        window.location.reload();
      } catch (error) {
        console.error("Error in RemovePriceFilter function:", error);
      }
    } else {
      console.error("RemovePriceFilter function is running in a non-browser environment");
    }
  };
  
  
  
  // const handleFilters = () => {
  //   window.location.reload(); 
  // }

  return (
    <>
      <div class="filter-box-content block w-full h-full">
     
      
        <div class="variant-box block w-full py-5">
          <div class="variant-box-content block w-full">
            <div class="heading-box block w-full mb-[40px]">
              {/* <h2 class="text-xl text-[#161619] font-medium">Color</h2> */}
            </div>
            {selectedSizes && selectedSizes.map((item, index)=>{
              return <> 
              <div class="flex gap-2" key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" className="cursor-pointer"  onClick={()=>RemoveFilter(item , 'size')}>
                  <path d="M12 3A9 9 0 1 0 12 21A9 9 0 1 0 12 3Z" opacity=".3"></path><path d="M12,22C6.5,22,2,17.5,2,12C2,6.5,6.5,2,12,2c5.5,0,10,4.5,10,10C22,17.5,17.5,22,12,22z M12,4c-4.4,0-8,3.6-8,8s3.6,8,8,8 s8-3.6,8-8S16.4,4,12,4z"></path><path d="M11 6.3H13V17.6H11z" transform="rotate(-45.001 12 12)"></path><path d="M6.3 11H17.6V13H6.3z" transform="rotate(-45.001 12 12)"></path>
                  </svg> <span > {item} </span>
            </div>
              </> 
            })}

            {selectedColors && selectedColors.map((item, index)=>{
              return <> 
              <div class="flex gap-2" key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" className="cursor-pointer"  onClick={()=>RemoveFilter(item , 'color')}>
                  <path d="M12 3A9 9 0 1 0 12 21A9 9 0 1 0 12 3Z" opacity=".3"></path><path d="M12,22C6.5,22,2,17.5,2,12C2,6.5,6.5,2,12,2c5.5,0,10,4.5,10,10C22,17.5,17.5,22,12,22z M12,4c-4.4,0-8,3.6-8,8s3.6,8,8,8 s8-3.6,8-8S16.4,4,12,4z"></path><path d="M11 6.3H13V17.6H11z" transform="rotate(-45.001 12 12)"></path><path d="M6.3 11H17.6V13H6.3z" transform="rotate(-45.001 12 12)"></path>
                  </svg> <span > {item} </span>
            </div>
              </> 
            })}

            { checkrange && <>
            <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" className="cursor-pointer"  onClick={()=>RemovePriceFilter('filter.gt-price', 'filter.lt-price')}>
                <path d="M12 3A9 9 0 1 0 12 21A9 9 0 1 0 12 3Z" opacity=".3"></path><path d="M12,22C6.5,22,2,17.5,2,12C2,6.5,6.5,2,12,2c5.5,0,10,4.5,10,10C22,17.5,17.5,22,12,22z M12,4c-4.4,0-8,3.6-8,8s3.6,8,8,8 s8-3.6,8-8S16.4,4,12,4z"></path><path d="M11 6.3H13V17.6H11z" transform="rotate(-45.001 12 12)"></path><path d="M6.3 11H17.6V13H6.3z" transform="rotate(-45.001 12 12)"></path>
                </svg>
                  <span>Price: £{selectedRange[0]}</span>
                  <span>-</span>
                  <span>£{selectedRange[1]}</span>
              </div>
              </> 
            }
            
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
                        min={storedMinimumValue}
                        max={storedMaximumValue}
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
            <button href="#" class="w-full h-[60px] cursor-pointer bg-[#161619] border border-[#161619] text-[#FFF] flex justify-center items-center" >Filter</button>
            <button href="#" class="w-full h-[60px] cursor-pointer bg-[#FFF] border border-[#161619] text-[#161619] flex justify-center items-center" >RESET FILTER</button>
          </div>
        </div>


      </div>
    </>
  )
}

export default FilterClient;