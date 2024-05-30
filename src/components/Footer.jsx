import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logoText from '../assets/logoText.svg'
import { socials } from './constants';
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          <div className="flex gap-[10px] max-sm:flex-col max-sm:mx-auto">
            <img src={logoText} alt="Logo" className="h-6" />
            <p className="text-sm italic">Your neighbourhood service provider.</p>
          </div>
          <div className="flex space-x-4 max-sm:mx-auto">
              {socials.map((item) => (
                        <a key={item.label} href={item.href} aria-label={item.label} className={`text-${item.color}`} >
                        <FontAwesomeIcon icon={item.icon} size="2x"/>
                        </a>
                    ))}
          </div>
        </div>
        <div className="text-center text-sm flex max-sm:flex-col gap-[10px] justify-center">
          <span>&copy;Copyright Wynx Inc. {currentYear}.</span> <span>made with <FontAwesomeIcon icon={faHeart} className='text-[red]' size="1x" /> by Alagwu David.</span> <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
