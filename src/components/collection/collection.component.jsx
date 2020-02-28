import React from "react";

import "./collection.styles.scss";
import CollectionItemContainer from "../collection-item/collection-item.container";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.map(item => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
