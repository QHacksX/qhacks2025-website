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
    width = "md:w-[625px] md:h-[250px] w-[375px] h-[125px]";
    height = "h-25 xs:h-80";
  } else if (tier == "tera") {
    width = "md:w-[500px] md:h-[250px] w-[250px] h-[94px]";
    height = "h-25 xs:h-70";
  } else if (tier == "giga") {
    width = "md:w-[375px] md:h-[125px] w-[187px] h-[62px]";
    height = "h-25 xs:h-55";
  } else if (tier == "mega") {
    width = "md:w-[250px] md:h-[125px] w-[125px] h-[62px]";
    height = "h-25 xs:h-40";
  } else if (tier == "kilo") {
    width = "md:w-[187px] md:h-[100px] w-[94px] h-[62px]";
    height = "h-25 xs:h-30";
  } else if (tier == "previous") {
    width = "w-32 xs:w-[150px]";
    height = "h-20 xs:h-24";
  }

  return (
    <motion.a
      href={link}
      target="_null"
      // Remove the width and height props and replace them with the variables I created above
      className={`justify-center overflow-hidden flex ${height} ${width} ${colour} xs:m-2 m-1 border-4 rounded-xl bg-white`}
      whileHover={{ scale: 1.1 }}
    >
      <img src={logo} alt={`${name} logo`} className={`overflow-hidden rounded-xl scale-125`} />
    </motion.a>
  );
};

SponsorCard.propTypes = {
  sponsor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    scale: PropTypes.number.isRequired,
    borderColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default SponsorCard;
