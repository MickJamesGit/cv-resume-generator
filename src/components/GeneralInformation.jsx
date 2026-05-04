import { useState } from "react";
import "../styles/ResumeForms.css"

function GeneralInformation({ onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = () => {
    const data = {
      name,
      email,
      phone,
    };

    onSave?.(data);
  };

  return (
    <section id="center">
        <h1>General Information</h1>

        <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>

        <div className="field">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div className="field">
        <label htmlFor="phone">Phone Number:</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button
        type="button"
        className="save"
        onClick={handleSave}
      >
        Save
      </button>
    </section>
  );
}

export default GeneralInformation;