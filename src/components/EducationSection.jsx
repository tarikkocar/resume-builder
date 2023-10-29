export default function EducationSection({ userData, index }) {
  return (
    <>
      <div className="education-entry">
        <div className="education-left">
          <div className="university">
            <b>{userData[`institution${index === 0 ? "" : index + 1}`]}</b>
          </div>
          <div className="program">
            {userData[`program${index === 0 ? "" : index + 1}`]}
          </div>
        </div>
        <div className="education-right">
          <div className="education-dur">
            {userData[`educationDuration${index === 0 ? "" : index + 1}`]}
          </div>
          <div className="education-loc">
            {userData[`educationLocation${index === 0 ? "" : index + 1}`]}
          </div>
        </div>
      </div>
    </>
  );
}
