import React from "react";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Basket
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
