"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import useFormOneStore from "@/store/formStore";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [login, setLogin] = useState(false);
  const ALAN_Key = `${process.env.NEXT_PUBLIC_ALAN_KEY!}`;
  const [state] = useFormOneStore((state) => [state]);
  useEffect(() => {
    // alanBtn({
    //   key: ALAN_Key,
    //   onCommand: (commandData) => {
    //     //@ts-ignore
    //     if (commandData.command === "home") {
    //       (document.getElementById("home-button") as HTMLInputElement).click();
    //       console.log("home-working");
    //       console.log(document.getElementById("home-button"));
    //     }
    //     //@ts-ignore
    //     if (commandData.command === "login") {
    //       (document.getElementById("login-button") as HTMLInputElement).click();
    //       console.log("login-working");
    //       console.log(document.getElementById("login-button"));
    //     }
    //     //@ts-ignore
    //     if (commandData.command === "signup") {
    //       (
    //         document.getElementById("signup-button") as HTMLInputElement
    //       ).click();
    //       console.log("signup-working");
    //       console.log(document.getElementById("signup-button"));
    //     }
    //   },
    // });
  }, []);
  if (state.loading)
    return (
      <html lang="en">
        <body id="root">
          <Loader />
        </body>
      </html>
    );

  return (
    <html lang="en">
      <body id="root">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
