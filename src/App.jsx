import { useState } from "react";
import FormSection from "./components/FormSection.jsx";
import ResumeSection from "./components/ResumeSection.jsx";
import placeholderPerson from "./constants/placeholderPerson.js";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState(placeholderPerson);

  return (
    <div className="container">
      <FormSection userData={userData} setUserData={setUserData} />
      <ResumeSection userData={userData} />
    </div>
  );
}
