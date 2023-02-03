"use client";
import { Button, TextField } from "@mui/material";
import { FC, MouseEvent, useState } from "react";

interface testProps {}

type FormDataType = {
  weight: string;
  height: string;
  age: string;
  diseases: string;
  allergies: string;
  region: string;
  exerciseOrDiet: string;
  expertise: string;
  time: string;
};

const test: FC<testProps> = ({}) => {
  const [answer, setAnswer] = useState("");
  const [formData, setFormData] = useState<FormDataType>({
    weight: "60",
    height: `5'10`,
    age: "20",
    diseases: "none",
    allergies: "peanut",
    region: "india",
    exerciseOrDiet: "exercise",
    expertise: "intermediate",
    time: "2 months",
  });

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAnswer("");
    if (formData.weight === "") {
      alert("no data");
      return;
    }

    const prompt = `You are given a user's data, now you gotta generate a ${formData.time} ${formData.exerciseOrDiet} for that user that is ${formData.expertise} in this
        weight: ${formData.weight} \n
        height: ${formData.height} \n
        age: ${formData.age} \n
        diseases: ${formData.diseases} \n
        allergies: ${formData.allergies} \n
        region: ${formData.region} \n
    `;

    const results = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({
        prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    console.log(results, "answer");
    setAnswer(results.result.choices[0].text);
  };

  //   const html = answer.replace(/\n/g, "<br>");

  return (
    <div>
      <div className="flex items-center gap-12 flex-wrap max-w-6xl">
        <TextField
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
          label="weight"
          variant="outlined"
        />
        <TextField
          value={formData.height}
          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
          label="height"
          variant="outlined"
        />
        <TextField
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          label="age"
          variant="outlined"
        />
        <TextField
          value={formData.diseases}
          onChange={(e) =>
            setFormData({ ...formData, diseases: e.target.value })
          }
          label="diseases"
          variant="outlined"
        />
        <TextField
          value={formData.allergies}
          onChange={(e) =>
            setFormData({ ...formData, allergies: e.target.value })
          }
          label="allergies"
          variant="outlined"
        />
        <TextField
          value={formData.region}
          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
          label="region"
          variant="outlined"
        />
        <TextField
          value={formData.exerciseOrDiet}
          onChange={(e) =>
            setFormData({ ...formData, exerciseOrDiet: e.target.value })
          }
          label="exercise or diet plan"
          variant="outlined"
        />
        <TextField
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          label="time duration"
          variant="outlined"
        />
        <Button
          type="submit"
          onClick={handleClick}
          className="w-fit text-black"
          variant="contained"
        >
          Submit
        </Button>
      </div>
      <p className="text-lg bg-yellow-200 p-12 w-full mt-12">
        {answer && answer}
      </p>
      {/* <div
        className="text-lg bg-blue-200 p-12 w-full mt-12"
        dangerouslySetInnerHTML={{ __html: html }}
      /> */}
    </div>
  );
};

export default test;
