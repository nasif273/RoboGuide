import React, { useState } from "react";
import axios from 'axios'; // Make sure to install axios
import "./projectSuggestion.css";

function ProjectSuggestion() {
  const [budget, setBudget] = useState("");
  const [projectName, setProjectName] = useState("");
  const [components, setComponents] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:5000/api/components', {
        params: { projectName, budget }
      });
      setComponents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="projectSuggestion">
      <h2>Project Component Suggestion Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter project name"
            required
          />
        </div>
        <div>
          <label htmlFor="budget">Budget (BDT):</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter your budget"
            required
          />
        </div>
        <button type="submit">Get Suggestions</button>
      </form>
      <div>
        <h3>Component Suggestions:</h3>
        <ul>
          {components.map((component, index) => (
            <li key={index}>{`${component.component} - ${component.cost} BDT`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectSuggestion;
