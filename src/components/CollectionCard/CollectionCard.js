import React, { useContext, useState } from "react";
import downloadIcom from "../../Icons/cloud_download.svg";
import deleteIcon from "../../Icons/delete.svg";
import { CollectionContext } from "../../context/CollectionContext";
import DeleteCollection from "./DeleteCollection";
import "./CollectionCard.css";

const CollectionCard = ({ title, description, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { collectionData, updateCollectionData } =
    useContext(CollectionContext);

  const onClickDeleteIcon = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDeleteCard = () => {
    const updatedData = collectionData.filter((item) => item.id !== id);
    updateCollectionData(updatedData);
    setIsOpen(false);
  };

  return (
    <div className="collection-card">
      <div className="collection-card-header">
        <button className="download-button">
          Download data
          <img src={downloadIcom} alt="cloud" className="cloud-logo" />
        </button>
        <img
          src={deleteIcon}
          alt="delete"
          className="cloud-logo"
          onClick={onClickDeleteIcon}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {isOpen && (
        <DeleteCollection
          handleClose={handleClose}
          handleDeleteCard={handleDeleteCard}
        />
      )}
    </div>
  );
};

export default CollectionCard;
