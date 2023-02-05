import { create } from "zustand";

type State = {
  age: string;
  height: String;
  weight: string;
  diseases: string;
  allergies: string;
  selectedType: string;
  selectedPlan: string;
  exerciseType: string;
  exerciseExperience: string;
  foodPreference: string;
  dietBudget: string;
  dietType: string;
  timeDuration: string;
  answer: string;
  loading: boolean
};

type Actions = {
  setAge: (age: string) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setDisease: (diseases: string) => void;
  setAllergies: (allergies: string) => void;
  setSelectedType: (type: string) => void;
  setSelectedPlan: (plan: string) => void;
  setExerciseType: (type: string) => void;
  setExerciseExperience: (exp: string) => void;
  setFoodPreference: (food: string) => void;
  setDietBudget: (budget: string) => void;
  setDietType: (type: string) => void;
  setTimeDuration: (time: string) => void;
  setAnswer: (answer: string) => void;
  setLoading: (value: boolean) => void
};

const useFormOneStore = create<State & Actions>((set) => ({
  age: "",
  height: "",
  weight: "",
  diseases: "",
  allergies: "",
  selectedType: "",
  selectedPlan: "",
  exerciseType: "",
  exerciseExperience: "",
  foodPreference: "",
  dietBudget: "",
  dietType: "",
  timeDuration: "",
  answer: "",
  commandData: "",
  loading: false,

  setAge: (age) => set(() => ({ age: age })),
  setHeight: (height) => set(() => ({ height: height })),
  setWeight: (weight) => set(() => ({ weight: weight })),
  setDisease: (diseases) => set(() => ({ diseases: diseases })),
  setAllergies: (allergies) => set(() => ({ allergies: allergies })),
  setSelectedType: (type) => set(() => ({ selectedType: type })),
  setSelectedPlan: (plan) => set(() => ({ selectedPlan: plan })),
  setExerciseType: (type) => set(() => ({ exerciseType: type })),
  setExerciseExperience: (exp) => set(() => ({ exerciseExperience: exp })),
  setFoodPreference: (food) => set({ foodPreference: food }),
  setDietBudget: (budget) => set({ dietBudget: budget }),
  setDietType: (type) => set({ dietType: type }),
  setTimeDuration: (time) => set({ timeDuration: time }),
  setAnswer: (answer) => set(() => ({ answer: answer })),
  setLoading: (value) => set(() => ({ loading: value }))
}));

export default useFormOneStore;
