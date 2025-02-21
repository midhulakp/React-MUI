import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
const MuiRadioButton = () => {
  const [value, setvalue] = useState("");
  console.log({ value });

  const handleChange = (event) => {
    setvalue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Year of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="warning"></Radio>}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio></Radio>} label="3-5" value="3-5" />
          <FormControlLabel
            control={<Radio></Radio>}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
