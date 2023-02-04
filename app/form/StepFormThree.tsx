import useFormStore from '@/store/formStore'
import React from 'react'

const StepForm3 = () => {

    const state = useFormStore()

    const handleClick = (plan: string) => {
        state.setSelectedPlan(plan)
    }

    console.log(state.selectedPlan)

    return (
        <div className='flex flex-col items-center justify-center gap-20'>
            <h1 className='text-4xl font-bold'>What kind of plan do you want</h1>
            <div className='flex items-center justify-center gap-10'>
                <button onClick={() => handleClick('exercise')} className='border-2 border-black p-2'>Exercise</button>
                <button onClick={() => handleClick('dietplan')}  className='border-2 border-black p-2'>Diet Plan</button>
            </div>
        </div>
    )
}

export default StepForm3