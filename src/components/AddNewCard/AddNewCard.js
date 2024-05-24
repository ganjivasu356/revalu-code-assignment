import React, { useContext } from "react";
import AddNewCardForm from "./AddNewCardForm";
import { CollectionContext } from "../../context/CollectionContext";
import "./AddNewCard.css";

const AddNewCard = () => {
  const { setIsFormOpen } = useContext(CollectionContext);
  return (
    <div className="add-new-card">
      <button onClick={() => setIsFormOpen(true)}>+ Add New Collection</button>
      <AddNewCardForm />
    </div>
  );
};

export default AddNewCard;
