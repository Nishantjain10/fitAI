"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/pages/api/appwriteConfig";
import Link from "next/link";
import GraphSvg from "public/images/github-contribution-grid-snake.svg";
import Image from "next/image";
import useFormOneStore from "@/store/formStore";
import Footer from "../components/Footer";

interface UserData {
  $id?: string;
  name?: string;
  email?: string;
  emailVerification?: boolean;
  charAt?: string;
}

const page: React.FC = () => {
  const [state] = useFormOneStore((state) => [state]);
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserData>({});
  let firstLetter = "";
  if (userDetails.email) {
    firstLetter = userDetails.email.charAt(0).toUpperCase();
  }

  // fetching user data
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response: any) {
        setUserDetails(response);
      },
      function (error: any) {
        console.log(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // replaces all newline characters with HTML line break tags
  const html = state?.answer?.replace(/\n/g, "<br>");

  return (
    <>
      {userDetails ? (
        <>
          <div className="md:container md:mx-auto shadow-xl font-product flex flex-row items-center justify-between py-3 px-4 mt-8 border border-black max-sm:overflow-hidden">
            <div>
              <button
                className="bg-[#FF4C6E] text-white p-2 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            <div className="text-xl flex items-center gap-2 max-sm:text-lg">
              <span> Hello, {userDetails.name}! </span>
              <div className="bg-violet-500 w-[50px] h-[50px] rounded-full flex justify-center items-center text-white">
                {firstLetter}
              </div>
            </div>
          </div>
          <div className="form bg-violet-500 text-white  shadow-lg py-24 rounded-md mt-12  md:mx-auto px-12 border">
            <div className="title mt- font-product flex flex-row justify-center items-center">
              <h2 className="mt-2 text-6xl text-white  font-bold tracking-tight">
                Personal Information
              </h2>
            </div>
            <div className="font-product grid gap-6 mt-24 md:grid-cols-2 md:container md:mx-auto">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md text-black rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="John"
                  value={userDetails.name}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Email
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md text-black rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="John"
                  value={userDetails.email}
                  required
                />
              </div>
            </div>
            <div className="font-product grid gap-6 mt-12 md:grid-cols-2 md:container md:mx-auto">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="95XX4 86XX21"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Country
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="INDIA"
                  required
                />
              </div>
            </div>
            <div className="font-product grid gap-6 mt-12 md:grid-cols-2 md:container md:mx-auto">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="8, Angels Avenue"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold  "
                >
                  Locality
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-black shadow-md rounded-sm py-3 pl-3 w-full font-medium "
                  placeholder="San Diego, California"
                  required
                />
              </div>
            </div>

            <div className="font-product flex flex-row items-center justify-center md:container md:mx-auto mt-12 max-sm:flex-col max-sm:mt-4">
              <div className="justify-self-center w-auto font-product font-medium">
                <button className=" px-4 py-3 font-semibold rounded-md  bg-black text-white mx-8 mt-7 hover:scale-105 transition-all">
                  Verify Number
                </button>
              </div>
              <div className="justigy-self-start w-auto font-product font-medium">
                <button className="rounded-md px-4 py-3 font-semibold  bg-black text-white mx-8 mt-7 hover:border hover:border-black  hover:scale-105 transition-all">
                  Email Verification :
                  {userDetails.emailVerification ? "Verified" : "Not-Verified"}
                </button>
              </div>
              <div className="justify-self-center w-auto font-product font-medium">
                <button className="bg-lime-600 shadow-sm text-white px-4 py-3 font-semibold rounded-md mx-8 mt-7 hover:scale-105 transition-all">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
          <div className="plans-section mt-32 font-product flex flex-col justify-center items-center">
            <h2 className="mt-2 text-6xl text-violet-500 font-bold tracking-tight max-sm:tracking-tighter max-sm:text-5xl">
              Track Progress
            </h2>
            <Image
              className=" border border-violet-500 shadow-md mt-24 rounded-md  scale-125 max-sm:hidden"
              src={GraphSvg}
              alt={""}
            ></Image>
            <div className="w-[80ch] text-left text-base text-violet-700 font-medium md:mx-auto py-16 max-sm:w-[30ch] max-sm:text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam soluta doloremque amet corporis fugit unde, possimus
              laudantium similique delectus nostrum rem blanditiis error
              mollitia praesentium, asperiores odit deserunt! Voluptatum
              officiis, dolores repudiandae voluptates, libero vel nulla dolor
              soluta officia laboriosam nemo similique, aliquid facere quod
              fugiat minima deleniti eius quidem iste maiores vitae amet! Quis
              officia, doloribus perferendis asperiores velit officiis ratione
              illum est excepturi recusandae, autem molestiae aliquam. Ut, odit
              aperiam! Quas ea aut deserunt sint, consequatur magnam praesentium
              id, ipsa modi consectetur, atque velit porro et quia? Cumque
              officiis iste sit ullam, non minus aliquid. Veritatis, deleniti
              atque?
            </div>
          </div>
          <div className="plans-section bg-violet-500 mt-24 py-24 font-product flex flex-col justify-center items-center">
            <h2 className="mt-2 text-6xl text-white font-bold  tracking-tight">
              Saved Plans
            </h2>
            <div
              className="w-[1300px] h-[600px] bg-white overflow-auto p-12 rounded-md mt-24 border-2 text-left border-black max-sm:w-full max-sm:h-[800px]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div className="font-product flex flex-row  py-12 items-center border-2 justify-center md:container md:mx-auto mt-12 max-sm:flex-col">
            <div className="justify-self-center w-auto font-product font-medium">
              <button className=" px-4 py-3 font-semibold rounded-md  bg-violet-600 text-white mx-8 mt-7 hover:scale-105 transition-all">
                Regenerate💫
              </button>
            </div>
            <div className="justigy-self-start w-auto font-product font-medium">
              <button className="rounded-md px-5 py-3 font-semibold  bg-violet-600 text-white mx-8 mt-7 hover:border hover:border-black  hover:scale-105 transition-all">
                Add your Diet🤩
              </button>
            </div>
            <div className="justify-self-center w-auto font-product font-medium">
              <button className="bg-lime-600 shadow-sm text-white px-4 py-3 font-semibold rounded-md mx-8 mt-7 hover:scale-105 transition-all">
                Share Profile🚀
              </button>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link href="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
};

export default page;
