import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import placeholderPerson from "../constants/placeholderPerson";

export default function Education({ userData, setUserData, index }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    const newInfo = { ...userData, [id]: value };
    setUserData(newInfo);

    if (!value) {
      setUserData((prevData) => ({
        ...prevData,
        [id]: placeholderPerson[id],
      }));
    }
  };

  return (
    <Box component="form">
      <Typography variant="h5" component="h2">
        Education {index === 0 ? "" : index + 1}
      </Typography>
      <TextField
        fullWidth
        id={`institution${index === 0 ? "" : index + 1}`}
        label="Institution"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.institution}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id={`program${index === 0 ? "" : index + 1}`}
        label="Program"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.program}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id={`educationDuration${index === 0 ? "" : index + 1}`}
        label="Duration"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.educationDuration}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id={`educationLocation${index === 0 ? "" : index + 1}`}
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
