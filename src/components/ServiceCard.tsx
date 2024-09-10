import React, { ReactNode } from "react";
import { IconType } from "react-icons";
export interface IServiceCardProp {
  title: string;
  paragraph: string;
  logo?: ReactNode;
}

import { FaMagnifyingGlassChart } from "react-icons/fa6";

const ServiceCard: React.FC<IServiceCardProp> = (props: IServiceCardProp) => {
  const { paragraph, title, logo } = props;
  return (
    <div className="container px-3 py-3 text-start font-muli bg-white rounded-2xl drop-shadow-md max-w-[350px]">
      {logo && logo}

      <p className="font-bold  my-3">{title}</p>
      <p className="text-text-color text-sm">{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
