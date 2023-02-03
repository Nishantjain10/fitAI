import useFormOneStore from '@/store/formStore'
import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const StepForm2 = () => {

    const [selectedType, setSelectedType] = useFormOneStore(state => [
        state.seletedType,
        state.setSelectedType
    ])

    console.log(selectedType)

    const handleClick = (type: string) => {
        setSelectedType(type)
    }

    return (
        <ButtonGroup

            variant="contained"
            aria-label="outlined primary button group" >
            <Button onClick={() => handleClick('massgain')} className='text-black hover:text-white'>Mass gain</Button>
            <Button onClick={() => handleClick('fit')} className='text-black hover:text-white'>Fit</Button>
            <Button onClick={() => handleClick('weight loss')} className='text-black hover:text-white'>Weight Loss</Button>
        </ButtonGroup>
    )
}

export default StepForm2