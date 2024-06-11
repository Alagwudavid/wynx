import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "./Sidebar"
import Animation404 from "../assets/Animation404.json";
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
const ErrorLayout = () => {
    const lottieRef = useRef();
    const currentUrl = window.location.href;
    return (
    <section className="relative h-[642px] w-full bg-[#121a29]">
      <Sidebar />
            <div className="mx-auto max-w-7xl px-5 pt-[72px] pb-3 sm:px-6 lg:px-8 flex h-full">
                <div className=" w-[760px] justify-center mt-10 mb-3 gap-5 flex flex-col sm:basis-[60%]">
                    <h1 className="text-[32px] lg:text-[42px] font-[700] text-yellow-200 font-[montserrat]">Page Not Found </h1>
                    <div className="font-[montserrat] text-[#f3f3f3] pr-3">
                    Looks like you typed the wrong url,
                    <br />
                    <p className='text-gray-400'>"{currentUrl}"</p>
                    </div>
                    <div>
                        <Link className='rounded-md bg-yellow-200 py-1 px-3 text-[#121a29] basis-1/3 font-bold items-center justify-center' to='./'>HOME <FontAwesomeIcon icon={faAngleRight}/></Link>
                    </div>
                </div>
                <div className='hidden sm:flex relative pb-6'>
                    <Lottie loop={true} autoplay={true} lottieRef={lottieRef} animationData={Animation404} />
                </div>
            </div>
        </section>
     );
}

export default ErrorLayout;