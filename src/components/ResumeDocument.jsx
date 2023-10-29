import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import "../styles/ResumeDocument.css";

export default function ResumeDocument({
  userData,
  numEducations,
  numExperiences,
}) {
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
        {[...Array(numEducations)].map((_, index) => (
          <EducationSection key={index} index={index} userData={userData} />
        ))}
      </div>
      <div className="section">
        <h3>Experience</h3>
        {[...Array(numExperiences)].map((_, index) => (
          <ExperienceSection key={index} index={index} userData={userData} />
        ))}
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
