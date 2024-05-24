import React, { createContext, useState } from "react";
import { collectionDummyData } from "../utility";

const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
  const [collectionData, setCollectionData] = useState(collectionDummyData);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const updateCollectionData = (newData) => {
    setCollectionData(newData);
  };

  return (
    <CollectionContext.Provider
      value={{
        collectionData,
        updateCollectionData,
        isFormOpen,
        setIsFormOpen,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export { CollectionContext, CollectionProvider };
