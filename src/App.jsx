import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation"
import EducationExperience from "./components/EducationExperience"
import JobExperience from "./components/JobExperience";
import ResumePreview from "./components/ResumePreview";
import "./App.css"

function App() {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [educationExperience, setEducationExperience] = useState(null);
  const [jobExperience, setJobExperience] = useState(null);
  
  const handleSaveGeneralInfo = (data) => {
    console.log("Received from child:", data);
    setGeneralInfo(data);
  };

  const handleSaveEducationExperience = (data) => {
    console.log("Received from child:", data);
    setEducationExperience (data);
  };

  const handleSaveJobExperience = (data) => {
    console.log("Received from child:", data);
    setJobExperience (data);
  };

  return (
    <div className="page">
    <GeneralInformation onSave={handleSaveGeneralInfo} />
    <EducationExperience onSave={handleSaveEducationExperience} />
    <JobExperience onSave={handleSaveJobExperience} />
    <ResumePreview generalInfo={generalInfo} educationExperience={educationExperience} jobExperience={jobExperience}/>
    </div>
  );
}

export default App;
