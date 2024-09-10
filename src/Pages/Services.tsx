import React from "react";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { MdLocalPharmacy } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";
import { TbEmergencyBed } from "react-icons/tb";
import { GiTireTracks } from "react-icons/gi";
import ServiceCard, { IServiceCardProp } from "../components/ServiceCard";

const servicesData: IServiceCardProp[] = [
  {
    title: "Search doctor",
    paragraph:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    logo: (
      <FaMagnifyingGlassChart
        width={90}
        height={90}
        color="blue"
        fontSize={45}
      />
    ),
  },
  {
    title: "Online pharmacy",
    logo: <MdLocalPharmacy width={90} height={90} color="blue" fontSize={45} />,
    paragraph:
      "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    title: "Consultation",
    logo: <GiTeacher width={90} height={90} color="blue" fontSize={45} />,

    paragraph:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    title: "Details info",
    logo: <TbListDetails width={90} height={90} color="blue" fontSize={45} />,

    paragraph:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    title: "Emergency care",
    logo: <TbEmergencyBed width={90} height={90} color="blue" fontSize={45} />,

    paragraph:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    title: "Tracking",
    logo: <GiTireTracks width={90} height={90} color="blue" fontSize={45} />,

    paragraph: "Track and save your medical history and health data ",
  },
];

const Services = () => {
  return (
    <div className="max-w-[1220px]   mt-4 text-center font-muli mx-auto px-5 relative">
      <svg
        className="hidden md:block absolute md:top-0 md:-left-1/4 -z-10"
        width="765"
        height="500"
        viewBox="0 0 765 619"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-154.953 141.268C-93.577 70.7806 27.6289 161.97 203.25 122.061C355.359 87.4787 364.11 -4.37809 485.642 0.176955C574.431 3.48723 671.183 54.755 724.356 144.072C782.997 242.551 761.68 342.81 755.696 367.139C728.983 476.263 649.698 533.826 621.728 553.487C506.488 634.44 377.173 620.254 315.136 613.479C82.0999 587.957 -167.386 421.583 -178.495 240.701C-179.971 217.021 -182.658 173.098 -154.953 141.268Z"
          fill="url(#paint0_linear_23_3)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_23_3"
            x1="429.823"
            y1="-145.173"
            x2="195.583"
            y2="560.635"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F3F7FF" />
            <stop offset="1" stop-color="#DEEEFE" />
          </linearGradient>
        </defs>
      </svg>

      <div className="">
        <p className="font-muli font-medium text-3xl">Our services</p>
        <p className="text-text-color leading-9">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
        <div className="grid grid-cols-12 gap-3 justify-items-center">
          {servicesData?.map((d, idx) => {
            return (
              <div className="col-span-6 md:col-span-4 xl:col-span-3">
                <ServiceCard
                  title={d.title}
                  paragraph={d.paragraph}
                  logo={d.logo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
