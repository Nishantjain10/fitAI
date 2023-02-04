import React from 'react'
import useFormOneStore from '@/store/formStore'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

const StepForm4 = () => {

  const [selectedPlan, timeDuration, setTimeDuration] = useFormOneStore(state => [
    state.selectedPlan, state.timeDuration, state.setTimeDuration])

  const handleChange = (e: SelectChangeEvent) => {
    setTimeDuration(e.target.value)
  }

  return (
    <div>

      {selectedPlan === 'exercise' ? (
        <div>
          <div>
            <h1 className='font-bold text-3xl'>Type of exercise</h1>
            <ButtonGroup size="large" aria-label="large button group">
              <Button>Home workout</Button>
              <Button>Calesthenics</Button>
              <Button>Weight lifting</Button>
              <Button>Yoga</Button>
            </ButtonGroup>
          </div>
          <div>
            <h1 className='text-3xl font-bold'>Experience</h1>
            <ButtonGroup size='large' aria-label="large button group">
              <Button>Beginner</Button>
              <Button>Intermediate</Button>
              <Button>Expert</Button>
            </ButtonGroup>
          </div>
        </div>
      ) : (
        <div>
          <div>

            <h1 className='text-3xl font-bold'>What do you prefer in eating?</h1>
            <ButtonGroup size='large' aria-label="large button group">
              <Button>Veg</Button>
              <Button>Non-veg</Button>
              <Button>Both</Button>
              <Button>Vegan</Button>
            </ButtonGroup>
          </div>

          <div>
            <h1 className='text-3xl font-bold'>What's your budget?</h1>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
              <Input
                className='w-[15em]'
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
              />
            </FormControl>
          </div>

          <div>
            <h1 className='text-3xl font-bold'>Type of Diet</h1>
            <ButtonGroup size='large' aria-label="large button group">
              <Button>Home Diet</Button>
              <Button>Hostel Diet</Button>

            </ButtonGroup>
          </div>


        </div>
      )}

      <div className='mt-10'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Time Duration</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timeDuration}
            label="Time Duration"
            onChange={handleChange}
            defaultValue={'Three Month'}
          >
            <MenuItem value={"One Month"}>One Months</MenuItem>
            <MenuItem value={"Three Month"}>Three Months</MenuItem>
            <MenuItem value={"Six Month"} >Six Months</MenuItem>
          </Select>
        </FormControl>
      </div>


    </div>
  )
}

export default StepForm4