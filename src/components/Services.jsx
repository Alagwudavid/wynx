import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont, faCode, faDatabase, faHouseLaptop, faBezierCurve, faPenNib, faGears } from '@fortawesome/free-solid-svg-icons';
// import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
const Services = () => {
    return (
        <section className="relative w-full bg-[#121212]">
            <div className="mx-auto max-w-7xl px-5 py-12 flex flex-col h-full">
                <div className='flex items-center flex-col'>
                    <div className='text-[16px] font-[montserrat] text-[#727cf5] uppercase border-[1px] border-[#727cf5] rounded-full px-2'><FontAwesomeIcon icon={faGears} className='text-[#727cf5]' size='sm'/> Services</div>
                    <div className='font-[palanquin] italic mb-5 text-white'>
                        I don't just build websites,
                        i craft experiences
                    </div>
                </div> 
                <div className='py-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-3 items-center'>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[250px]h-auto flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 w-full'><span className='rounded-full py-3 px-4 justify-center items-center' style={{backgroundColor: 'rgba(212, 175, 66, 0.15)'}}><FontAwesomeIcon icon={faFont} className='text-[#d4af42]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#d4af42] font-bold text-[24px] font-[montserrat]'>Typography</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[250px]h-auto flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 w-full'><span className='rounded-full py-3 px-[13px] justify-center items-center' style={{backgroundColor: 'rgba(234,51,54, 0.15)'}}><FontAwesomeIcon icon={faBezierCurve} className='text-[#ea3336]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#ea3336] font-bold text-[24px] font-[montserrat]'>Graphics Design</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                We craft pixel-perfect designs with Coreldraw, Photoshop, Adobe Illustrator and Canva, creating designs that captivate customers.
                                </span>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[250px]h-auto flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 w-full'><span className='rounded-full py-3 px-[13px] justify-center items-center' style={{backgroundColor: 'rgba(232, 7, 127, 0.15)'}}>
                                <FontAwesomeIcon icon={faCode} className='text-[#e8077f]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#e8077f] font-bold text-[24px] font-[montserrat]'>Web App Dev_</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                We help convert your UI design into real website using the latest technology so that you can focus on growing your business
                                </span>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[250px]h-auto flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 w-full'><span className='rounded-full py-3 px-4 justify-center items-center' style={{backgroundColor: 'rgba(84, 51, 234, 0.15)'}}><FontAwesomeIcon icon={faDatabase} className='text-[#5433ea]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#5433ea] font-bold text-[24px] font-[montserrat]'>Backend Dev_</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[250px]h-auto flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 w-full'><span className='rounded-full py-3 px-[13px] justify-center items-center' style={{backgroundColor: 'rgba(234,51,54, 0.15)'}}><FontAwesomeIcon icon={faHouseLaptop} className='text-[#ea3336]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#ea3336] font-bold text-[24px] font-[montserrat]'>Freelance</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis blanditiis soluta quos perspiciatis
                                </span>
                            </div>
                        </div>
                        <div className='rounded-[20px] border-[#272c36] border-[2px] w-[250px]h-auto flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                            <div className='px-4 py-4 w-full'><span className='rounded-full py-3 px-[13px] justify-center items-center' style={{backgroundColor: 'rgba(90,241,67, 0.15)'}}><FontAwesomeIcon icon={faPenNib} className='text-[#5af143]'/></span></div>
                            <div className='flex flex-col px-4 py-3'>
                                <span className='text-[#5af143] font-bold text-[24px] font-[montserrat]'>UI/UX Design</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                We craft pixel-perfect designs with Figma and Adobe Xd, No clunky layouts, just smooth flows that guide your visitors.
                                </span>
                            </div>
                        </div>
                        {/* <div className='rounded-[20px] border-[#272c36] border-[2px] w-[250px]h-auto flex-shrink-0 flex justify-between flex-col py-2 service-card-bg'>
                        <div className='px-4 py-4 w-full'><span className='rounded-full py-3 px-4 justify-center items-center' style={{backgroundColor: 'rgba(225, 225, 225, 0.15)'}}><FontAwesomeIcon icon={faPlus} className='text-[#ffffff]'/></span></div>
                        <div className='flex flex-col px-4 py-3'>
                                <span className='text-gray-300 font-bold text-[24px] font-[montserrat]'>Others</span>
                                <span className='text-gray-400 font-[palanquin]'>
                                    We don't just build website, we craft experiences.
                                    click below to view all services.
                                </span>
                        </div>
                        </div> */}
                </div>
        </div>
        </section>
     );
}
 
export default Services;