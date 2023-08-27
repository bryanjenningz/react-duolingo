import type { NextPage } from "next";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { TopBar } from "~/components/TopBar";
import { useBoundStore } from "~/hooks/useBoundStore";
import { SettingsRightNav } from "~/components/SettingsRightNav";

const CoachSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="124" height="124" viewBox="0 0 124 124" {...props}>
      <title>owl-coach</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(7 7)">
          <path
            d="M43.08 107.46a2.491 2.491 0 0 1-2.482-2.5c0-1.38 1.111-2.5 2.482-2.5h47.054c1.37 0 2.482 1.12 2.482 2.5 0 1.382-1.111 2.5-2.482 2.5H43.08z"
            fill="#E2E2E2"
            fillRule="nonzero"
          />
          <path
            d="M25.159 73.981a4.091 4.091 0 0 1 7.698 2.773c-.304.844-.194 1.643.487 2.742a4.091 4.091 0 0 1-6.954 4.312c-1.953-3.148-2.416-6.538-1.231-9.827z"
            fill="#F49000"
            fillRule="nonzero"
          />
          <path
            d="M95.01 3.323c-1.2 1.482-1.733 6.22-1.039 6.776.695.556 5.212-.942 6.412-2.424a3.455 3.455 0 0 0-.514-4.86 3.455 3.455 0 0 0-4.86.508zM9.711 33.555c1.818.926 6.892.43 7.32-.42.427-.85-2.145-5.243-3.962-6.169a3.695 3.695 0 0 0-4.97 1.618 3.695 3.695 0 0 0 1.612 4.971z"
            fill="#97DBFF"
          />
          <path
            d="M3.563 65.492c-2.548-.134-4.224-2.714-3.311-5.095 4.388-11.44 15.805-18.9 28.363-18.24 12.558.66 23.134 9.274 26.305 21.11.66 2.465-1.277 4.854-3.825 4.72L3.563 65.493z"
            fill="#78C800"
            fillRule="nonzero"
          />
          <path
            d="M97.59 13.864c1.773-1.835 4.82-1.408 6.017.843 5.755 10.817 3.895 24.327-4.842 33.372-8.736 9.045-22.176 11.376-33.19 6.003-2.292-1.118-2.825-4.148-1.053-5.983L97.59 13.864z"
            fill="#71BD00"
            fillRule="nonzero"
          />
          <path
            d="M36.19 18.796c13.644 1.075 22.368 1.208 26.173.4 2.186-.465 4.264-1.885 6.235-4.26 3.751-4.523 10.457-5.147 14.979-1.396a10.638 10.638 0 0 1 3.613 5.975l6.704 31.54c3.64 17.124-7.29 33.956-24.415 37.596-17.123 3.64-33.956-7.291-37.595-24.415l-6.935-32.623c-1.221-5.747 2.447-11.395 8.194-12.617 1-.213 2.027-.28 3.047-.2z"
            fill="#78C800"
          />
          <path
            d="M73.464 44.091l-6.563 1.395c-.009 5.45-3.811 10.341-9.356 11.52l-.972.207c-6.38 1.356-12.651-2.717-14.007-9.097l-1.507-7.091a11.81 11.81 0 0 1 4.31-11.788 8.264 8.264 0 0 1 .349-3.514c.23-.71 1.089-.989 1.694-.55l2.406 1.747a8.294 8.294 0 0 1 .13-4.676c.232-.711.892-.947 1.497-.508l11.46 8.133c3.03 1.31 6.484-.08 7.977-2.648.267-.448.525-.794.774-1.04A9.323 9.323 0 0 1 89.17 28.3l2.541 11.955a9.323 9.323 0 1 1-18.238 3.877l-.009-.041z"
            fill="#8EE000"
          />
          <path
            d="M78.098 25.71a6.969 6.969 0 0 1 8.265 5.368l1.794 8.442a6.969 6.969 0 1 1-13.632 2.898l-1.795-8.442a6.969 6.969 0 0 1 5.368-8.266z"
            fill="#FFF"
          />
          <path
            d="M82.196 32.598a1.833 1.833 0 0 1 2.149 1.45l.67 3.448a1.833 1.833 0 0 1-3.598.7l-.67-3.45a1.833 1.833 0 0 1 1.45-2.148z"
            fill="#4B4B4B"
          />
          <path
            d="M91.351 38.563l.36 1.692a9.323 9.323 0 0 1-7.18 11.057 9.287 9.287 0 0 1-6.443-.956l-3.37-4.623c4.579-3.337 10.137-5.716 16.633-7.17z"
            fill="#8EE000"
          />
          <path
            d="M63.498 66.84l7.803-1.66c.418-.09.796.234.747.638-.236 1.943-1.776 3.578-3.837 4.017-2.062.44-4.132-.427-5.137-2.106-.209-.35.006-.8.424-.888zM76.386 64.101l7.803-1.661c.418-.09.797.234.748.639-.236 1.943-1.776 3.578-3.838 4.017-2.061.439-4.132-.428-5.136-2.107-.21-.349.005-.799.423-.888zM71.704 71.968l7.803-1.661c.418-.09.797.234.748.638-.236 1.944-1.776 3.579-3.838 4.018-2.061.439-4.132-.428-5.136-2.107-.21-.35.005-.799.423-.888z"
            fill="#8EE000"
            fillRule="nonzero"
          />
          <path
            d="M51.877 30.964a8.712 8.712 0 0 1 10.333 6.71l1.121 5.276a8.712 8.712 0 0 1-17.043 3.622l-1.121-5.275a8.712 8.712 0 0 1 6.71-10.333z"
            fill="#FFF"
          />
          <path
            d="M56.846 37.562a2.291 2.291 0 0 1 2.718 1.765l.54 2.54a2.291 2.291 0 1 1-4.482.953l-.54-2.54a2.291 2.291 0 0 1 1.764-2.718z"
            fill="#4B4B4B"
          />
          <path
            fill="#8EE000"
            d="M46.265 49.46l8.726-2.869 6.716 4.856-7.21 3.544-6.985-2.5z"
          />
          <path
            d="M45.9 50.749l-.938-7.63c5.635-.693 12.166-.287 19.61 1.187l-1.492 7.54c-6.697-1.326-12.43-1.681-17.18-1.097z"
            fill="#8EE000"
            fillRule="nonzero"
          />
          <path
            d="M68.042 46.545l.025-.005a4.87 4.87 0 0 1 5.71 3.851l.523 2.691a4.87 4.87 0 0 1-3.851 5.71l-.025.005a4.87 4.87 0 0 1-5.71-3.852l-.523-2.69a4.87 4.87 0 0 1 3.851-5.71z"
            fill="#F49000"
          />
          <path
            d="M65.817 47.097l6.151-1.727a3.348 3.348 0 0 1 3.08 5.767c-.512.439-.951.714-1.348.822-.692.19-3.081 2.217-6.88 5.91a3.348 3.348 0 0 1-5.676-2.2l-.11-1.853a6.571 6.571 0 0 1 4.783-6.72z"
            stroke="#F49000"
            strokeWidth="1.24"
            fill="#BA6E00"
          />
          <path
            d="M70.319 53.742c-1.07.947-2.38 2.175-3.932 3.683a2.728 2.728 0 0 1-4.624-1.793l-.109-1.818a4.92 4.92 0 0 1 3.41-2.522 4.935 4.935 0 0 1 5.255 2.45z"
            fill="#FFAFAF"
          />
          <path
            d="M65.24 47.895c-.086-2.998 2.06-5.66 5.09-6.249 3.03-.589 5.948.943 6.993 3.754l-2.662 1.942-9.416.76-.006-.207z"
            fill="#FFC200"
            fillRule="nonzero"
          />
          <path
            d="M69.927 44.638a.886.886 0 1 1-.868-1.546 5.293 5.293 0 0 1 3.34-.65.886.886 0 0 1-.227 1.76 3.522 3.522 0 0 0-2.245.436z"
            fill="#FFDE00"
            fillRule="nonzero"
          />
          <path
            d="M23.964 29.215c14.092-6.199 26.519-10.054 37.28-11.566 10.271-1.442 18.8-2.391 25.584-2.847a1.984 1.984 0 0 1 2.06 1.51l1.542 6.33a1.984 1.984 0 0 1-1.806 2.45c-6.813.419-15.458 1.364-25.934 2.835-11.104 1.56-23.16 4.939-36.168 10.136a1.984 1.984 0 0 1-2.683-1.458l-1.022-5.191a1.984 1.984 0 0 1 1.147-2.2z"
            fill="#F34848"
          />
          <path
            d="M89.235 17.735l.952 3.91c-22.358.434-44.516 5.207-66.474 14.318l-.679-3.446c14.806-6.018 26.72-9.82 35.745-11.409 9.14-1.609 20.473-3.317 30.456-3.373z"
            fill="#FFF"
          />
          <path
            d="M69.223 94.711l7.136-2.883a3.983 3.983 0 1 1 2.985 7.386l-7.136 2.883a3.983 3.983 0 1 1-2.985-7.386z"
            fill="#F49000"
          />
          <ellipse
            fill="#97DBFF"
            cx="86.817"
            cy="6.667"
            rx="1.989"
            ry="1.992"
          />
        </g>
      </g>
    </svg>
  );
};

const goalXpOptions = [
  { title: "Basic", xp: 1 },
  { title: "Casual", xp: 10 },
  { title: "Regular", xp: 20 },
  { title: "Serious", xp: 30 },
  { title: "Intense", xp: 50 },
] as const;

const Coach: NextPage = () => {
  const goalXp = useBoundStore((x) => x.goalXp);
  const setGoalXp = useBoundStore((x) => x.setGoalXp);

  const [localGoalXp, setLocalGoalXp] = useState(goalXp);
  return (
    <div>
      <TopBar />
      <LeftBar selectedTab={null} />
      <BottomBar selectedTab={null} />
      <div className="mx-auto flex flex-col gap-5 px-4 py-20 sm:py-10 md:pl-28 lg:pl-72">
        <div className="mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-4xl">
          <h1 className="text-lg font-bold text-gray-800 sm:text-2xl">
            Edit Daily Goal
          </h1>
          <button
            className="rounded-2xl border-b-4 border-green-600 bg-green-500 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 disabled:border-b-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:brightness-100"
            onClick={() => setGoalXp(localGoalXp)}
            disabled={localGoalXp === goalXp}
          >
            Save changes
          </button>
        </div>
        <div className="flex justify-center gap-12">
          <div className="flex w-full max-w-xl flex-col gap-8">
            <p className="text-gray-400">
              Coach here! Selecting a daily goal will help you stay motivated
              while learning a language. You can change your goal at any time.
            </p>
            <div className="flex gap-5">
              <CoachSvg className="hidden h-52 w-52 sm:block" />
              <div className="grow">
                {goalXpOptions.map(({ title, xp }, i) => {
                  return (
                    <button
                      key={title}
                      className={[
                        "flex w-full items-center justify-between border-2 p-4 first:rounded-t-2xl last:rounded-b-2xl last:border-b-2",
                        xp === localGoalXp
                          ? "border-b-2 border-blue-400 bg-blue-100 text-blue-500"
                          : "border-t-0 border-gray-200 first:border-t-2 hover:bg-gray-100",
                        goalXpOptions[i + 1]?.xp === localGoalXp
                          ? "border-b-0"
                          : "",
                      ].join(" ")}
                      onClick={() => setLocalGoalXp(xp)}
                    >
                      <div className="font-bold">{title}</div>
                      <div>{xp} XP per day</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <SettingsRightNav selectedTab="Edit Daily Goal" />
        </div>
      </div>
    </div>
  );
};

export default Coach;
