import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { socials } from './constants';
import WynxLogo from './wynxLogo';
import { Link } from 'react-router-dom';
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-white py-6 font-[montserrat]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          <div className="flex max-sm:flex-col max-sm:mx-auto">
            <WynxLogo style={{fil0: '#FBE68D'}}/>
            </div>
          <div className="flex space-x-4 max-sm:mx-auto">
              {socials.map((item) => (
                        <a key={item.label} href={item.href} aria-label={item.label} className={`text-${item.color}`} >
                        <FontAwesomeIcon icon={item.icon} size="xl"/>
                        </a>
                    ))}
          </div>
        </div>
        <div className="text-center text-sm flex max-sm:flex-col gap-[10px] justify-between">
          <span>Copyright &copy; 2023 - {currentYear} Wynx Services, Inc.</span> <span>Made with <FontAwesomeIcon icon={faHeart} className='text-red-700 animate-pulse' size="1x" /> by <Link to={'/profile'} className='text-[#FBE68D] font-bold'>Me.</Link></span> <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
