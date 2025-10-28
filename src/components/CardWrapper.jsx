import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div className="bg-first noise-on-card lg:w-[clamp(300px,30vw,390px)] w-[360px] 2xl:h-[68vh] xl:h-[85vh]  md:h-[70px] rounded-2xl flex flex-col overflow-hidden">
      {children}
    </div>
  );
};

export default CardWrapper;
