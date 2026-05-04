import { FiMail, FiPhone } from "react-icons/fi";

function ResumePreview({ generalInfo, educationExperience, jobExperience }) {
  return (
    <>
    <h2 className="resumeTitle">Preview</h2>

    {generalInfo && (
      <header className="resumeHeader">
        <h1 className="name">{generalInfo.name}</h1>

        <div className="contact">
          <p>
            <FiMail className="icon" />
            {generalInfo.email}
          </p>

          <p>
            <FiPhone className="icon" />
            {generalInfo.phone}
          </p>
        </div>
      </header>
    )}

    {educationExperience && (
      <section className="resumeSection">
        <h3>Education</h3>

        <p className="bold">{educationExperience.school}</p>
        <p>{educationExperience.degree}</p>
        <p className="muted">
          {educationExperience.startDate} - {educationExperience.endDate}
        </p>
      </section>
    )}

    {jobExperience && (
      <section className="resumeSection">
        <h3>Experience</h3>

        <p className="bold">{jobExperience.company}</p>
        <p>{jobExperience.position}</p>
        <p className="muted">
          {jobExperience.startDate} - {jobExperience.endDate}
        </p>

        <p className="responsibilities">
          {jobExperience.responsibilities}
        </p>
      </section>
      
    )}
    </>
  );
}

export default ResumePreview;