"use client"
import { useEffect, useState } from "react";


const Modal = ({ isOpen, onClose, product, selectedImageId }) => {
  const [selectImage, setSelectImage] = useState(null);
  useEffect(() => {
    const filteredImage = product?.images?.edges.find(item => item?.node?.id === selectedImageId);
    if (filteredImage) {
        setSelectImage(filteredImage?.node?.originalSrc);
        // Automatically scroll to the selected thumbnail image
    }
}, [selectedImageId]);

    if (!isOpen) {
        return null;
      }


  return (
    <>
        {isOpen && (
        <div className="modal-container modal-overlay" onClick={onClose}>
          <div className="modal">
            {/* Modal content */}
            <h2>Modal Title</h2>
            <div className="flex mt-5 justify-around ">
              <span>{selectImage &&  <img src={selectImage} width={100} /> }</span>
              <span>{product?.title}</span>
            </div>
            <div class="btn-wrapper  w-full mt-5 flex justify-around">
                    <button  className="flex justify-center items-center w-[45%] capitalize bg-[#161619] text-white text-sm text-center h-[40px]">View Cart</button>

                    <button  className="flex justify-center items-center w-[45%] capitalize bg-[#161619] text-white text-sm text-center h-[40px]">Checkout</button>
                </div>
            
            {/* <button  onClick={onClose}>Close</button> */}
          </div>
        </div>
      )}
      {/* Background overlay */}
      {isOpen && <div className="overlay"></div>}
    </>
  )
}

export default Modal