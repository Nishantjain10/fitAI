"use client";
import Link from "next/link";
import type { FC } from "react";
import { useState, useEffect } from "react";
import fitAIimg from "@/public/images/flexed-biceps_fitAI.png";
import Image from "next/image";
import { account } from "@/pages/api/appwriteConfig";
import { useRouter, usePathname } from "next/navigation";

interface NavbarProps {
  isLandingPage?: boolean;
}

interface UserData {
  $id?: string;
  name?: string;
  email?: string;
  emailVerification?: boolean;
  charAt?: string;
}
const Navbar: FC<NavbarProps> = ({}) => {
  const [activeButton, setActiveButton] = useState("");
  const [userDetails, setUserDetails] = useState<UserData>({});
  const router = useRouter();
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  // function for logging signed user out
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      router.push("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <div
      className={`navbar backdrop-blur-2xl  font-product md:mx-auto py-10 px-24 flex items-center bg-cover bg-no-repeat justify-between
      max-sm:backdrop-blur-none max-sm:bg-none max-sm:overflow-hidden max-sm:py-4 ${
        isLandingPage && 'bg-[url("../public/images/navbar-checks-bg.svg")]'
      }`}
    >
      <div className="text-4xl font-semibold flex flex-row justify-center items-center gap-1 text-violet-600
       max-sm:mx-auto">
        <Image className="w-10 h-10" src={fitAIimg} alt={""} />
        <a href="/">
          <span> fitai. </span>
        </a>
      </div>
      <div className="flex justify-center items-center gap-10 font-medium text-violet-600 text-lg max-sm:hidden">
        <Link href="/">
          <button className="hover:text-violet-700" id="home-button">
            Home
          </button>
        </Link>

        <button id="trainer-button">
          <a href="#trainers">Trainers</a>
        </button>

        {userDetails.email ? (
          <div className="flex items-center gap-10">
            <Link href="/dashboard">
              <button
                className=" border border-hover:border-[#F3BC34] rounded-md px-3 py-2 hover:bg-violet-600 hover:text-white transition-all"
                id="signup-button flex items-center gap-4"
              >
                <span className="w-8 h-8 rounded-full bg-gray-200"></span>
                <span>Profile</span>
              </button>
            </Link>
            <button
              className="bg-[#FF4C6E] text-white p-2 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-12">
            <Link href="/login">
              <button
                className="border-2 border-violet-500 text-violet-500 rounded-md px-6 py-2  transition-all"
                id="login-button"
              >
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button
                className="bg-violet-600 text-white rounded-md px-4 py-2 hover:bg-violet-500 transition-all"
                id="signup-button"
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
