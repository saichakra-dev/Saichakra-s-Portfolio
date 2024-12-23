import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialHandles = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-once="false"
      className="flex gap-5 my-4"
    >
      <a
        className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125"
        href="https://github.com/saichakra-dev"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125"
        href="https://www.linkedin.com/in/saichakra/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125"
        href="https://discord.com/channels/1258017668011655198/1258017668011655205"
        rel="noreferrer"
        target="_blank"
      >
        <FaDiscord />
      </a>
      <a
        className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125"
        href="https://www.instagram.com/saichakra_gunda/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125"
        href="https://x.com/Saichakra_G"
        rel="noreferrer"
        target="_blank"
      >
        <FaXTwitter />
      </a>
    </div>
  );
};

export default SocialHandles;
