import React from "react";
import Image from "next/image";
import DividerImage from "../public/images/divider.png";

const Divider = () => {
  return (
    <Image
      src={DividerImage}
      alt="Divider"
      className="my-2 absolute bottom-0"
    />
  );
};

export default Divider;
