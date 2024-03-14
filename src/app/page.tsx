"use client";
import { GoogleCaptchaWrapper } from "@/components/GoogleCaptchaWrapper";
import { HomePage } from "@/components/HomePage";
import { GlobalContextProvider } from "@/context/store";
import GlobalStyle from "@/styles/global";
import consoleMessage from "@/utils/consoleMessage";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    consoleMessage();
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
