import React, { ChangeEvent } from 'react'
import useFormOneStore from '@/store/formStore'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

const StepForm4 = () => {

  // const [timeDuration, setTimeDuration] = useFormOneStore(state => [
  //   state.selectedPlan, state.timeDuration, state.setTimeDuration])

  const state = useFormOneStore()

  // const handleTimeDuration = (e: SelectChangeEvent) => {
  //   setTimeDuration(e.target.value)
  // }

  console.log(state.timeDuration)

  const handleExerciseType = (type: string) => {
    state.setExerciseType(type)
  }

  const handleExerciseExperience = (exp: string) => {
    state.setExerciseExperience(exp)
  }

  const handleFoodPreference = (food: string) => {
    state.setFoodPreference(food)
  }

  const handleDietType = (diet: string) => {
    state.setDietType(diet)
  }

  const handleDurationChange = (e: any) => {
    state.setTimeDuration(e.target.value)
  }

  return (
    <div>

      {state.selectedPlan === 'exercise' ? (
        <div>
          <div>
            <h1 className='font-bold text-3xl'>Type of exercise</h1>
            <ButtonGroup size="large" aria-label="large button group">
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.exerciseType === 'homeworkout' && 'bg-[red]'} text-black`} onClick={() => handleExerciseType('homeworkout')}>Home workout</Button>
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.exerciseType === 'calesthenics' && 'bg-[red]'} text-black`} onClick={() => handleExerciseType('calesthenics')}>Calesthenics</Button>
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.exerciseType === 'weightlifting' && 'bg-[red]'} text-black`} onClick={() => handleExerciseType('weightlifting')}>Weight lifting</Button>
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.exerciseType === 'yoga' && 'bg-[red]'} text-black`} onClick={() => handleExerciseType('yoga')}>Yoga</Button>
            </ButtonGroup>
          </div>
          <div>
            <h1 className='text-3xl font-bold'>Experience</h1>
            <ButtonGroup size='large' aria-label="large button group">
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.exerciseExperience === 'beginner' && 'bg-[red]'} text-black`} onClick={() => handleExerciseExperience('beginner')}>Beginner</Button>
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.exerciseExperience === 'Intermediate' && 'bg-[red]'} text-black`} onClick={() => handleExerciseExperience('Intermediate')}>Intermediate</Button>
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.exerciseExperience === 'Expert' && 'bg-[red]'} text-black`} onClick={() => handleExerciseExperience('Expert')}>Expert</Button>
            </ButtonGroup>
          </div>
        </div>
      ) : (
        <div>
          <div>

            <h1 className='text-3xl font-bold'>What do you prefer in eating?</h1>
            <ButtonGroup size='large' aria-label="large button group">
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.foodPreference === 'veg' && 'bg-[red]'} text-black`} onClick={() => handleFoodPreference('veg')}>Veg</Button>
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.foodPreference === 'non-veg' && 'bg-[red]'} text-black`} onClick={() => handleFoodPreference('non-veg')}>Non-veg</Button>
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.foodPreference === 'vegandnonveg' && 'bg-[red]'} text-black`} onClick={() => handleFoodPreference('vegandnonveg')}>Both</Button>
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.foodPreference === 'vegan' && 'bg-[red]'} text-black`} onClick={() => handleFoodPreference('vegan')}>Vegan</Button>
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
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.dietType === 'homediet' && 'bg-[red]'} text-black`} onClick={() => handleDietType('homediet')}>Home Diet</Button>
              <Button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.dietType === 'hosteldiet' && 'bg-[red]'} text-black`} onClick={() => handleDietType('hosteldiet')}>Hostel Diet</Button>

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
            value={state.timeDuration}
            label="Time Duration"
            onChange={handleDurationChange}
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