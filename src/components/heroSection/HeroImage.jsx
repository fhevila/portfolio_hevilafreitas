import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className=" h-full w-full">
        <img
          src="/images/2.jpg"
          alt="Hevila Freitas"
          className="w-auto h-auto md:max-w-[570px] sm:max-w-[380px] absolute bottom-[0px] z-10 left-[50%] -translate-x-[50%]"
        />
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-rosaRosa opacity-50  animate-[spin_20s_linear_infinite] " />
        </div>
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] blur-lg min-h-[600px] w-auto text-rosaFraco opacity-50  animate-[spin_20s_linear_infinite] " />
        </div>
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-verdeFraco opacity-60  animate-[spin_20s_linear_infinite] " />
        </div>
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-rosaPink opacity-60 blur-lg  animate-[spin_20s_linear_infinite] " />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
