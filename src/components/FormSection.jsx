import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import html2pdf from "html2pdf.js";
import { useState } from "react";

export default function FormSection({
  userData,
  setUserData,
  numEducations,
  setNumEducations,
  numExperiences,
  setNumExperiences,
}) {
  const [showRemoveEdButton, setShowRemoveEdButton] = useState(false);
  const [showRemoveExpButton, setShowRemoveExpButton] = useState(false);

  const addEducation = () => {
    setNumEducations(numEducations + 1);
    setShowRemoveEdButton(true);
  };

  const removeEducation = () => {
    setNumEducations(numEducations - 1);

    if (numEducations === 2) setShowRemoveEdButton(false);
  };

  const addExperience = () => {
    setNumExperiences(numExperiences + 1);
    setShowRemoveExpButton(true);
  };

  const removeExperience = () => {
    setNumExperiences(numExperiences - 1);

    if (numExperiences === 2) setShowRemoveExpButton(false);
  };

  const generatePDF = () => {
    const resume = document.querySelector(".resume-document");
    const opt = {
      margin: [10, 20],
      image: { type: "jpeg", quality: 0.98 },
      pagebreak: { mode: "avoid-all" },
    };
    html2pdf().set(opt).from(resume).save("resume.pdf");
  };

  return (
    <div className="form-section">
      <h1>Resume Builder</h1>
      <PersonalDetails userData={userData} setUserData={setUserData} />

      {[...Array(numEducations)].map((_, index) => (
        <Education
          key={index}
          index={index}
          userData={userData}
          setUserData={setUserData}
        />
      ))}

      <Stack spacing={2} direction="row" justifyContent="flex-end">
        {showRemoveEdButton && (
          <Button
            variant="outlined"
            sx={{
              color: "#d55966",
              borderColor: "#d55966",
              padding: "0.5em 3.5em",
              maxWidth: "3.5em",
              "&:hover": { borderColor: "#d55966" },
            }}
            onClick={removeEducation}
          >
            Remove
          </Button>
        )}
        <Button
          variant="outlined"
          sx={{
            color: "#12a1a1",
            borderColor: "#12a1a1",
            padding: "0.5em 3.5em",
            maxWidth: "3.5em",
            "&:hover": { borderColor: "#12a1a1" },
          }}
          onClick={addEducation}
        >
          Add
        </Button>
      </Stack>

      {[...Array(numExperiences)].map((_, index) => (
        <Experience
          key={index}
          index={index}
          userData={userData}
          setUserData={setUserData}
        />
      ))}

      <Stack spacing={2} direction="row" justifyContent="flex-end">
        {showRemoveExpButton && (
          <Button
            variant="outlined"
            sx={{
              color: "#d55966",
              borderColor: "#d55966",
              padding: "0.5em 3.5em",
              maxWidth: "3.5em",
              "&:hover": { borderColor: "#d55966" },
            }}
            onClick={removeExperience}
          >
            Remove
          </Button>
        )}
        <Button
          variant="outlined"
          sx={{
            color: "#12a1a1",
            borderColor: "#12a1a1",
            padding: "0.5em 3.5em",
            maxWidth: "3.5em",
            "&:hover": { borderColor: "#12a1a1" },
          }}
          onClick={addExperience}
        >
          Add
        </Button>
      </Stack>

      <Skills userData={userData} setUserData={setUserData}></Skills>

      <Button
        variant="contained"
        sx={{
          color: "#ffffff",
          backgroundColor: "#12a1a1",
          padding: "0.5em 3.5em",
          maxWidth: "fit-content",
          alignSelf: "center",
          "&:hover": { backgroundColor: "#209999" },
        }}
        onClick={generatePDF}
      >
        Download Resume
      </Button>
    </div>
  );
}
