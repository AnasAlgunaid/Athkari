import React from "react";

const Hero = () => {
  return (
    <section className=" h-96 container ">
      <div className="rounded-2xl w-full bg-greenColor h-full">
        <div className="flex flex-col justify-center items-center h-full gap-4 text-center">
          <h1 className="text-white text-4xl font-bold">موقع أذكاري</h1>
          <p className="text-white text-lg ">
            موقعك المفضل لحفظ الأذكار والأدعية
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
