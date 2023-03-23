import useFormStore from "@/store/formStore";
import React from "react";

const StepForm3 = () => {
  const state = useFormStore();

  const handleClick = (plan: string) => {
    state.setSelectedPlan(plan);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-52 gap-12 font-product max-sm:my-10 max-sm:pb-12">
      <h1 className="text-4xl font-bold max-sm:text-center">What kind of plan do you want?</h1>
      <div className="flex items-center justify-center gap-10 max-sm:flex-col">
        <button
          className={` bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${
            state.selectedPlan === "dietplan" && "bg-violet-500 text-white"
          }`}
          onClick={() => handleClick("dietplan")}
        >
          Diet Plan
        </button>
        <button
          className={` bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${
            state.selectedPlan === "exercise" && "bg-violet-500 text-white"
          }`}
          onClick={() => handleClick("exercise")}
        >
          Exercise Plan
        </button>
      </div>
    </div>
  );
};

export default StepForm3;
