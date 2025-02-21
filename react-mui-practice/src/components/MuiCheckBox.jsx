import React from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookMarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookMarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
const MuiCheckBox = () => {
  const [acceptInc, setAcceptInc] = useState(false);
  console.log({ acceptInc });

  const handleChange = (event) => {
    setAcceptInc(event.target.checked);
  };

  const [skills, setSkills] = useState([]);
  console.log({ skills });

  const handleSkillChange = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept Terms and Conditions"
          control={<Checkbox checked={acceptInc} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookMarkBorderIcon />}
          checkedIcon={<BookMarkIcon />}
          checked={acceptInc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="Html"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="css"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
