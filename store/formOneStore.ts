import { create } from 'zustand'

interface State {
    age: String,
    height: String,
    weight: string,
    diseases: string;
    allergies: string
}

interface Actions {
    setAge: (age: State['age']) => void
    setHeight: (height: State['height']) => void
    setWeight: (weight: State['weight']) => void
}



const useFormOneStore = create<State & Actions>((set) => ({
    age: '',
    height: '',
    weight: '',
    diseases: '',
    allergies: '',


    // setAge: (age) => {
    //     set({
    //         age: age
    //     })
    // },

    setAge: (age) => set(() => ({ age: age })),
    setHeight: (height) => set(() => ({ height: height })),
    setWeight: (weight) =>set(() => ({weight: weight}))

    // setHeight: (height: string) => {
    //     set({
    //         height: height
    //     })
    // },

    // setWeight: (weight: string) => {
    //     set({
    //         weight: weight
    //     })
    // },
    // setDiseases: (diseases: string) => {
    //     set({
    //         diseases: diseases
    //     })
    // },
    // setAllergies: (allergies: string) => {
    //     set({
    //         allergies: allergies
    //     })
    // }


}))

export default useFormOneStore