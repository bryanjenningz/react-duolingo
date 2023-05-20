import Link from "next/link";
import { LanguageDropDown } from "./LanguageDropDown";

export const LanguageHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#235390] px-10 font-bold text-white">
      <Link className="text-4xl" href="/">
        duolingo
      </Link>
      <LanguageDropDown />
    </header>
  );
};
