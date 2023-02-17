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
