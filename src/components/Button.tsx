import React, { ReactElement, ReactNode } from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  url: string;
  disabled?: boolean;
}

export function Button({ title, url, disabled = false }: IButtonProps) {
  function openNewTap(url: string) {
    if (url != "/") {
      window.open(url, "_blank");
    } else null;
  }

  if (disabled) {
    return (
      <div
        className="w-full h-[2.25rem] flex items-center justify-center rounded-md cursor-not-allowed ring-1 ring-black dark:ring-white bg-buttonTransparenceBlack dark:bg-buttonTransparenceWhite opacity-60"
        onClick={() => {
          openNewTap(url);
        }}
      >
        <span className="text-sm md:text-base text-black dark:text-white">{title}</span>
        <img src="" alt="" />
      </div>
    );
  }

  return (
    <div
      className="w-full h-[2.25rem] flex items-center justify-center rounded-md cursor-pointer ring-1 ring-black dark:ring-white bg-buttonTransparenceBlack hover:bg-buttonHoverTransparenceBlack dark:bg-buttonTransparenceWhite hover:dark:bg-buttonHoverTransparenceWhite transition-colors duration-150"
      onClick={() => {
        openNewTap(url);
      }}
    >
      <span className="text-sm md:text-base text-black dark:text-white">{title}</span>
      <img src="" alt="" />
    </div>
  );
}
