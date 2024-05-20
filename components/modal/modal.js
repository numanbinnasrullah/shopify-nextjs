"use client"
import Link from "next/link";
import { useEffect, useState } from "react";


const Modal = ({ isOpen, onClose, product, selectedImageId, selectedPrice, selectedSize }) => {
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
            
            <div className="text-center bg-slate-200 p-3">Added to your cart</div>
            <div className="flex mt-5 justify-start space-x-8">
              <span>{selectImage &&  <img src={selectImage} width={100} /> }</span>
              <div className="flex flex-col space-y-1">
              <div>{product?.title}</div>
              <div>{selectedPrice}</div>
              <div>{selectedSize}</div>
              </div>
            </div>
            <div class="btn-wrapper  w-full mt-5 flex space-x-8">
            <Link href="/cart"  className="flex justify-center items-center w-[46%] capitalize bg-[#161619] text-white text-sm text-center h-[40px]">View Cart</Link>

                    <Link href="/cart"  className="flex justify-center items-center w-[46%] capitalize bg-[#161619] text-white text-sm text-center h-[40px]">Checkout</Link>
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