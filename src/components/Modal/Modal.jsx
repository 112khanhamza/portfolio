import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal (
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Thanks for visiting my Website!</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <h3>I would love you to also checkout my LinkedIn</h3>
                    <p>Do you wish to check it out?</p>
                </div>
                <div className="lower-section">
                    <a onClick={closeModal} className="modal-btn btn-red">Close</a>
                    <a 
                        href="https://www.linkedin.com/in/hamza-a-khan/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="modal-btn btn-green"
                    >Yes
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    )
}

export default Modal;