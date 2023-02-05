"use client";

import Link from "next/link";
import { account } from "@/pages/api/appwriteConfig";
import { useEffect, useState } from "react";

interface UserData {
  $id?: string;
  name?: string;
  email?: string;
  emailVerification?: boolean;
  charAt?: string;
}

const Hero = () => {
  const [userDetails, setUserDetails] = useState<UserData>({});

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


  return (
    <div className="md:container md:mx-auto">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#cc80ff" />
              <stop offset={1} stopColor="#F4E6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hero-title backdrop-filter backdrop-blur-sm text-6xl pt-24 gap-6 font-product font-semibold flex flex-col justify-center items-center">
        <span className="">
          Transform your fitness journey with{" "}
          <span className=" text-violet-500 decoration-rose-400 font-bold underline-custom">
            {" "}
            FitAI{" "}
          </span>
        </span>
        <span>
          The Perfect Fit for Your Perfect{" "}
          <span className="text-violet-500 text-6xl font-bold underline-custom">
            Plans.{" "}
          </span>
        </span>
        <p className="mt-4 text-xl w-[50%] mx-auto leading-8 text-gray-600 sm:text-center">
          Customized workout and diet plans, powered by AI. Say goodbye to generic routines and hello to a virtual personal trainer that adapts to your progress and motivates you towards success.
        </p>
        <div className="mt-12 flex gap-x-8 sm:justify-center">
          <Link
            href={userDetails?.email ? "/form" : "/signup"}
            className="inline-block rounded-lg bg-violet-600 px-4 py-2 text-lg font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-violet-700 hover:ring-violet-700"
          >
            Get started
            <span className="text-violet-200 font-bold" aria-hidden="true">
              &rarr;
            </span>
          </Link>
          <a
            href="#"
            className="inline-block rounded-lg px-4 py-2 text-lg font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Live demo{" "}
            <span className="text-gray-400" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
