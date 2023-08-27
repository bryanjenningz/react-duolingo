import Link from "next/link";
import { ChevronLeftSvg, ChevronRightSvg } from "./Svgs";
import React, { useRef } from "react";
import languages from "~/utils/languages";
import { useBoundStore } from "~/hooks/useBoundStore";
import { Flag } from "./Flag";

declare global {
  interface Element {
    offsetLeft: number;
  }
}

const scrollCarousel = ({
  container,
  startIndexRef,
  endIndex,
}: {
  container: Element;
  startIndexRef: React.MutableRefObject<number>;
  endIndex: number;
}) => {
  const startIndex = startIndexRef.current;
  const startChild = container.children[startIndex];
  const endChild = container.children[endIndex];
  if (!startChild || !endChild) return;
  const startX = startChild.offsetLeft - container.offsetLeft;
  const endX = endChild.offsetLeft - container.offsetLeft;
  const startTime = Date.now();
  const intervalTime = 500;
  const endTime = Date.now() + intervalTime;
  const tick = () => {
    const nowTime = Date.now();
    if (nowTime >= endTime) {
      container.scrollTo(endX, 0);
      return;
    }
    const dx = ((nowTime - startTime) / intervalTime) * (endX - startX);
    container.scrollTo(startX + dx, 0);
    requestAnimationFrame(tick);
  };
  tick();
  startIndexRef.current = endIndex;
};

const scrollCarouselLeft = ({
  languagesContainer,
  startIndexRef,
  lastLanguageIndex,
}: {
  languagesContainer: React.MutableRefObject<HTMLDivElement | null>;
  startIndexRef: React.MutableRefObject<number>;
  lastLanguageIndex: number;
}) => {
  const container = languagesContainer.current;
  if (!container) return;
  const startIndex = startIndexRef.current;
  const endIndex =
    startIndex === 0 ? lastLanguageIndex : Math.max(0, startIndex - 2);
  scrollCarousel({ container, startIndexRef, endIndex });
};

const scrollCarouselRight = ({
  languagesContainer,
  startIndexRef,
  lastLanguageIndex,
}: {
  languagesContainer: React.MutableRefObject<HTMLDivElement | null>;
  startIndexRef: React.MutableRefObject<number>;
  lastLanguageIndex: number;
}) => {
  const container = languagesContainer.current;
  if (!container) return;
  const startIndex = startIndexRef.current;
  const endIndex =
    startIndex >= lastLanguageIndex
      ? 0
      : (startIndex + 2) % container.children.length;
  scrollCarousel({ container, startIndexRef, endIndex });
};

export const LanguageCarousel = () => {
  const setLanguage = useBoundStore((x) => x.setLanguage);

  const startIndexRef = useRef(0);
  const languagesContainer = useRef<null | HTMLDivElement>(null);
  const lastLanguageIndex = 19;
  return (
    <article className="absolute bottom-0 left-0 right-0 hidden h-20 items-center justify-center bg-[#0a4a82] text-white md:flex">
      <div className="flex w-full max-w-5xl justify-between">
        <button
          className="opacity-50"
          onClick={() =>
            scrollCarouselLeft({
              languagesContainer,
              startIndexRef,
              lastLanguageIndex,
            })
          }
        >
          <ChevronLeftSvg />
          <span className="sr-only">Scroll left</span>
        </button>
        <div
          className="flex items-center gap-6 overflow-x-hidden"
          ref={languagesContainer}
        >
          {languages.map((language) => {
            return (
              <Link
                key={language.code}
                className="flex items-center gap-2"
                href={"/learn"}
                onClick={() => setLanguage(language)}
              >
                <Flag language={language} width={40} />
                <span className="text-sm font-bold uppercase">
                  {language.name}
                </span>
              </Link>
            );
          })}
        </div>
        <button
          className="opacity-50"
          onClick={() =>
            scrollCarouselRight({
              languagesContainer,
              startIndexRef,
              lastLanguageIndex,
            })
          }
        >
          <ChevronRightSvg />
          <span className="sr-only">Scroll right</span>
        </button>
      </div>
    </article>
  );
};
