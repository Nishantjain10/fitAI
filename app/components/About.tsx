import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import fitnessIcon from "@/public/images/aboutSectionFour.svg";
import fitnessIconSecond from "@/public/images/aboutSectionOne.svg";
import fitnessIconThird from "@/public/images/aboutSectionTwo.svg";
import fitnessIconFour from "@/public/images/aboutSectionThree.svg";

const about = () => {
  return (
    <div className="about-section font-product  pb-44 pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center flex flex-col justify-center items-center">
          <h2 className=" font-semibold text-2xl leading-8 text-violet-600">
            Fitness
          </h2>
          <p className="mt-6 text-6xl leading-tight text-black font-extrabold  w-[16ch]">
            A better way to improve your
            <span className=" text-violet-600"> Health </span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 w-[40%] ">
            Take control of your health and reach your fitness goals with FitAI,
            your virtual personal trainer. With customized exercise and diet
            plans based on AI technology.
          </p>
        </div>

        <div className="pt-36 flex flex-col justify-center gap-20">
          <div className="flex flex-row justify-around items-center">
            <div className="text-content flex flex-col justify-center items-center gap-4">
              <div className="border-2 border-violet-600 rounded-md w-[440px] h-[300px] flex justify-center items-center">
                <Image src={fitnessIcon} className="w-[48%]" alt={""}></Image>
              </div>
              <div className="w-[400px] text-2xl font-medium">
                Transform Your Diet: Say goodbye to boring and unhealthy meals
                with our personalized nutrition plan.
              </div>
            </div>
            <div className="text-content flex flex-col justify-center items-center gap-4">
              <div className="border-2 border-violet-600 rounded-md w-[440px] h-[300px] flex justify-center items-center">
                <Image
                  src={fitnessIconSecond}
                  className="w-[58%] mt-8"
                  alt={""}
                ></Image>
              </div>
              <div className="w-[420px] text-2xl font-medium">
                Get Moving: Our exercise program is tailored to your fitness
                level and goals, keeping you motivated and on track.
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around items-center">
            <div className="text-content flex flex-col justify-center items-center gap-4">
              <div className="border-2 border-violet-600 rounded-md w-[440px] h-[300px] flex justify-center items-center">
                <Image
                  src={fitnessIconThird}
                  className="w-[48%]"
                  alt={""}
                ></Image>
              </div>
              <div className="w-[400px] text-2xl font-medium">
                Track Your Progress: Monitor your progress and celebrate your
                wins with our easy-to-use tracking tools.
              </div>
            </div>
            <div className="text-content flex flex-col justify-center items-center gap-4">
              <div className="border-2 border-violet-600 rounded-md w-[440px] h-[300px] flex justify-center items-center">
                <Image
                  src={fitnessIconFour}
                  className="w-[48%]"
                  alt={""}
                ></Image>
              </div>
              <div className="w-[400px] text-2xl font-medium">
                Expert Support: Get the support you need from our team of
                certified health professionals, available 24/7.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
