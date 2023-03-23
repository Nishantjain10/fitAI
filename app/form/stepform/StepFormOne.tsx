import React from "react";
import TextField from "@mui/material/TextField";
import useFormOneStore from "@/store/formStore";
import { Button } from "@mui/material";

const StepForm1 = () => {
  const [state] = useFormOneStore((state) => [state]);

  return (
    <div className=" p-20 max-sm:mx-auto max-sm:p-8">
      <div className="mb-10 font-product max-sm:flex max-sm:flex-col max-sm:justify-center">
        <h1 className="text-3xl font-semibold leading-[2.4rem] w-[30ch] max-sm:w-[16ch] max-sm:text-2xl">
          Fill out our progress form to receive a customized diet plan.
        </h1>
        <p>Tailored to your unique needs and preferences.</p>
      </div>
      <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
        <TextField
          required
          value={state.weight}
          onChange={(e) => state.setWeight(e.target.value)}
          label="weight"
          variant="outlined"
        />
        <TextField
          required
          value={state.height}
          onChange={(e) => state.setHeight(e.target.value)}
          label="height"
          variant="outlined"
        />
        <TextField
          required
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
    </div>
  );
};

export default StepForm1;
