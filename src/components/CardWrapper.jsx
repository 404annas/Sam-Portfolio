import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div
      className="
        bg-first noise-on-card
        w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[40vw] xl:w-[28vw]
        h-fit sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[85vh]
        rounded-2xl flex flex-col overflow-hidden mx-auto
      "
    >
      {children}
    </div>
  );
};

export default CardWrapper;
