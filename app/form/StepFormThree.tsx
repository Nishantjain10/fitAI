import useFormStore from '@/store/formStore'
import React from 'react'



const StepForm3 = () => {

    const state = useFormStore()

    const handleClick = (plan: string) => {
        state.setSelectedPlan(plan)
    }



    return (
        <div className='flex flex-col items-center justify-center gap-20'>
            <h1 className='text-4xl font-bold'>What kind of plan do you want</h1>
            <div className='flex items-center justify-center gap-10'>
                <button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.selectedPlan === 'exercise' && 'bg-[red]'} text-black`} onClick={() => handleClick('exercise')}>Exercise</button>
                <button className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.selectedPlan === 'dietplan' && 'bg-[red]'} text-black`} onClick={() => handleClick('dietplan')} >Diet Plan</button>
            </div>
        </div >
    )
}

export default StepForm3