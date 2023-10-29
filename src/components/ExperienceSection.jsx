export default function ExperienceSection({ userData, index }) {
  return (
    <>
      <div className="experience-entry">
        <div className="experience-header">
          <div className="experience-left">
            <div className="company">
              <b>{userData[`company${index === 0 ? "" : index + 1}`]}</b>
            </div>
            <div className="title">
              {userData[`title${index === 0 ? "" : index + 1}`]}
            </div>
          </div>
          <div className="experience-right">
            <div className="experience-dur">
              {userData[`experienceDuration${index === 0 ? "" : index + 1}`]}
            </div>
            <div className="experience-loc">
              {userData[`experienceLocation${index === 0 ? "" : index + 1}`]}
            </div>
          </div>
        </div>
        <div className="experience-details">
          <ul>
            {(userData[`details${index === 0 ? "" : index + 1}`] || "")
              .split("\n")
              .filter((sentence) => sentence.trim() !== "")
              .map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
