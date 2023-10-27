import ResumeDocument from "./ResumeDocument";

export default function ResumeSection({ userData }) {
  return (
    <div className="resume-section">
      <ResumeDocument userData={userData} />
    </div>
  );
}
