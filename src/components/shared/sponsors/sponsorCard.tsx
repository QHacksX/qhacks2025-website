import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { sponsorType } from "@/src/data/sponsors/sponsors_lists";

const SponsorCard = ({ sponsor }: { sponsor: sponsorType }) => {
  const { name, logo, link, colour, tier } = sponsor;


  let height;
  let width;

  // width and height variables
  if (tier == "peta") {
    width = "md:w-[500px] md:h-[200px] w-[300px] h-[100px]";
    height = "h-20 xs:h-64";
  } else if (tier == "tera") {
    width = "md:w-[400px] md:h-[200px] w-[200px] h-[75px]";
    height = "h-20 xs:h-56";
  } else if (tier == "giga") {
    width = "md:w-[300px] md:h-[100px] w-[150px] h-[50px]";
    height = "h-20 xs:h-44";
  } else if (tier == "mega") {
    width = "md:w-[200px] md:h-[100px] w-[100px] h-[50px]";
    height = "h-20 xs:h-32";
  } else if (tier == "kilo") {
    width = "w-32 xs:w-[150px]";
    height = "h-20 xs:h-24";
  } else if (tier == "previous") {
    width = "w-32 xs:w-[150px]";
    height = "h-20 xs:h-24";
  }

  return (
    <motion.a
      href={link}
      target="_null"
      // Remove the width and height props and replace them with the variables I created above
      className={`justify-center flex ${height} ${width} ${colour} xs:m-2 m-1 border-4 rounded-xl bg-white`}
      whileHover={{ scale: 1.1 }}
    >
      <img src={logo} alt={`${name} logo`} className='rounded-xl' />
    </motion.a>
  );
};

SponsorCard.propTypes = {
  sponsor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default SponsorCard;
