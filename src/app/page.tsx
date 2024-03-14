"use client";
import { GoogleCaptchaWrapper } from "@/components/GoogleCaptchaWrapper";
import { HomePage } from "@/components/HomePage";
import { GlobalContextProvider } from "@/context/store";
import GlobalStyle from "@/styles/global";
import consoleMessage from "@/utils/consoleMessage";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleLoad = () => {
      consoleMessage();
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>
        <GoogleCaptchaWrapper>
          <HomePage />
        </GoogleCaptchaWrapper>
      </GlobalContextProvider>
    </>
  );
}
