import React, { ReactNode } from "react";

interface ISocialProps extends React.HTMLAttributes<HTMLButtonElement> {
  url: string;
  children: ReactNode;
}

export function SocialButton({ children, url }: ISocialProps) {
  function openNewTab(url: string) {
    if (url != "/") {
      window.open(url, "_blank");
    } else null;
  }

  return (
    <div
      onClick={() => openNewTab(url)}
      className="w-14 h-14 flex items-center justify-center rounded-full text-black dark:text-white hover:bg-[#00000040] hover:dark:bg-[#ffffff40] transition-colors duration-200"
    >
      {children}
    </div>
  );
}
