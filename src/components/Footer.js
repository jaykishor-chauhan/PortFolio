import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="text-white bg-darkblue text-center py-6 mt-2 font-thin text-sm md:text-sm md:p-5 md:mt-4">
      <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false">
        {/* Created By &nbsp; */}
        <span class="text-dark-orange hover:underline hover:decoration-dark-orange transition-all duration-300 cursor-pointer">Portfolio.</span>&nbsp;
        &copy;&nbsp;
        {currentYear}&nbsp;
        All rights reserved.
      </p>

    </div>
  );
};

export default Footer;