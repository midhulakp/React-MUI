import React from "react";
import "./App.css";
import { MuiTypograpy } from "./components/MuiTypograpy";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckBox from "./components/MuiCheckBox";
const App = () => {
  return (
    <div className="App">
      <MuiTypograpy />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
    </div>
  );
};

export default App;
