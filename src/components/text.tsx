import { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren) => (
  <h1 className="text-2xl font-mono">{children}</h1>
);
export const Subtitle = ({ children }: PropsWithChildren) => (
  <h2 className="text-xl font-mono">{children}</h2>
);
export const Paragraph = ({ children }: PropsWithChildren) => (
  <p className="text-md font-sans">{children}</p>
);
