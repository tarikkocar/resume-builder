import { useState } from "react";
import FormSection from "./components/FormSection.jsx";
import ResumeSection from "./components/ResumeSection.jsx";
import "./App.css";

const placeholderPerson = {
  fullName: "Emily Parker",
  email: "emailparker@example.com",
  phone: "(123) 456-7890",
  address: "Montreal, QC",
};

export default function App() {
  const [userData, setUserData] = useState(placeholderPerson);

  return (
    <div className="container">
      <FormSection userData={userData} setUserData={setUserData} />
      <ResumeSection userData={userData} />
    </div>
  );
}
