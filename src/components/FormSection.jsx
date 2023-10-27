import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function FormSection({ userData, setUserData }) {
  return (
    <div className="form-section">
      <h1>Resume Builder</h1>
      <PersonalDetails userData={userData} setUserData={setUserData} />
      <Education userData={userData} setUserData={setUserData} />
      <Experience userData={userData} setUserData={setUserData} />
      <Skills userData={userData} setUserData={setUserData}></Skills>
    </div>
  );
}
