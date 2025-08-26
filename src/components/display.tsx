"use client";

import { PropsWithChildren, useState } from "react";

const DisplayTitle = ({ children }: PropsWithChildren) => (
  <h3 className="text-lg">{children}</h3>
);

const DisplaySubtitle = ({ children }: PropsWithChildren) => (
  <h4 className="text-sm font-mono">{children}</h4>
);

const DisplayBody = ({ children }: PropsWithChildren) => (
  <p className="text-md">{children}</p>
);

export interface DisplayItemProps {
  title: string;
  subtitle: string;
  body: string;
}

export const DisplayItem = ({ title, subtitle, body }: DisplayItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col w-md outline rounded-3xl p-8 shadow-md ${
        isExpanded ? "max-w-128" : "max-w-64 delay-500"
      } overflow-hidden transition-[max-width] ease-in-out duration-500 max-h-auto`}
      onClick={toggleContent}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <DisplayTitle>{title}</DisplayTitle>
        </div>
        <button className="ring rounded-lg p-1">+</button>
      </div>
      <div
        className={`flex flex-col ${
          isExpanded ? "max-h-96 delay-500" : "max-h-0"
        } overflow-hidden transition-[max-height] ease-in-out duration-500`}
      >
        <DisplaySubtitle>{subtitle}</DisplaySubtitle>
        <DisplayBody>{body}</DisplayBody>
      </div>
    </div>
  );
};

export const DisplayItemList = ({ items }: { items: DisplayItemProps[] }) => (
  <div className="flex gap-2 flex-wrap justify-around w-full transition-transform duration-500 ease-in-out">
    {items.map((item, i) => (
      <DisplayItem key={i} {...item} />
    ))}
  </div>
);
