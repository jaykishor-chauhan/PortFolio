import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialHandles = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="flex gap-5 my-4">
        <a className="text-dark-orange text-2xl md:text-xl transition duration-700 hover:scale-125 hover:text-cornsilk" href="https://github.com/jaykishor-chauhan/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a className="text-dark-orange text-2xl md:text-xl transition duration-700 hover:scale-125 hover:text-cornsilk" href="https://www.linkedin.com/in/jaykishor-chauhan/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a className="text-dark-orange text-2xl md:text-xl transition duration-700 hover:scale-125 hover:text-cornsilk" href="https://www.facebook.com/Jaykishor076/" rel="noreferrer" target="_blank">
          <FaFacebook />
        </a>
        <a className="text-dark-orange text-2xl md:text-xl transition duration-700 hover:scale-125 hover:text-cornsilk" href="https://www.instagram.com/jaykishor_c/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a className="text-dark-orange text-2xl md:text-xl transition duration-700 hover:scale-125 hover:text-cornsilk" href="https://wa.me/+9779815215667" rel="noreferrer" target="_blank">
          <FaWhatsapp />
        </a>
    </div>
  )
}

export default SocialHandles