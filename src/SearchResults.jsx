import { connect } from "react-redux";
import React, { Component } from "react";
import data from "./data.js";
class UnconnectedSearchResults extends Component {
  render = () => {
    const results = data.filter(item => {
      return (
        item.name.includes(this.props.query) &&
        item.price >= this.props.minPrice &&
        item.price <= this.props.maxPrice &&
        (this.props.inStockChecked ? item.inStock : true)
      );
    });
    return (
      <div>
        {results.map(r => {
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
