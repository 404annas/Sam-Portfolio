import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div
      className="
        bg-first noise-on-card
        w-[85vw] sm:w-[75vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] 2xl:w-[30vw]
        h-full sm:min-h-[78vh] md:min-h-[80vh] lg:min-h-[85vh]
        rounded-2xl flex flex-col overflow-hidden mx-auto
        mt-20 sm:mt-28 md:mt-32 lg:mt-36 xl:mt-40 mb-16 sm:mb-20
      "
    >
      {children}
    </div>
  );
};

export default CardWrapper;
