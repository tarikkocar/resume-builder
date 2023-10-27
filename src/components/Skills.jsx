import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import placeholderPerson from "../constants/placeholderPerson";

export default function Skills({ userData, setUserData }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    const newInfo = { ...userData, [id]: value };
    setUserData(newInfo);

    if (!value) setUserData(placeholderPerson);
  };

  return (
    <Box component="form">
      <Typography variant="h5" component="h2">
        Skills
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        id="skills"
        label="Skills"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.skills
          .split("\n")
          .map((sentence) => sentence.trim())
          .join("\n")}
        onChange={handleChange}
      />
    </Box>
  );
}
