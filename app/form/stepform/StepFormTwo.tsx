import useFormOneStore from "@/store/formStore";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const StepForm2 = () => {
  const [selectedType, setSelectedType] = useFormOneStore((state) => [
    state.selectedType,
    state.setSelectedType,
  ]);

  console.log(selectedType);

  const handleClick = (type: string) => {
    setSelectedType(type);
  };
  return (
    <div className="font-product mx-auto w-fit flex flex-col items-center mt-52 max-sm:my-10 max-sm:pb-8">
      <h1 className="text-4xl font-bold max-sm:text-center max-sm:w-[10ch]">Choose your Fitness Plan:</h1>
      <div
        className="flex items-center gap-5 mt-12 font-product max-sm:flex-col"
        aria-label="outlined primary button group"
      >
        <button
          onClick={() => handleClick("massgain")}
          className={` bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${
            selectedType === "massgain" && "bg-violet-500 text-white"
          } `}
        >
          Mass gain
        </button>
        <button
          onClick={() => handleClick("fit")}
          className={`  bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-8 rounded-md ${
            selectedType === "fit" && "bg-violet-500 text-white"
          }`}
        >
          Fit
        </button>
        <button
          className={`  bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${
            selectedType === "weightloss" && "bg-violet-500 text-white"
          }`}
          onClick={() => handleClick("weightloss")}
        >
          Weight Loss
        </button>
      </div>
    </div>
  );
};

export default StepForm2;
