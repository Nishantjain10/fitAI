
import useFormOneStore from '@/store/formStore'
import React from 'react'
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
        <div
            className='flex items-center gap-5'
            aria-label="outlined primary button group" >
            <button onClick={() => handleClick('massgain')} className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${selectedType === 'massgain' && 'bg-[red]'} text-black`}>Mass gain</button>
            <button onClick={() => handleClick('fit')} className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${selectedType === 'fit' && 'bg-[red]'} text-black`}>Fit</button>
            <button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${selectedType === 'weightloss' && 'bg-[red]'} text-black`} onClick={() => handleClick('weightloss')} >Weight Loss</button>
        </div>
    )
}


export default StepForm2;
