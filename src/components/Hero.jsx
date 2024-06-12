import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-solid-svg-icons';
import { socials } from './constants';
import Sidebar from "./Sidebar"
// import { TypeAnimation } from 'react-type-animation';
// import Astronaut from "../assets/AstronautAnimation.json";
import landing1 from '../assets/profile/landing1.png'
import AnimationWavingHand from "../assets/AnimationWavingHand.json";
import Lottie from "lottie-react";
const Hero = () => {
    // const lottieRef = useRef(null);
    // const [paused, setPaused] = useState(false);
  
    // const handlePause = () => {
    //   if (paused) {
    //     lottieRef.current.play();
    //   } else {
    //     lottieRef.current.pause();
    //   }
    //   setPaused(!paused);
    // };
    return (
    <section className="relative h-[80vh] w-full bg-[#121212]">
      <Sidebar />
            <div className="mx-auto max-w-7xl px-5 pt-[25px] pb-3 sm:px-6 lg:px-8 flex h-full">
                <div className="w-[760px] max-sm:items-center justify-center mt-10 mb-3 flex flex-col sm:basis-[60%]">
                {/* <div style={{background: 'linear-gradient(to right, red, purple)'
                }} className='w-fit p-[3px] rounded-full'>
                    <div className=' py-1 px-3 flex items-center text-white uppercase bg-[#121212] w-fit rounded-full'> Currently open to work</div>
                </div> */}
                <span className='text-[22px] text-yellow-200 flex gap-1'>&lt;<Lottie animationData={AnimationWavingHand} className='w-[20px]' /> <p>Hello /&gt; I am</p></span>
                    <h1 className='md:text-[52px] text-[36px] lg:text-[78px] font-bold font-lato-sans text-[#fff] mb-[10px] leading-[1.1]'>David Alagwu</h1>
                    {/* <h1 className="text-[18px] lg:text-[42px] font-[700] font-[montserrat]"><TypeAnimation
                    sequence={['I\'m a Web developer', 3000,'I\'m a Gamer', 3000, 'I\'m a Freelancer', 3000, 'I\'m a Brand', 3000, 'I\'m an Software Engineer', 3000]}
                    className='text-[36px] text-[#e80881]'
                    repeat={Infinity}
                    /></h1> */}
                    <h3 className='text-[22px] font-bold font-lato-sans text-yellow-200'>Full-Stack Web Developer</h3>
                    <ul className='block max-sm:text-center sm:flex flex-row gap-2 items-center text-white text-[18px] mb-6'><li>Graphic designer</li><span className='hidden sm:block text-yellow-200 mx-2'>/</span><li>Programmer</li><span className='hidden sm:block text-yellow-200 mx-2'>/</span><li>Software Engineer</li></ul>
                    <div className="font-[montserrat] text-[#f3f3f3] pr-3 text-[18px]">
                    {/* Hello! I'm David Alagwu, a passionate and dedicated computer enthusiast. My portfolio showcases a curated selection of my best work, highlighting my skills in tech related fields, design inspirations, and problem-solving. */}
                    </div>
                    <div className="flex space-x-4">
                    {socials.map((item) => (
                        <a key={item.label} href={item.href} aria-label={item.label} className={`text-${item.color}`} >
                        <FontAwesomeIcon icon={item.icon} size="xl"/>
                        </a>
                    ))}
                    </div>
                </div>
                <div className='hidden sm:flex relative justify-center items-center px-[22px]'>
                    {/* <Lottie loop={true} autoplay={true} lottieRef={lottieRef} animationData={Astronaut} />
                    <button href='#' onClick={handlePause} className='absolute bottom-8 right-10 rounded-full px-3 pb-2 pt-[6px] text-white font-bold' style={{background: 'linear-gradient(to right, red, purple)'
                }}>{paused ? 'Resume' : 'Pause'} animation</button> */}
                <img src={landing1} alt='landing page flex' className='w-[300px] h-[300px]'/>
                </div>
            </div>
        </section>
     );
}

export default Hero;