import { connect } from "react-redux";

import CollectionItem from "./collection-item.component";

import { addItem } from "../../redux/cart/cart.actions.js";

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const CollectionItemContainer = connect(
  null,
  mapDispatchToProps
)(CollectionItem);

export default CollectionItemContainer;
