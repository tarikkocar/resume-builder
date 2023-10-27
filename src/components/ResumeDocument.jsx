import "../styles/ResumeDocument.css";

export default function ResumeDocument({ userData }) {
  return (
    <div className="resume-document">
      <div className="header">
        <h2 className="name">{userData.fullName}</h2>
        <div className="contact-details">
          <div className="email">{userData.email}</div>
          <div className="phone">{userData.phone}</div>
          <div className="address">{userData.address}</div>
        </div>
      </div>
      <div className="section">
        <h3>Education</h3>
        <div className="education-entry">
          <div className="education-left">
            <div className="university">
              <b>{userData.university}</b>
            </div>
            <div className="program">{userData.department}</div>
          </div>
          <div className="education-right">
            <div className="education-dur">{userData.educationDuration}</div>
            <div className="education-loc">{userData.educationLocation}</div>
          </div>
        </div>
      </div>
      <div className="section">
        <h3>Experience</h3>
        <div className="experience-entry">
          <div className="experience-header">
            <div className="experience-left">
              <div className="company">
                <b>{userData.company}</b>
              </div>
              <div className="title">{userData.title}</div>
            </div>
            <div className="experience-right">
              <div className="experience-dur">
                {userData.experienceDuration}
              </div>
              <div className="experience-loc">
                {userData.experienceLocation}
              </div>
            </div>
          </div>
          <div className="experience-details">
            <ul>
              {userData.details
                .split("\n")
                .filter((sentence) => sentence.trim() !== "")
                .map((sentence, index) => (
                  <li key={index}>{sentence}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="section">
        <h3>Skills</h3>
        <div className="skills">
          <ul>
            {userData.skills
              .split("\n")
              .filter((skill) => skill.trim() !== "")
              .map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
