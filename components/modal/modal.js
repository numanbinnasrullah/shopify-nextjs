

const Modal = ({ isOpen, onClose }) => {
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
            <p>This is a modal</p>
            <p>This is a modal</p>
            <p>This is a modal</p>
            <p>This is a modal</p>
            <p>This is a modal</p>
            <p>This is a modal</p>
            <p>This is a modal</p>
            <button  onClick={onClose}>Close</button>
          </div>
        </div>
      )}
      {/* Background overlay */}
      {isOpen && <div className="overlay"></div>}
    </>
  )
}

export default Modal