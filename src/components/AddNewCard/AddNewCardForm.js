import React, { useState, useContext } from "react";
import { CollectionContext } from "../../context/CollectionContext";
import "./AddNewCardForm.css";

const AddNewCardForm = () => {
  const maxChars = 40;
  const descMaxChar = 140;
  const [nameCharsLeft, setNameCharsLeft] = useState(maxChars);
  const [descriptionCharsLeft, setDescriptionCharsLeft] = useState(descMaxChar);
  const { collectionData, updateCollectionData, isFormOpen, setIsFormOpen } =
    useContext(CollectionContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleClose = () => {
    setFormData({ title: "", description: "" });
    setIsFormOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const upatedId = collectionData.length + 1;
    formData.id = upatedId;
    const newCollectionData = [...collectionData, formData];
    updateCollectionData(newCollectionData);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (formData.title.length <= maxChars) {
      setNameCharsLeft(maxChars - formData.title.length);
    }
    if (formData.description.length <= descMaxChar) {
      setDescriptionCharsLeft(descMaxChar - formData.description.length);
    }
  };

  return (
    <div className="AddNewCardForm">
      {isFormOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h3 className="lable-container">New Collection</h3>
              <div className="form-group">
                <label className="able-name" htmlFor="name">
                  Collection Name:{" "}
                  <span style={{ color: "red" }} className="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  required
                  id="title"
                  name="title"
                  maxLength={41}
                  placeholder="Collection Title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <div className="char-count">{nameCharsLeft}/40</div>
              </div>
              <div className="form-group">
                <label htmlFor="description">
                  Description:
                  <span style={{ color: "red" }} className="required">
                    *
                  </span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  rows="6"
                  maxLength={141}
                  onChange={handleChange}
                />
                <div className="char-count">{descriptionCharsLeft}/140</div>
              </div>
              <div className="form-actions">
                <button
                  className="cancle-lable"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button className="submit-lable" type="submit">
                  Create Collection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewCardForm;
