import trainerOne from "public/images/trainerOne.jpg";
import trainerTwo from "public/images/trainerTwo.jpg";
import trainerThree from "public/images/trainerThree.jpg";
import Image from "next/image";

const trainer = () => {
  return (
    <div
      id="trainers"
      className=" md:mx-auto py-24 font-product text-center gap-2"
    >
      <div className="title flex flex-col justify-center items-center">
        <h2 className="mt-2 text-6xl font-extrabold w-[20ch] tracking-tight max-sm:text-4xl max-sm:w-[14ch]">
          Maximize your potential with a
          <span className="text-violet-500"> professional trainer.</span>
        </h2>
        <p className="mt-8 text-xl mx-auto w-[26%] max-sm:text-lg max-sm:w-[30ch]">
          At FitAI, our certified trainers will work with you to develop a
          comprehensive fitness plan tailored to your unique needs and goals.
        </p>
      </div>
      <div className="flex font-product flex-row mx-auto justify-center transition-all mt-24 gap-44 items-center max-sm:flex-col max-sm:gap-12 ">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full scale-x-[-1] w-[14rem] h-[14rem] border hover:border-product-yellow object-cover "
            src={trainerOne}
            alt="trainer_img"
          />
          <span className="text-xl font-medium mt-6 text-violet-500">
            John Doe
          </span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full scale-x-[-1] w-[22rem] h-[22rem] border hover:border-product-yellow object-cover  "
            src={trainerTwo}
            alt="trainer_img"
          />
          <span className="text-2xl font-medium mt-6 text-violet-500">
            John Doe
          </span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-full object-cover  w-[14rem] h-[14rem] border hover:border-[#F3BC34]  "
            src={trainerThree}
            alt=""
          />
          <span className="text-xl font-medium mt-6 text-violet-500">
            John Doe
          </span>
        </div>
      </div>
    </div>
  );
};

export default trainer;
