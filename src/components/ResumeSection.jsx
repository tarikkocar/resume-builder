import ResumeDocument from "./ResumeDocument";

export default function ResumeSection({
  userData,
  numEducations,
  numExperiences,
}) {
  return (
    <div className="resume-section">
      <ResumeDocument
        userData={userData}
        numEducations={numEducations}
        numExperiences={numExperiences}
      />
    </div>
  );
}
