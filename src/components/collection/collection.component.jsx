import React, { useState } from "react";

import "./collection.styles.scss";
import CollectionItemContainer from "../collection-item/collection-item.container";

const Collection = ({ collection: { items } }) => {
  const [bookType, setBookType] = useState("");

  const filteredBooks = items.filter(item => item.type === bookType);
  return (
    <div className="collection">
      <div className="options">
        <h2 className="option" onClick={() => setBookType("")}>
          All Books
        </h2>
        <h2 className="option" onClick={() => setBookType("regular")}>
          Regular
        </h2>
        <h2 className="option" onClick={() => setBookType("fiction")}>
          Fiction
        </h2>
        <h2 className="option" onClick={() => setBookType("novel")}>
          Novels
        </h2>
      </div>
      {/* <h1 className="title">{title}</h1> */}
      <div className="preview">
        {bookType === ""
          ? items.map(item => (
              <CollectionItemContainer key={item.id} item={item} />
            ))
          : filteredBooks.map(item => (
              <CollectionItemContainer key={item.id} item={item} />
            ))}
      </div>
    </div>
  );
};

export default Collection;
