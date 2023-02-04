"use client";

import React, { useState } from "react";
import StepFormOne from "./StepFormOne";
import StepFormTwo from "./StepFormTwo";
import StepFormThree from "./StepFormThree";
import StepFormFour from "./StepFormFour";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useRouter } from "next/navigation";



const Container = () => {
  const forms = [
    <StepFormOne />,
    <StepFormTwo />,
    <StepFormThree />,
    <StepFormFour />,
  ];
  const [formIndex, setFormIndex] = useState(0);
  const route = useRouter()

  const handleRightClick = () => {
    setFormIndex((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const handleLeftClick = () => {
    setFormIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const changePercent = () => {
    percentage = 100
  }

  let percentage = (formIndex) / 4 * 100
  const handleClick = () => {

    changePercent()
     setTimeout(() => {
      route.push('/')
    }, 3000)

  }

  console.log(percentage)


  return (
    <div className="flex mx-auto my-[10em] w-[100em]  h-[40em] overflow-hidden rounded-xl">
      <div className="my-0  h-full relative  flex-1 border-2   p-2">
        {forms[formIndex]}


        {formIndex === 3 ?
          <button
            onClick={handleClick}
            className="absolute right-[90px] bottom-10 cursor-pointer bg-black px-4 py-2 text-white"
          >Finish</button>
          :
          <button
            className="absolute right-[90px] bottom-10 cursor-pointer bg-black px-4 py-2 text-white"
            onClick={handleRightClick
            }>Next</button>
        }

        <button
          className="absolute left-[90px] bottom-10 cursor-pointer bg-black px-4 py-2 text-white"
          onClick={handleLeftClick}>Prev</button>

      </div>

      <div className=" bg-[#eab308] text-white flex-col w-[10em] flex items-center justify-center  font-bold text-5xl ">

        <h1>Progress</h1>
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.8,
            })}
          />
        </div>

        <h1 className="text-xl mt-20 ">Here will be progress bar</h1>
      </div>


    </div>
  );
};

export default Container;
