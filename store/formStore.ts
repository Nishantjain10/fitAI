import { create } from 'zustand'

type State = {
    age: string,
    height: String,
    weight: string,
    diseases: string;
    allergies: string
}

type Actions = {
    setAge: (age: State['age']) => void
    setHeight: (height: State['height']) => void
    setWeight: (weight: State['weight']) => void
    setDisease: (diseases: State['diseases']) => void
    setAllergies: (allergies: State['allergies']) => void
}

const useFormOneStore = create<State & Actions>((set) => ({
    age: '',
    height: '',
    weight: '',
    diseases: '',
    allergies: '',

    setAge: (age) => set(() => ({ age: age })),
    setHeight: (height) => set(() => ({ height: height })),
    setWeight: (weight) => set(() => ({ weight: weight })),
    setDisease: (diseases) => set(() => ({ diseases: diseases })),
    setAllergies: (allergies) => set(() => ({ allergies: allergies }))
}))



// const useFormOneStore = create<State & Actions>((set) => ({
//     age: '',
//     height: '',
//     weight: '',


//     // setAge: (age) => {
//     //     set({
//     //         age: age
//     //     })
//     // },

//     setAge: (age) => set(() => ({ age: age })),
//     setHeight: (height) => set(() => ({ height: height })),
//     setWeight: (weight) => set(() => ({ weight: weight })),


//     // setHeight: (height: string) => {
//     //     set({
//     //         height: height
//     //     })
//     // },

//     // setWeight: (weight: string) => {
//     //     set({
//     //         weight: weight
//     //     })
//     // },
//     // setDiseases: (diseases: string) => {
//     //     set({
//     //         diseases: diseases
//     //     })
//     // },
//     // setAllergies: (allergies: string) => {
//     //     set({
//     //         allergies: allergies
//     //     })
//     // }


// }))

export default useFormOneStore