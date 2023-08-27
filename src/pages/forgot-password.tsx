import type { NextPage } from "next";
import Link from "next/link";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import { LanguageDropDown } from "~/components/LanguageDropDown";
import type { LoginScreenState } from "~/components/LoginScreen";
import { LoginScreen } from "~/components/LoginScreen";

const MenuIconSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
      <title>Artboard</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(5 10)" fill="#FFF" fillRule="nonzero">
          <rect x="0" y="16" width="30" height="4" rx="2" />
          <rect x="0" y="8" width="30" height="4" rx="2" />
          <rect x="0" y="0" width="30" height="4" rx="2" />
        </g>
      </g>
    </svg>
  );
};

const ForgotPassword: NextPage = () => {
  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="flex h-[70px] w-full justify-center bg-blue-400 font-bold text-white">
        <div className="flex max-w-5xl grow items-center justify-between px-5">
          <Link className="text-3xl" href="/">
            duolingo
          </Link>
          <div className="hidden items-center gap-5 md:flex">
            <LanguageDropDown />
            <button
              className="rounded-2xl border-b-4 border-blue-300 bg-white px-4 py-2 uppercase text-blue-800 transition hover:brightness-110"
              onClick={() => setLoginScreenState("LOGIN")}
            >
              Login
            </button>
            <Link
              href="/register"
              className="rounded-2xl border-b-4 border-green-600 bg-green-500 px-4 py-2 uppercase text-white transition hover:brightness-110"
            >
              Get started
            </Link>
          </div>
          <div
            className="relative flex md:hidden"
            onClick={() => setMobileMenuShown((x) => !x)}
            role="button"
            tabIndex={0}
          >
            <MenuIconSvg aria-hidden="true" />
            {mobileMenuShown && (
              <div className="absolute right-0 top-full rounded-2xl border-2 border-gray-300 bg-white font-bold text-gray-700">
                <Link
                  className="block min-w-max cursor-pointer rounded-t-2xl px-5 py-2 hover:bg-gray-100"
                  href="/?login"
                >
                  Sign in
                </Link>
                <Link
                  className="block min-w-max cursor-pointer border-t-2 border-gray-300 px-5 py-2 hover:bg-gray-100"
                  href="/register"
                >
                  Get started
                </Link>
                <div className="min-w-max cursor-pointer rounded-b-2xl border-t-2 border-gray-300 px-5 py-2 hover:bg-gray-100">
                  Site language: English
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="flex w-full grow flex-col items-center gap-5 px-5 pt-5 sm:w-96 sm:pt-52">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Forgot password
        </h1>
        <p className="text-center text-gray-800">
          We will send you instructions on how to reset your password by email.
        </p>
        <div className="flex w-full flex-col gap-2">
          <input
            className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
            placeholder="Email"
          />
          <button className="w-full rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110">
            Submit
          </button>
        </div>
      </div>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </div>
  );
};

export default ForgotPassword;
