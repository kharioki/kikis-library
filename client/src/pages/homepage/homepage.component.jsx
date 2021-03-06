import React from "react";

import "./homepage.styles.scss";

import LIBRARY_DATA from "../../utils/library-data";

import Collection from "../../components/collection/collection.component";

const HomePage = () => (
  <div className="homepage">
    <Collection collection={LIBRARY_DATA} />
  </div>
);

export default HomePage;
