import React from "react";

const Modal = ({ answer }) => {
    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="text-lg font-bold mr-6">{answer}</h3>
                </div>
            </div>
        </>
    );
};

export default Modal;
