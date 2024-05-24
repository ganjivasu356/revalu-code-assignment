import React, { useContext, useState } from "react";
import { CollectionContext } from "../../context/CollectionContext";
import arrowDown from "../../Icons/keyboard_arrow_down.svg";
import arrowForward from "../../Icons/arrow_forward.svg";
import folderIcon from "../../Icons/folder.svg";
import createFolder from "../../Icons/create_foldersvg.svg";
import "./Sidebar.css";

const Sidebar = () => {
  const { collectionData, setIsFormOpen } = useContext(CollectionContext);
  const [isExpandCollections, setExpandCollections] = useState(false);
  const handleExpand = () => {
    setExpandCollections(!isExpandCollections);
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-context">
        <div className="sidebar-title-container">
          <span className="sidebar-title">My Collections</span>
          <img
            src={isExpandCollections ? arrowDown : arrowForward}
            alt="arrow"
            className="sidebar-arrow-logo"
            onClick={handleExpand}
          />
        </div>
        {isExpandCollections && (
          <ul>
            {collectionData.map((collection, index) => (
              <li key={index}>
                <img
                  src={folderIcon}
                  alt="folder"
                  className="sidebar-arrow-logo"
                />
                {collection.title}
              </li>
            ))}
          </ul>
        )}
        <div
          className="sidebar-newcollections"
          onClick={() => setIsFormOpen(true)}
        >
          <img src={createFolder} alt="folder" className="sidebar-arrow-logo" />
          <span>New Collections</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
