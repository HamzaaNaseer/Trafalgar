import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const navData = [
  {
    title: "Home",
    selected: false,
    id: "#HOME",
  },
  {
    title: "Services",
    selected: false,
    id: "#Services",
  },
  {
    title: "About Us",
    selected: false,
    id: "#AboutUs",
  },
];

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="w-full mt-6">
      <div className="hidden max-w-[1273px] mx-auto md:flex flex-row justify-between">
        <div className="flex flex-row items-center h-10 font-muli align-bottom gap-3">
          <div className="rounded-3xl bg-buttons p-1 text-2xl text-white font-muli w-10 h-10 text-center">
            T
          </div>
          <p className="font-bold">Trafalgar</p>
        </div>
        {/* for nav items  */}

        <ul className=" flex flex-row justify-evenly gap-10 font-muli items-center">
          {navData.map((d, idx) => {
            return (
              <a className="btn cursor-pointer" href={d.id}>
                {d.title}
              </a>
            );
          })}
        </ul>
      </div>

      <div className="max-w-[1273px] mx-auto md:hidden relative z-40 mt-3">
        {navOpen ? (
          <IoCloseSharp
            className="text-buttons ml-6"
            size={30}
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
        ) : (
          <GiHamburgerMenu
            className="text-buttons ml-6"
            size={30}
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
        )}

        {navOpen && (
          <div className="w-full h-screen bg-white absolute top-0 z-20 flex flex-col justify-center items-center font-muli text-2xl divide-y ">
            {navData.map((d, idx) => {
              return (
                <a
                  className="btn cursor-pointer py-4 hover:text-buttons"
                  href={d.id}
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                >
                  {d.title}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
