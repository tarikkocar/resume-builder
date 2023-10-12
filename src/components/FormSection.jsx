import PersonalDetails from "./PersonalDetails";

export default function FormSection({ userData, setUserData }) {
  return (
    <div className="form-section">
      <h1>Resume Builder</h1>
      <PersonalDetails userData={userData} setUserData={setUserData} />
    </div>
  );
}
