import { Textarea } from "@headlessui/react";
import AnimationTyping from "../assets/AnimationTyping.json"
import React, { useRef } from 'react';
import Lottie from "lottie-react";

const ContactUs = () => {
    const lottieRef = useRef();

    return (
        <section className="relative w-full bg-[#121212]">
            <div className="mx-auto max-w-7xl px-5 py-[72px] sm:px-6 lg:px-8 flex flex-col h-full">
                
                <div className='relative border-2 border-[#272c36] h-full rounded-3xl grid grid-rows-1 lg:grid-cols-2'>   
                <div className=" p-5 h-full">
                    <form className="flex flex-col mx-3 gap-4">
                    <div className='text-[32px] font-[montserrat] font-bold text-[#fff] uppercase text-center'>Contact-Us</div>
                    <div className='font-[palanquin] italic mb-5 text-[#666] text-center'>
                        we are just one call away
                    </div>
                    <div className="flex flex-col gap-2">
                    <label className="text-white">Name: </label>
                    <input placeholder="Company Name" className="px-5 py-1 rounded-md w-full bg-[#272c36]"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label className="text-white">Email: </label>
                    <input placeholder="Company Email" className="px-5 py-1 rounded-md w-full bg-[#272c36]"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label className="text-white">Message: </label>
                    <Textarea placeholder="Purpose of contact" className="px-5 py-1 rounded-md w-full bg-[#272c36]"></Textarea>
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