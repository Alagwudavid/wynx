import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-solid-svg-icons';
import { socials } from './constants';
import Sidebar from "./Sidebar"
import { TypeAnimation } from 'react-type-animation';
import Astronaut from "../assets/AstronautAnimation.json";
import AnimationWavingHand from "../assets/AnimationWavingHand.json";
import Lottie from "lottie-react";
const Hero = () => {
    const lottieRef = useRef(null);
    const [paused, setPaused] = useState(false);
  
    const handlePause = () => {
      if (paused) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
      setPaused(!paused);
    };
    return (
    <section className="relative lg:h-[612px] w-full bg-[#121212]">
      <Sidebar />
            <div className="mx-auto max-w-7xl px-5 pt-[72px] pb-3 sm:px-6 lg:px-8 flex h-full">
                <div className=" w-[760px] justify-center mt-10 mb-3 gap-5 flex flex-col sm:basis-[60%]">
                <div style={{background: 'linear-gradient(to right, red, purple)'
                }} className='w-fit p-[3px] rounded-full'>
                    <div className=' py-1 px-3 flex gap-3 items-center text-white uppercase bg-[#121212] w-fit rounded-full'><Lottie animationData={AnimationWavingHand} className='w-[20px]' /><span className='mr-2'>Currently open to work</span></div>
                </div>
                    <h1 className="text-[32px] lg:text-[42px] font-[700] font-[montserrat]"><TypeAnimation
                    sequence={['I\'m a Software developer', 3000,'I\'m a Gamer', 3000, 'I\'m a Freelancer', 3000, 'I\'m a Brand', 3000, 'I\'m an Engineer', 3000]}
                    className='text-[36px] text-[#727cf5]'
                    repeat={Infinity}
                    /></h1>
                    <div className="font-[montserrat] text-[#f3f3f3] pr-3">
                    Hello! I'm David Alagwu, a passionate and dedicated computer enthusiast. My portfolio showcases a curated selection of my best work, highlighting my skills in tech related fields, design inspirations, and problem-solving.
                    </div>
                    <div className="flex space-x-4">
                    {socials.map((item) => (
                        <a key={item.label} href={item.href} aria-label={item.label} className={`text-${item.color}`} >
                        <FontAwesomeIcon icon={item.icon} size="2x"/>
                        </a>
                    ))}
                    </div>
                </div>
                <div className='hidden sm:flex bg-image1 relative pb-6'>
                    <Lottie loop={true} autoplay={true} lottieRef={lottieRef} animationData={Astronaut} />
                    <button href='#' onClick={handlePause} className='absolute bottom-8 right-10 rounded-full px-3 pb-2 pt-[6px] text-white font-bold' style={{background: 'linear-gradient(to right, red, purple)'
                }}>{paused ? 'Resume' : 'Pause'} animation</button>
                </div>
            </div>
        </section>
     );
}

export default Hero;