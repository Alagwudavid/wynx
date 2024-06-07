import { Textarea } from "@headlessui/react";
import AnimationTyping from "../assets/AnimationTyping.json"
import React, { useRef } from 'react';
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
    const lottieRef = useRef();

    return (
        <section className="relative h-[742px] w-full bg-[#121212]">
            <div className="mx-auto max-w-7xl px-5 pt-24 pb-16 sm:px-6 lg:px-8 flex flex-col h-full">
                
                <div className='relative border-2 border-[#272c36] h-full rounded-3xl grid grid-rows-1 lg:grid-cols-2' style={{boxShadow: 'rgba(0, 0, 0, 0.4) 10px 10px 12px'}}>   
                <div className=" p-5 pt-10 h-full">
                    <form className="flex flex-col mx-3 mt-4 gap-4">
                    <div className='flex items-center flex-col'>
                    <div className='text-[16px] font-[montserrat] text-white uppercase border-[1px] border-gray-600 rounded-full px-2'><FontAwesomeIcon icon={faMessage} className='text-white' size='sm'/> Message</div>
                    <div className='font-[palanquin] italic mb-5 text-[#666]'>
                        we are just one call away
                    </div></div>
                    <div className="flex flex-col gap-2">
                    <label className="text-white">Name: </label>
                    <input placeholder="Company Name" className="px-5 py-2 rounded-md w-full bg-[#272c36]"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label className="text-white">Email: </label>
                    <input placeholder="Company Email" className="px-5 py-2 rounded-md w-full bg-[#272c36]"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label className="text-white">Message: </label>
                    <Textarea placeholder="Purpose of contact" className="px-5 py-2 rounded-md w-full bg-[#272c36]"></Textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-500 rounded-md py-2">Submit message</button>
                    </form>
                </div>
                <div className="h-full bg-[#272c36] hidden lg:flex rounded-r-3xl">
                <Lottie loop={true} autoplay={true} lottieRef={lottieRef} animationData={AnimationTyping} />
                </div>
                </div>
        </div>
        </section>
     );
}
 
export default ContactUs;