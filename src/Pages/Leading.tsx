import React from "react";
import Button from "../components/Button";
import img from "../assets/hero.png";

const Leading: React.FC = () => {
  return (
    <div className="w-full my-40" id="AboutUs">
      <div className="max-w-[1273px] mx-2 md:mx-auto  grid grid-cols-2 gap-5 justify-items-center">
        <div className="col-span-2 md:col-span-1">
          <img src={img} className="max-h-[447px]"></img>
        </div>
        <div className="col-span-2 md:col-span-1 text-center md:text-start">
          <div className="md:max-w-[445px]">
            <p className=" text-3xl md:text-5xl leading-[56px] font-muli ">
              Leading healthcare providers{" "}
            </p>
            <div className="flex justify-center">
              <div className="border-black border w-20 my-4"></div>
            </div>
            <p className="text-text-color my-8 leading-8 text-xl font-muli font-light">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver{" "}
            </p>
            <Button title="Learn more"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leading;
