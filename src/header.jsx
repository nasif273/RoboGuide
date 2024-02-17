import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo1 from "./logo1.jpg";
import searchicon from "./search_icon.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search functionality here
    console.log("Search Query:", searchQuery);
    setSearchQuery(""); // Reset search input after submission if needed
  };

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo1} alt="" />
      </Link>
      <form onSubmit={handleSearchSubmit} className="header__search">
        <input
          type="text"
          className="header__searchInput"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search"
        />
        <button type="submit" className="header__searchButton">
          <img
            src={searchicon}
            alt="Search Icon"
            className="header__searchIcon"
          />
        </button>
      </form>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/signup" className="header__link">
          <div className="header__option">
            <span className="header__optionLineTwo">Sign Up</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
