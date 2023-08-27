import type { NextPage } from "next";
import React, { useState } from "react";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { TopBar } from "~/components/TopBar";
import { SettingsRightNav } from "~/components/SettingsRightNav";
import { useBoundStore } from "~/hooks/useBoundStore";

const Account: NextPage = () => {
  const name = useBoundStore((x) => x.name);
  const setName = useBoundStore((x) => x.setName);
  const [localName, setLocalName] = useState(name);

  const username = useBoundStore((x) => x.username);
  const setUsername = useBoundStore((x) => x.setUsername);
  const [localUsername, setLocalUsername] = useState(username);

  const accountOptions = [
    { title: "Name", value: localName, setValue: setLocalName },
    { title: "Username", value: localUsername, setValue: setLocalUsername },
  ];

  return (
    <div>
      <TopBar />
      <LeftBar selectedTab={null} />
      <BottomBar selectedTab={null} />
      <div className="mx-auto flex flex-col gap-5 px-4 py-20 sm:py-10 md:pl-28 lg:pl-72">
        <div className="mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-4xl">
          <h1 className="text-lg font-bold text-gray-800 sm:text-2xl">
            Account
          </h1>
          <button
            className="rounded-2xl border-b-4 border-green-600 bg-green-500 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 disabled:border-b-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:brightness-100"
            onClick={() => {
              setName(localName);
              setUsername(localUsername);
            }}
            disabled={name === localName && username === localUsername}
          >
            Save changes
          </button>
        </div>
        <div className="flex justify-center gap-12">
          <div className="flex w-full max-w-xl flex-col gap-8">
            {accountOptions.map(({ title, value, setValue }) => {
              return (
                <div
                  key={title}
                  className="flex flex-col items-stretch justify-between gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-10 sm:pl-10"
                >
                  <div className="font-bold sm:w-1/6">{title}</div>
                  <input
                    className="grow rounded-2xl border-2 border-gray-200 p-4 py-2"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              );
            })}
          </div>
          <SettingsRightNav selectedTab="Account" />
        </div>
      </div>
    </div>
  );
};

export default Account;
