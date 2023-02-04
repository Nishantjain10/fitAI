
import useFormOneStore from '@/store/formStore'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const StepForm2 = () => {

    const [selectedType, setSelectedType] = useFormOneStore(state => [
        state.selectedType,
        state.setSelectedType
    ])


    console.log(selectedType)

    const handleClick = (type: string) => {
        setSelectedType(type)
    }
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-3xl font-bold mb-10'>What are you trying to achieve?</h1>

            <div className='flex items-center justify-center gap-5'>
                <Button
                    className=''
                    onClick={() => handleClick('massgain')}
                    variant="outlined">Mass gain</Button>
                <Button
                    className=''
                    onClick={() => handleClick('fit')}
                    variant="outlined">Fit</Button>
                <Button
                    className=''
                    onClick={() => handleClick('weight loss')}
                    variant="outlined">Weight Loss</Button>
            </div>
            {/* <ButtonGroup

                variant="contained"
                aria-label="outlined primary button group" >
                <Button onClick={() => handleClick('massgain')} className='text-black hover:text-white'>Mass gain</Button>
                <Button onClick={() => handleClick('fit')} className='text-black hover:text-white'>Fit</Button>
                <Button onClick={() => handleClick('weight loss')} className='text-black hover:text-white'>Weight Loss</Button>
            </ButtonGroup> */}
        </div>
    )
}


export default StepForm2;
