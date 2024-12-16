import React from "react";

function SearchBox() {
  return (
    <div className="hero-search-container">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" />
      </div>
    </div>
  );
}

export default SearchBox;
