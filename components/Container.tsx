import React from "react";
import Divider from "./Divider";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-[#0A0A0A] max-w-[1280px] mx-auto w-full py-44 text-[#C5C8D3] relative flex flex-col gap-5 text-[17px] font-normal leading-7">
      {children}
      <Divider />
    </div>
  );
};

export default Container;
