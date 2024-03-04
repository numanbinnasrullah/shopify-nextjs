'use client'

import { useState } from "react";

const ProductDescription = ({product}) => {
    const [activeTab, setActiveTab] = useState(0);

    const showTab = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  return (
//     <div class="description block w-full px-[18px] md:px-10 mb-[60px]">
//     <div class="block w-full max-w-[1400px] mx-auto">
//         <div class="block w-full">
//             <div class="description-content flex flex-col lg:flex-row lg:items-center w-full">
//                 <div class="description-headings block w-full mb-8 lg:mb-0 lg:max-w-[240px]">
//                     <h3 class="tab-title block w-full max-w-fit border-b border-[#161619] lg:border-none uppercase text-base text-[#161619] mb-6 lg:mb-8 lg:before:w-5 lg:before:h-[2px] lg:before:bg-black lg:before:-left-7 lg:before:top-1/2 lg:before:-translate-y-1/2 relative lg:before:absolute lg:before:z-10 lg:capitalize lg:mx-auto lg:text-center ">Description</h3>
//                     <span class="block w-full max-w-fit text-[#838889] font-medium lg:max-w-full lg:text-center lg:text-lg"> Product Specification </span>
//                 </div>
//                 <div class="detail block w-full text-[#838889] text-base lg:border-l lg:border-[#e3e7e8] lg:pl-20">
//                     <p>
//                         {product?.description}
//                     </p>
//                 </div>
                
//             </div>
//         </div>
//     </div>
// </div>


<div className="tabs-container">
      <div className="tabs">
        <ul>
          <li onClick={() => showTab(0)} className={activeTab === 0 ? "active" : ""}>Description</li>
          <li onClick={() => showTab(1)} className={activeTab === 1 ? "active" : ""}>Product Specification</li>
        </ul>
      </div>
      <div className="content">
        <div className={`tab-content ${activeTab === 0 ? "active" : ""}`} id="tab1">
          {product?.description}
        </div>
        <div className={`tab-content ${activeTab === 1 ? "active" : ""}`} id="tab2">
          <table>
          {product?.description}
            {/* <tbody>
              {product.metafields.custom.custom_specs.value.map((field, index) => (
                <tr key={index}>
                  <th className="table-th">{field[0]}</th>
                  <td>{field[1]}</td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription