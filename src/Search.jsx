import { connect } from "react-redux";
import React, { Component } from "react";
class UnconnectedSearch extends Component {
  handleQuery = evt => {
    this.props.dispatch({ type: "query", q: evt.target.value });
  };
  handleMinimumPrice = evt => {
    const price = parseInt(evt.target.value) || 0;
    this.props.dispatch({ type: "minimum-price", price: price });
  };
  handleMaximumPrice = evt => {
    const price = parseInt(evt.target.value) || 0;
    this.props.dispatch({ type: "maximum-price", price: price });
  };
  handleInStock = () => {
    this.props.dispatch({
      type: "in-stock",
      checked: !this.props.inStockChecked
    });
  };
  render = () => {
    return (
      <div>
        <div>
          Search query
          <input
            type="text"
            onChange={this.handleQuery}
            value={this.props.query}
          />
        </div>
        <div>
          Minimum price
          <input
            type="text"
            onChange={this.handleMinimumPrice}
            value={this.props.minPrice}
          />
        </div>
        <div>
          Maximum price
          <input
            type="text"
            onChange={this.handleMaximumPrice}
            value={this.props.maxPrice}
          />
        </div>
        <div>
          Only show in-stock
          <input
            type="checkbox"
            onChange={this.handleInStock}
            checked={this.props.inStockChecked}
          />
        </div>
      </div>
    );
  };
}
let mapStateToProps = st => {
  return {
    query: st.searchQuery,
    minPrice: st.min,
    maxPrice: st.max,
    inStockChecked: st.inStockChecked
  };
};
let Search = connect(mapStateToProps)(UnconnectedSearch);
export default Search;
