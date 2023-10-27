import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import placeholderPerson from "../constants/placeholderPerson";

export default function PersonalDetails({ userData, setUserData }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    const newInfo = { ...userData, [id]: value };
    setUserData(newInfo);

    if (!value) setUserData(placeholderPerson);
  };

  return (
    <Box component="form">
      <Typography variant="h5" component="h2">
        Personal Details
      </Typography>
      <TextField
        fullWidth
        id="fullName"
        label="Full Name"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.fullName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="email"
        label="Email"
        variant="outlined"
        size="small"
        type="email"
        margin="normal"
        placeholder={userData.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="phone"
        label="Phone Number"
        variant="outlined"
        size="small"
        type="tel"
        margin="normal"
        placeholder={userData.phone}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="address"
        label="Address"
        variant="outlined"
        size="small"
        margin="normal"
        placeholder={userData.address}
        onChange={handleChange}
      />
    </Box>
  );
}
