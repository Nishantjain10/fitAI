"use client";

import React, { MouseEvent, useState } from "react";
import StepFormOne from "./StepFormOne";
import StepFormTwo from "./StepFormTwo";
import StepFormThree from "./StepFormThree";
import StepFormFour from "./StepFormFour";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "next/navigation";
import useFormOneStore from "@/store/formStore";


const Container = () => {
  const forms = [
    <StepFormOne />,
    <StepFormTwo />,
    <StepFormThree />,
    <StepFormFour />,
  ];

  
  const handleRightClick = () => {
    setFormIndex((prev) => (prev < 3 ? prev + 1 : prev));
  };
  
  const handleLeftClick = () => {
    setFormIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const changePercent = () => {
    percentage = 100;
  };
  
  const state = useFormOneStore();
  const [formIndex, setFormIndex] = useState(0);
  const route = useRouter();
  let percentage = (formIndex / 4) * 100;
  
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1);
    console.log("working-handlebuttonclick");
  };

  
  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    state.setLoading(true);
    route.push("/dashboard");
    state.setAnswer("");
    console.log("working-handleclick");
    if (state.weight === "") {
      alert("no data");
      return;
    }

    

    const prompt = `You are given a user's data, now you gotta generate a ${state.timeDuration} ${state.selectedPlan} for that user that wants to ${state.selectedType} and has experience of ${state.exerciseExperience} in this
        weight: ${state.weight} \n
        height: ${state.height} \n
        age: ${state.age} \n
        diseases: ${state.diseases} \n
        allergies: ${state.allergies} \n
        diet: ${state.foodPreference}
        need a ${state.dietType}
        `;

    const results = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({
        prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    state.setAnswer(results.result.choices[0].text);
    state.setLoading(false);
  };


  const handleCombinedClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleButtonClick();
    handleClick(e);
    console.log("working");
  }

  
  return (
    <div className="flex mx-auto my-[4em] border border-grey-900 shadow-md w-[100em]  h-[40em] overflow-hidden rounded-xl">
      <div className="my-0  h-full relative  flex-1 border-2   p-2">
        {forms[formIndex]}

        {formIndex === 3 ? (
          <button
            onClick={handleCombinedClick}
            className="  absolute right-[90px] rounded-md bottom-10 cursor-pointer font-product font-medium bg-black px-4 py-2 text-white"
          >
            Finish
          </button>
        ) : (
          <button
            className=" absolute right-[90px] bottom-10 bg-violet-500 hover:bg-violet-600 text-white font-product font-medium rounded-md px-4 py-2 hover:bg-violet-500 transition-all"
            onClick={handleRightClick}
          >
            Next
          </button>
        )}

        <button
          className="absolute left-[90px] bottom-10 rounded-md cursor-pointer font-product bg-violet-500 hover:bg-violet-600 font-medium px-4 py-2 text-white"
          onClick={handleLeftClick}
        >
          Prev
        </button>
      </div>

      <div className=" bg-violet-500 text-white font-product flex-col w-[10em] flex items-center justify-center  font-bold text-5xl ">
        <h1>Progress</h1>
        <div style={{ width: 200, height: 200 }} className="mt-12">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              trailColor: "#fff",
              pathColor: "#F3BC34",
              textColor: "#fff",
              pathTransitionDuration: 0.8,
            })}
          />
        </div>

        <h1 className="text-xl mt-20 ">Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  );
};

export default Container;
