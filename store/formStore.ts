import { create } from "zustand";

type State = {
  age: string;
  height: String;
  weight: string;
  diseases: string;
  allergies: string;
  seletedType: string
};

type Actions = {
  setAge: (age: string) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setDisease: (diseases: string) => void;
  setAllergies: (allergies: string) => void;
  setSelectedType: (type: State['seletedType']) => void
};

const useFormOneStore = create<State & Actions>((set) => ({
  age: "",
  height: "",
  weight: "",
  diseases: "",
  allergies: "",
  seletedType: "",
  

  setAge: (age) => set(() => ({ age: age })),
  setHeight: (height) => set(() => ({ height: height })),
  setWeight: (weight) => set(() => ({ weight: weight })),
  setDisease: (diseases) => set(() => ({ diseases: diseases })),
  setAllergies: (allergies) => set(() => ({ allergies: allergies })),
   setSelectedType: (type) => set(() => ({ seletedType: type }))
}));

export default useFormOneStore;

