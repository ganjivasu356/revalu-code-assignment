import React from "react";
import "./DeleteCollection.css";

const DeleteCollection = ({ handleClose, handleDeleteCard }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content-delete">
        <div className="heading-container">Delete Collection</div>
        <div className="text-container">
          {`Are you sure you would like to delete this collection? You won’t be able to undo this.`}
        </div>
        <div className="button-container">
          <button className="confirm-btn" onClick={handleDeleteCard}>
            Delete
          </button>
          <button className="cancel-btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCollection;
