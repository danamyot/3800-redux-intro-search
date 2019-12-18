import { connect } from "react-redux";
import React, { Component } from "react";
import data from "./data.js";
class UnconnectedSearchResults extends Component {
  render = () => {
    let results = data.filter(item => {
      const matchingItem = item.name.includes(this.props.query);
      const priceInRange =
        item.price >= this.props.minPrice && item.price <= this.props.maxPrice;
      return matchingItem && priceInRange;
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
let mapStateToProps = st => {
  return {
    query: st.searchQuery,
    minPrice: st.min,
    maxPrice: st.max
  };
};
let SearchResults = connect(mapStateToProps)(UnconnectedSearchResults);
export default SearchResults;
