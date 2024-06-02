import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont, faCode, faDatabase, faHouseLaptop, faPlus, faCircleChevronRight, faBezierCurve, faPenNib } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <section className="relative h-[578px] w-full bg-[#121212]">
            <div className="mx-auto max-w-7xl px-5 py-[72px] sm:px-6 lg:px-8 flex flex-col h-full">
                <div className='block'>
                    <div className='text-[32px] font-[montserrat] font-bold text-[#e8077f] uppercase'>Our Services</div>
                    <div className='font-[palanquin] italic mb-5 text-[#666]'>
                        We don't just build websites,
                        we craft experiences
                    </div>
                </div>
                <div className='relative flex flex-row gap-[15px]'>   
                <div className='overflow-x-scroll no-scrollbar flex flex-row flex-nowrap gap-10 my-3 items-center basis-[calc(100%-20px)]'>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[280px] h-[320px] flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 mt-2 w-full'><span className='rounded-full py-3 px-4 justify-center items-center' style={{backgroundColor: 'rgba(212, 175, 66, 0.15)'}}><FontAwesomeIcon icon={faFont} className='text-[#d4af42]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#d4af42] font-bold text-[24px] font-[montserrat]'>Typography</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                            </div>
                            <div className='flex px-4 py-4'>
                                <a className='px-3 py-2 rounded text-[#d4af42] font-[palanquin]'  style={{backgroundColor: 'rgba(212, 175, 66, 0.15)'}}>Start a Typography Project&nbsp; <FontAwesomeIcon icon={faCircleChevronRight} className='text-[#d4af42]' /></a>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[280px] h-[320px] flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 mt-2 w-full'><span className='rounded-full py-3 px-[13px] justify-center items-center' style={{backgroundColor: 'rgba(234,51,54, 0.15)'}}><FontAwesomeIcon icon={faBezierCurve} className='text-[#ea3336]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#ea3336] font-bold text-[24px] font-[montserrat]'>Graphics Design</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                            </div>
                            <div className='flex px-4 py-4'>
                                <a className='px-3 py-2 rounded text-[#ea3336] font-[palanquin]'  style={{backgroundColor: 'rgba(234,51,54, 0.15)'}}>Start a Design Project&nbsp; <FontAwesomeIcon icon={faCircleChevronRight} className='text-[#ea3336]' /></a>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[280px] h-[320px] flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 mt-2 w-full'><span className='rounded-full py-3 px-[13px] justify-center items-center' style={{backgroundColor: 'rgba(232, 7, 127, 0.15)'}}><FontAwesomeIcon icon={faCode} className='text-[#e8077f]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#e8077f] font-bold text-[24px] font-[montserrat]'>Web App Dev_</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                            </div>
                            <div className='flex px-4 py-4'>
                                <a className='px-3 py-2 rounded text-[#e8077f] font-[palanquin]'  style={{backgroundColor: 'rgba(232, 7, 127, 0.15)'}}>Start a Web App Project&nbsp; <FontAwesomeIcon icon={faCircleChevronRight} className='text-[#e8077f]' /></a>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[280px] h-[320px] flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 mt-2 w-full'><span className='rounded-full py-3 px-4 justify-center items-center' style={{backgroundColor: 'rgba(84, 51, 234, 0.15)'}}><FontAwesomeIcon icon={faDatabase} className='text-[#5433ea]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#5433ea] font-bold text-[24px] font-[montserrat]'>Backend Dev_</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                            </div>
                            <div className='flex px-4 py-4'>
                                <a className='px-3 py-2 rounded text-[#5433ea] font-[palanquin]'  style={{backgroundColor: 'rgba(84, 51, 234, 0.15)'}}>Start a Backend Project&nbsp; <FontAwesomeIcon icon={faCircleChevronRight} className='text-[#5433ea]' /></a>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[280px] h-[320px] flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 mt-2 w-full'><span className='rounded-full py-3 px-[13px] justify-center items-center' style={{backgroundColor: 'rgba(234,51,54, 0.15)'}}><FontAwesomeIcon icon={faHouseLaptop} className='text-[#ea3336]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#ea3336] font-bold text-[24px] font-[montserrat]'>Freelance</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                            </div>
                            <div className='flex px-4 py-4'>
                                <a className='px-3 py-2 rounded text-[#ea3336] font-[palanquin]'  style={{backgroundColor: 'rgba(234,51,54, 0.15)'}}>Start a Freelance Project&nbsp; <FontAwesomeIcon icon={faCircleChevronRight} className='text-[#ea3336]' /></a>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[280px] h-[320px] flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 mt-2 w-full'><span className='rounded-full py-3 px-[13px] justify-center items-center' style={{backgroundColor: 'rgba(90,241,67, 0.15)'}}><FontAwesomeIcon icon={faPenNib} className='text-[#5af143]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#5af143] font-bold text-[24px] font-[montserrat]'>UI/UX Design</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                            </div>
                            <div className='flex px-4 py-4'>
                                <a className='px-3 py-2 rounded text-[#5af143] font-[palanquin]'  style={{backgroundColor: 'rgba(90,241,67, 0.15)'}}>Start a UI/UX Project&nbsp; <FontAwesomeIcon icon={faCircleChevronRight} className='text-[#5af143]' /></a>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[280px] h-[320px] flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                        <div className='px-4 py-4 mt-2 w-full'><span className='rounded-full py-3 px-4 justify-center items-center' style={{backgroundColor: 'rgba(225, 225, 225, 0.15)'}}><FontAwesomeIcon icon={faPlus} className='text-[#ffffff]'/></span></div>
                        <div className='flex flex-col px-4 py-3'>
                                <span className='text-gray-300 font-bold text-[24px] font-[montserrat]'>Coming Soon</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                        </div>
                        <div className='flex px-4 py-4'>
                                <a className='px-3 py-2 rounded text-[#ffffff] font-[palanquin]'  style={{backgroundColor: 'rgba(225, 225, 225, 0.15)'}}>View Recommended List&nbsp; <FontAwesomeIcon icon={faCircleChevronRight} className='text-[#ffffff]' /></a>
                            </div>
                        </div>
                </div>
                <div className='w-fit h-fit text-white font-bold rotate-90 absolute -right-5 top-1/2'>
                swipe
                </div>
                </div>
        </div>
        </section>
     );
}
 
export default Services;