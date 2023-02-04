import { create } from "zustand";

type State = {
  age: string;
  height: String;
  weight: string;
  diseases: string;
  allergies: string;
};

type Actions = {
  setAge: (age: string) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setDisease: (diseases: string) => void;
  setAllergies: (allergies: string) => void;
};

const useFormOneStore = create<State & Actions>((set) => ({
  age: "",
  height: "",
  weight: "",
  diseases: "",
  allergies: "",

  setAge: (age) => set(() => ({ age: age })),
  setHeight: (height) => set(() => ({ height: height })),
  setWeight: (weight) => set(() => ({ weight: weight })),
  setDisease: (diseases) => set(() => ({ diseases: diseases })),
  setAllergies: (allergies) => set(() => ({ allergies: allergies })),
}));

export default useFormOneStore;
