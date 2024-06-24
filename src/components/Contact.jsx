import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="relative w-full bg-[#121212]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 flex flex-col h-full">
      <div className='flex items-center flex-col'>
                <div className='text-[16px] font-[montserrat] text-yellow-200 uppercase border-[1px] border-yellow-200 rounded-full px-2'>
                  <FontAwesomeIcon icon={faMessage} size='sm' /> Contact me
                </div>
                <div className='font-[palanquin] py-2 mb-5 text-white text-center'>
                I am interested in working with any company that thinks my skill will be helpful for them. <br />If you are looking for someone with skills like mine, please let me know. <br />Or you can just 'say hi'.
                </div>
                <div className='text-center flex flex-row gap-3 items-center text-yellow-200 text-[18px] mb-6'><Link to={'mailto:alagwudavid2019@gmail.com'} className='px-3 py-2 rounded-md border-yellow-200 border-[2px]'><FontAwesomeIcon icon={faEnvelope} /> Gmail</Link><Link to={'/contact-us'} className='px-3 py-2 rounded-md border-yellow-200 border-[2px]'><FontAwesomeIcon icon={faEnvelope} /> Mailer</Link><Link to={'https://wa.me/+2349045492542'} className='px-3 py-2 rounded-md border-yellow-200 border-[2px]'><FontAwesomeIcon icon={faWhatsapp}/> Whatsapp</Link></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;