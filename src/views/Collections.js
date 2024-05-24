import React, { useContext } from "react";
import "./Collections.css";
import { CollectionCard, AddNewCard, Sidebar } from "../components";
import { CollectionContext } from "../context/CollectionContext";

const Collections = () => {
  const { collectionData } = useContext(CollectionContext);

  return (
    <div className="collection">
      <Sidebar />
      <main className="main-content">
        <h2>My Collections</h2>
        <p>
          Introducing collections: the ability to organize your materials, your
          way.
        </p>
        <div className="result-text">{`Showing ${collectionData.length} Results`}</div>
        <hr className="solid"></hr>
        <div className="collection-grid">
          {collectionData.map((collection, index) => (
            <CollectionCard
              key={index}
              title={collection.title}
              description={collection.description}
              id={collection.id}
            />
          ))}
          <AddNewCard />
        </div>
      </main>
    </div>
  );
};

export default Collections;
