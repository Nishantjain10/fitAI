import { create } from 'zustand'

type State = {
    age: string,
    height: String,
    weight: string,
    diseases: string;
    allergies: string
    seletedType: string
}

type Actions = {
    setAge: (age: State['age']) => void
    setHeight: (height: State['height']) => void
    setWeight: (weight: State['weight']) => void
    setDisease: (diseases: State['diseases']) => void
    setAllergies: (allergies: State['allergies']) => void
    setSelectedType: (type: State['seletedType']) => void
}

const useFormStore = create<State & Actions>((set) => ({
    age: '',
    height: '',
    weight: '',
    diseases: '',
    allergies: '',
    seletedType: '',

    setAge: (age) => set(() => ({ age: age })),
    setHeight: (height) => set(() => ({ height: height })),
    setWeight: (weight) => set(() => ({ weight: weight })),
    setDisease: (diseases) => set(() => ({ diseases: diseases })),
    setAllergies: (allergies) => set(() => ({ allergies: allergies })),
    setSelectedType: (type) => set(() => ({ seletedType: type }))
}))

export default useFormStore