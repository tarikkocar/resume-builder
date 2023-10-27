import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import placeholderPerson from "../constants/placeholderPerson";

export default function Experience({ userData, setUserData }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    const newInfo = { ...userData, [id]: value };
    setUserData(newInfo);

    if (!value) setUserData(placeholderPerson);
  };

  return (
    <Box component="form">
      <Typography variant="h5" component="h2">
        Experience
      </Typography>
      <TextField
        fullWidth
        id="company"
        label="Company"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.company}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="title"
        label="Title"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.title}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="experienceDuration"
        label="Duration"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.experienceDuration}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="experienceLocation"
        label="Location"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.experienceLocation}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        id="details"
        label="Details"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.details
          .split("\n")
          .map((sentence) => sentence.trim())
          .join("\n")}
        onChange={handleChange}
      />
    </Box>
  );
}
