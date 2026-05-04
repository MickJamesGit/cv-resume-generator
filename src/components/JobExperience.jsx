import { useState } from "react";
import "../styles/ResumeForms.css"

function JobExperience({ onSave }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = () => {
    const data = {
      company,
      position,
      responsibilities,
      startDate,
      endDate,
    };

    onSave?.(data);
  };

  return (
    <section>
      <h1>Experience</h1>

      <div className="field">
      <label htmlFor="company">Company:</label>
      <input
        id="company"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      </div>

      <div className="field">
      <label htmlFor="position">Position:</label>
      <input
        id="position"
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      </div>

      <div className="field">
      <label htmlFor="responsibilities">Responsibilities:</label>
      <textarea
        id="responsibilities"
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
      />
      </div>

      <div className="field">
      <label htmlFor="startDate">Start Date:</label>
      <input
        id="startDate"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      </div>

      <div className="field">
      <label htmlFor="endDate">End Date:</label>
      <input
        id="endDate"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      </div>

      <button type="button" className="save" onClick={handleSave}>
        Save
      </button>
    </section>
  );
}

export default JobExperience;