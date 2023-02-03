import React from 'react'
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import useFormStore from '@/store/formStore';

const StepForm1 = () => {
    
    const [age, setAge] = useFormStore(state => [state.age, state.setAge])

    console.log(age)

    return (
        <div className=''>
            <form className='grid grid-cols-3 gap-10'>
                <input
                    type="text"
                    className="border-2"
                    placeholder="Age"
                    onChange={e => setAge(e.target.value)}
                />
                {/* <TextField
                    type="number"
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={e => setAge(e.target.value)}
                /> */}

                <input
                    type="text"
                    className="border-2"
                    placeholder="Height" />
                <input
                    type="text"
                    className="border-2"
                    placeholder="Weight" />
                <input
                    type="text"
                    className="border-2"
                    placeholder="Diseases" />
                <input
                    type="text"
                    className="border-2"
                    placeholder="Allergies" />
            </form>
            {/* 
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                <Input
                    id="standard-adornment-weight"
                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
                <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
            </FormControl> */}
        </div>
    )
}

export default StepForm1