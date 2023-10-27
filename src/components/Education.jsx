import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import placeholderPerson from "../constants/placeholderPerson";

export default function Education({ userData, setUserData }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    const newInfo = { ...userData, [id]: value };
    setUserData(newInfo);

    if (!value) setUserData(placeholderPerson);
  };

  return (
    <Box component="form">
      <Typography variant="h5" component="h2">
        Education
      </Typography>
      <TextField
        fullWidth
        id="university"
        label="University"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.university}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="department"
        label="Department"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.department}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="educationDuration"
        label="Duration"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.educationDuration}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="educationLocation"
        label="Location"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.educationLocation}
        onChange={handleChange}
      />
    </Box>
  );
}
