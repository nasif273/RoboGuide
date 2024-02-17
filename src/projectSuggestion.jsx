import React, { useState } from "react";
import "./projectSuggestion.css";

function ProjectSuggestion() {
  const [priceRange, setPriceRange] = useState("");
  const [preference, setPreference] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log("Price Range:", priceRange);
    console.log("Preference:", preference);
    // Reset form fields after submission
    setPriceRange("");
    setPreference("");
  };

  return (
    <div className="projectSuggestion">
      <h2>Project Suggestion Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="priceRange">Price Range:</label>
          <input
            type="text"
            id="priceRange"
            className="form__input"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            placeholder="Enter price range"
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="preference">Preference:</label>
          <input
            type="text"
            id="preference"
            className="form__input"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            placeholder="Enter preference"
            required
          />
        </div>
        <button type="submit" className="submit__button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProjectSuggestion;
