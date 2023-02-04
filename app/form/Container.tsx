"use client";

import React, { useState } from "react";
import StepFormOne from "./StepFormOne";
import StepFormTwo from "./StepFormTwo";
import StepFormThree from "./StepFormThree";
import StepFormFour from "./StepFormFour";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from "@mui/material";
import Link from "next/link";


const Container = () => {
  const forms = [
    <StepFormOne />,
    <StepFormTwo />,
    <StepFormThree />,
    <StepFormFour />,
  ];
  const [formIndex, setFormIndex] = useState(0);

  const handleRightClick = () => {
    setFormIndex((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const handleLeftClick = () => {
    setFormIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  let percentage = (formIndex) / 4 * 100
  console.log(formIndex);

  return (
    <div className="flex mx-auto my-[10em] w-[80em]  h-[30em] overflow-hidden">
      <div className="my-0  h-full relative  flex-1 border-2   p-2">
        {forms[formIndex]}


        {formIndex === 3 ?
          <Link
            className="absolute right-0 bottom-0 cursor-pointer"
            href={'/dashboard'}>Finish</Link>
          :
          <button
            className="absolute right-0 bottom-0 cursor-pointer"
            onClick={handleRightClick
            }>Next</button>
        }

        <button
          className="absolute left-0  bottom-0 cursor-pointer"
          onClick={handleLeftClick}>Prev</button>

      </div>

      <div className=" bg-[#eab308] text-white flex-col flex-1 flex items-center justify-center  font-bold text-5xl">
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.8,
            })}
          />
        </div>
      </div>


    </div>
  );
};

export default Container;
