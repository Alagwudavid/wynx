import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-solid-svg-icons';
import { socials } from './constants';
import Sidebar from "./Sidebar"
// import { TypeAnimation } from 'react-type-animation';
// import Astronaut from "../assets/AstronautAnimation.json";
import landing1 from '../assets/profile/landing1.png'
import AnimationWavingHand from "../assets/AnimationWavingHand.json";
import Lottie from "lottie-react";
import { faAngleDoubleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
const Hero = () => {
    return (
    <section className="relative h-[80vh] w-full bg-[#121212]">
      <Sidebar />
            <div className="mx-auto max-w-7xl px-5 py-1 flex h-full">
                <div className="w-[760px] max-sm:items-center justify-center flex flex-col sm:basis-[60%]">
                <span className='text-[22px] text-yellow-200 flex gap-1'>&lt;<Lottie animationData={AnimationWavingHand} className='w-[20px]' /> <p>Hello /&gt; I am</p></span>
                    <h1 className='md:text-[52px] text-[36px] lg:text-[78px] font-bold font-lato-sans text-[#fff] mb-[10px] leading-[1.1]'>David Alagwu</h1>
                    <h3 className='text-[22px] font-bold font-lato-sans text-yellow-200'>Full-Stack Web Developer</h3>
                    <ul className='block max-sm:text-center sm:flex flex-row gap-2 items-center text-white text-[18px] mb-6'><li>Graphic designer</li><span className='hidden sm:block text-yellow-200 mx-2'>/</span><li>Mechanical Engineer</li><span className='hidden sm:block text-yellow-200 mx-2'>/</span><li>Software Engineer</li></ul>
                    <div className="font-[montserrat] text-[#f3f3f3] pr-3 text-[18px]">
                    </div>
                    <div className="flex space-x-4">
                    {socials.map((item) => (
                        <a key={item.label} href={item.href} aria-label={item.label} className={`text-${item.color} hover:text-white`} >
                        <FontAwesomeIcon icon={item.icon} size="xl"/>
                        </a>
                    ))}
                    </div>
                </div>
                <div className='hidden sm:flex relative justify-center items-center px-[22px]'>
                <img src={landing1} alt='landing page flex' className='w-[300px] h-[300px]'/>
                </div>
            </div>
        </section>
     );
}

export default Hero;