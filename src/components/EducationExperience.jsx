import { useState } from "react";
import "../styles/ResumeForms.css"

function Education({ onSave }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = () => {
    const data = {
      school,
      degree,
      startDate,
      endDate,
    };

    onSave?.(data);
  };

  return (
    <section>
      <h1>Education</h1>

      <div className="field">
        <label htmlFor="school">School:</label>
        <input
          id="school"
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="degree">Degree:</label>
        <input
          id="degree"
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
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

      <button className="save" type="button" onClick={handleSave}>
        Save
      </button>
    </section>
  );
}

export default Education;