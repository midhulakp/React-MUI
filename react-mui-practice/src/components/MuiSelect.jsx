import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  // Single selection state
  const [country, setCountry] = useState("");
  console.log({ country });

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  // Multiple selection state
  const [countries, setCountries] = useState([]);
  console.log({ countries });

  const handleChanges = (event) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px" display="flex" flexDirection="column" gap={2}>
      {/* Single Selection Dropdown */}
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="India">INDIA</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="Australia">Australia</MenuItem>
      </TextField>

      {/* Multiple Selection Dropdown */}
      <TextField
        label="Select countries"
        select
        value={countries}
        onChange={handleChanges}
        fullWidth
        SelectProps={{
          multiple: true, // Allow multiple selections
          renderValue: (selected) => selected.join(", "), // Display selected values as a comma-separated string
        }}
        size="small"
        color="secondary"
        helperText="select your country"
      >
        <MenuItem value="India">INDIA</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="Australia">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
