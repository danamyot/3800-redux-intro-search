import { connect } from "react-redux";
import React, { Component } from "react";
import data from "./data.js";
class UnconnectedSearchResults extends Component {
  render = () => {
    const results = data.filter(item => {
      const matchingItem = item.name.includes(this.props.query);
      const priceInRange =
        item.price >= this.props.minPrice && item.price <= this.props.maxPrice;
      return matchingItem && priceInRange;
    });
    return (
      <div>
        {results.map(r => {
          if (this.props.inStockChecked) {
            return r.inStock ? <div>{r.name}</div> : null;
          }
          return <div>{r.name}</div>;
        })}
      </div>
    );
  };
}
const mapStateToProps = st => {
  return {
    query: st.searchQuery,
    minPrice: st.min,
    maxPrice: st.max,
    inStockChecked: st.inStockChecked
  };
};
const SearchResults = connect(mapStateToProps)(UnconnectedSearchResults);
export default SearchResults;
