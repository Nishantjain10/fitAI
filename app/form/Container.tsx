'use client'

import React, { FormEvent, useState } from 'react'
import StepFormOne from './StepFormOne';
import StepFormTwo from "./StepFormTwo";
import StepFormThree from "./StepFormThree";
import StepFormFour from "./StepFormFour";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Container = () => {

 

    const forms = [<StepFormOne  />, <StepFormTwo />, <StepFormThree />, <StepFormFour />]
    const [formIndex, setFormIndex] = useState(0)


    const handleRightClick = () => {
        setFormIndex(prev => prev < 3 ? prev + 1 : prev)
    }

    const handleLeftClick = () => {
        setFormIndex(prev => prev > 0 ? prev - 1 : prev)
    }

    console.log(formIndex)

    return (
        <div className='flex mx-auto my-[10em] w-[80em] border-2 h-[30em] overflow-hidden relative p-5'>

            <div className='my-0  h-full relative  flex-1'>
                {/* {forms.map((form, idx) => {
                    return (
                        <div className={`absolute top-0 left-0 w-full h-full transition duration-500 ease-linear ${formIndex === idx ? 'translate-x-0' : idx === formIndex - 1 || (formIndex === 0 && idx === forms.length - 1) ? '-translate-x-full' : 'translate-x-full'}`}>
                            {form}
                        </div>
                    )
                })} */}

                {forms[formIndex]}
            </div>

            <div className=' bg-[#eab308] text-white flex-col flex-1 flex items-center justify-start font-bold text-5xl'>
                <h1>{formIndex + 1}/4</h1>
                <p>{(formIndex + 1) / 4 * 100}%</p>
            </div>

            <ArrowForwardIosIcon onClick={handleRightClick} className='absolute right-0 top-1/2 cursor-pointer' />

            <ArrowBackIosIcon onClick={handleLeftClick} className="absolute left-0 top-1/2 cursor-pointer" />



        </div>
    )
}

export default Container
