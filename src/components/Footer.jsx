import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logoText from '../assets/logoText.svg'
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
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://youtube.com" aria-label="Youtube">
                    <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm flex max-sm:flex-col gap-[10px] justify-center">
          <span>&copy;Copyright {currentYear}.</span> <span>made with <FontAwesomeIcon icon={faHeart} className='text-[red]' size="1x" /> by Alagwu David.</span> <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
