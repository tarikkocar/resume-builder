import { useState } from "react";
import FormSection from "./components/FormSection.jsx";
import ResumeSection from "./components/ResumeSection.jsx";
import placeholderPerson from "./constants/placeholderPerson.js";
import "./styles/App.css";

export default function App() {
  const [userData, setUserData] = useState(placeholderPerson);
  const [numEducations, setNumEducations] = useState(1);
  const [numExperiences, setNumExperiences] = useState(1);

  return (
    <div className="container">
      <FormSection
        userData={userData}
        setUserData={setUserData}
        numEducations={numEducations}
        setNumEducations={setNumEducations}
        numExperiences={numExperiences}
        setNumExperiences={setNumExperiences}
      />
      <ResumeSection
        userData={userData}
        numEducations={numEducations}
        numExperiences={numExperiences}
      />
    </div>
  );
}
