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

  const [timeDuration, setTimeDuration] = useFormOneStore(state => [
    state.selectedPlan, state.timeDuration, state.setTimeDuration])

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

  return (
    <div>

      {state.selectedPlan === 'exercise' ? (
        <div className='font-product'>
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
        <div className='font-product flex flex-col justify-center items-center mt-12'>
          <div className='flex items-center flex-col'>

            <h1 className='text-3xl pb-4 font-bold'>What do you prefer in eating?</h1>
            <ButtonGroup size='large' aria-label="large button group" className='gap-2'>
              <button className={` bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${state.foodPreference === 'veg' && 'bg-violet-500 text-white'} `} onClick={() => handleFoodPreference('veg')}>Veg</button>
              <button className={` bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${state.foodPreference === 'non-veg' && 'bg-violet-500 text-white'} `} onClick={() => handleFoodPreference('non-veg')}>Non-veg</button>
              <button className={` bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${state.foodPreference === 'vegandnonveg' && 'bg-violet-500 text-white'} `} onClick={() => handleFoodPreference('vegandnonveg')}>Both</button>
              <button className={` bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${state.foodPreference === 'vegan' && 'bg-violet-500 text-white'} `} onClick={() => handleFoodPreference('vegan')}>Vegan</button>
            </ButtonGroup>
          </div>

          <div>
            <h1 className='text-3xl mt-8 font-bold'>What's your budget?</h1>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
              <Input
                className='w-[15em]'
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
              />
            </FormControl>
          </div>

          <div className='flex items-center flex-col'>
            <h1 className='text-3xl mt-8 px-8 font-bold'>Type of Diet</h1>
            <ButtonGroup size='large' aria-label="large button group" className='gap-2 mt-2 product-font'>
              <button className={` bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${state.dietType === 'homediet' && 'bg-violet-500 text-white'} `} onClick={() => handleDietType('homediet')}>Home </button>
              <button className={` bg-white hover:scale-105 transition-all border-2 border-black font-medium py-2 px-4 rounded-md ${state.dietType === 'hosteldiet' && 'bg-violet-500 text-white'} `} onClick={() => handleDietType('hosteldiet')}>Hostel Diet</button>

            </ButtonGroup>
          </div>


        </div>
      )}

      <div className='mt-10 flex justify-center'>
        <FormControl sx={{minWidth: '200px'}}>
          <InputLabel id="demo-simple-select-label">Time Duration</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timeDuration}
            label="Time Duration"
            onChange={() => { }}
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