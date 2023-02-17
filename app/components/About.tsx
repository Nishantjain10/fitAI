import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Get the best deal for your money with competitive exchange rates. No hidden fees, no surprises.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Say goodbye to unexpected fees and hidden charges. With us, what you see is what you get.",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description:
      "Experience fast and hassle-free transfers with our instant transfer service.",
    icon: BoltIcon,
  },
  {
    name: "Mobile notifications",
    description:
      "Stay informed and on top of your transfers with mobile notifications. Get real-time updates on the go.",
    icon: DevicePhoneMobileIcon,
  },
];

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
            <div className="text-content flex flex-col justify-center items-center gap-2">
              <div className="border-2 border-violet-600 rounded-md w-[440px] h-[300px]"></div>
              <div className="w-[400px] text-2xl font-medium">
                Transform Your Diet: Say goodbye to boring and unhealthy meals
                with our personalized nutrition plan.
              </div>
            </div>
            <div className="text-content flex flex-col justify-center items-center gap-2">
              <div className="border-2 border-violet-600 rounded-md w-[440px] h-[300px]"></div>
              <div className="w-[420px] text-2xl font-medium">
                Get Moving: Our exercise program is tailored to your fitness
                level and goals, keeping you motivated and on track.
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around items-center">
            <div className="text-content flex flex-col justify-center items-center gap-2">
              <div className="border-2 border-violet-600 rounded-md w-[440px] h-[300px]"></div>
              <div className="w-[400px] text-2xl font-medium">
                Track Your Progress: Monitor your progress and celebrate your
                wins with our easy-to-use tracking tools.
              </div>
            </div>
            <div className="text-content flex flex-col justify-center items-center gap-2">
              <div className="border-2 border-violet-600 rounded-md w-[440px] h-[300px]"></div>
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
