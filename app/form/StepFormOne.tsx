import React from 'react'
import TextField from "@mui/material/TextField";
import useFormOneStore from "@/store/formStore";
import { Button } from "@mui/material";

const StepForm1 = () => {
  const [state] = useFormOneStore((state) => [state]);


  return (
    <div className="">
      <TextField
        value={state.weight}
        onChange={(e) => state.setWeight(e.target.value)}
        label="weight"
        variant="outlined"
      />
      <TextField
        value={state.height}
        onChange={(e) => state.setHeight(e.target.value)}
        label="height"
        variant="outlined"
      />
      <TextField
        value={state.age}
        onChange={(e) => state.setAge(e.target.value)}
        label="age"
        variant="outlined"
      />
      <TextField
        value={state.diseases}
        onChange={(e) => state.setDisease(e.target.value)}
        label="diseases"
        variant="outlined"
      />
      <TextField
        value={state.allergies}
        onChange={(e) => state.setAllergies(e.target.value)}
        label="allergies"
        variant="outlined"
      />
    </div>
  );
};

export default StepForm1

