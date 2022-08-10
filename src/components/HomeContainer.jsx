import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div
          className="flex items-center gap-2 justify-center bg-orange-100
        p-4 py-1 rounded-full"
        >
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img
              src={Delivery}
              className="w-full bg-white h-full object-contain drop-shadow-xl"
              alt="delivery"
            />
          </div>
        </div>
        <p
          className="text-[2.5rem] font-bold tracking-wide text-headingColor 
        md:text-[4.5rem]"
        >
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>
        <p
          className="text-base text-textColor text-center md:text-left 
        md:w-[80%]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          laboriosam laudantium, nesciunt suscipit dolor optio. Ut accusamus est
          eum veniam commodi, magni velit, consequuntur debitis culpa provident
          perferendis ipsum dolor?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4
          py-2 md:w-auto rounded-lg hover:shadow-lg transition-all ease-in-out"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto  lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute flex items-center justify-center"></div>
      </div>
    </section>
  );
};

export default HomeContainer;
