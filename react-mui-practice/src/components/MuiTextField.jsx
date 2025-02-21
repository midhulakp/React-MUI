import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="outlined" />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            label="small secondary"
            variant="outlined"
            size="small"
            color="secondary"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            label="Form Input"
            required
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={
              !value ? "Required" : "Donot share your password with anyone"
            }
          />
          <TextField
            label="password"
            type="password"
            disabled
            helperText="Do not share your password with anyone"
          />
          <TextField label="read only" InputProps={{ readOnly: true }} />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
          <TextField
            label="Password"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiTextField;
