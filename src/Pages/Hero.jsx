import heroImg from "../assets/hero.png";
import bg from "../assets/bg-hero.svg";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="w-full z-0" id="Home">
      <div
        className="hidden absolute md:block bg-no-repeat bg-contain w-16 h-16 md:top-12 md:left-0"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="grid grid-cols-12 gap-3 relative mx-auto">
        <div className="flex items-center ml-6 md:ml-0 md:justify-center md:col-span-6 col-span-12 mt-4 md:mt-0">
          <div className="max-w-[445px]">
            <p className=" text-3xl md:text-5xl leading-[56px] font-muli font-bold ">
              Virtual healthcare for you
            </p>
            <p className="text-text-color my-4 leading-8 text-xl font-muli font-light ">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <Button title="Consult Today">Consult Today</Button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <img src={heroImg} className="max-h-[447px]"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
