import React from "react";
import { Container } from "reactstrap";

export const CommonSection = ({ title }) => {
  return (
    <div className="common_section p-16 md:p-0 items-center">
      <h1 className=" text-white font-semibold">{title}</h1>
    </div>
  );
};
