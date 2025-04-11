import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faFolder, faWandMagicSparkles, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import calcThumbnail from '../assets/calculator_thumbnail.png'
import bmiThumbnail from '../assets/bmi_thumbnail.png'
import momoThmb from '../assets/screenshot__momo.jpg'
import wynxThmb from '../assets/screenshot_wynx.jpg'
import proposalThmb from '../assets/proposal.jpg'

// import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
const portfolio = () => {
    return (
        <section className="relative w-full bg-[#121212]" id='portfolio'>
            <div className="mx-auto max-w-7xl px-5 py-12 flex flex-col h-full">
                <div className='flex items-center flex-col'>
                    <span className='text-[16px] font-[montserrat] text-yellow-200 uppercase border-[1px] border-yellow-200 rounded-full px-2'><FontAwesomeIcon icon={faWandMagicSparkles} className='text-[#d3ae42]' size='sm'/> Portfolio</span>
                </div>
                <div className='py-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-3'>
                    <div className='p-3 bg-[#191d24] max-w-[350px] h-fit rounded-3xl'>
                        <div className='h-[180px] bg-[#2b2f34] border-2 border-[#2b2f34] flex flex-shrink-0 items-center justify-center text-white overflow-hidden rounded-2xl'>
                            <img src={momoThmb} className='w-full h-full'/>
                        </div>
                        <div className='flex flex-col justify-between bg-[#191d24] py-1 gap-2 text-white'>
                            <div className='flex flex-row gap-2 pt-2'>
                            <div className='flex flex-row gap-2 items-center font-bold'>
                            <span className='text-[12px] font-[montserrat] bg-[#3573a6] rounded-full px-1 h-[9px]'></span>
                                <span className='text-[12px] text-[#3573a6] font-[montserrat]'>react (100%)</span>
                                <span className='text-[12px] font-[montserrat] bg-[#35a648] rounded-full px-1 h-[9px]'></span>
                                <span className='text-[12px] text-[#35a648] font-[montserrat]'>tailwind (100%)</span>
                                <span className='text-[12px] font-[montserrat] bg-[#9ea635] rounded-full px-1 h-[9px]'></span>
                                <span className='text-[12px] text-[#9ea635] font-[montserrat]'>vite (100%)</span>
                            </div>
                            </div>
                            <span className='font-bold text-[22px]'>Ecommerce website</span>
                            <p>A modern and seamless online shopping experience built with Vite and Tailwind CSS. The platform offers a fast, responsive, and visually appealing interface, ensuring a smooth and enjoyable browsing experience.</p>
                            <div className='flex flex-row gap-2'>
                            <Link to={'https://github.com/Alagwudavid/momo'} className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2'><FontAwesomeIcon icon={faGithub}/> Source code</Link>
                            <Link to={'https://momo-marketplace.vercel.app'} target='blank' className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2 flex justify-center items-center gap-3'>Website <FontAwesomeIcon icon={faAngleRight}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 bg-[#191d24] max-w-[350px] h-fit rounded-3xl'>
                        <div className='h-[180px] bg-[#2b2f34] border-2 border-[#2b2f34] flex flex-shrink-0 items-center justify-center text-white overflow-hidden rounded-2xl'>
                            <img src={wynxThmb} className='w-full h-full'/>
                        </div>
                        <div className='flex flex-col justify-between bg-[#191d24] py-1 gap-2 text-white'>
                            <div className='flex flex-row gap-2 pt-2'>
                            <div className='flex flex-row gap-2 items-center font-bold'>
                            <span className='text-[12px] font-[montserrat] bg-[#3573a6] rounded-full px-1 h-[9px]'></span>
                                <span className='text-[12px] text-[#3573a6] font-[montserrat]'>react (100%)</span>
                                <span className='text-[12px] font-[montserrat] bg-[#35a648] rounded-full px-1 h-[9px]'></span>
                                <span className='text-[12px] text-[#35a648] font-[montserrat]'>tailwind (100%)</span>
                                <span className='text-[12px] font-[montserrat] bg-[#9ea635] rounded-full px-1 h-[9px]'></span>
                                <span className='text-[12px] text-[#9ea635] font-[montserrat]'>vite (100%)</span>
                            </div>
                            </div>
                            <span className='font-bold text-[22px]'>Portfolio website</span>
                            <p>A modern portfolio website built with Vite and Tailwind CSS. The platform offers a fast, responsive, and visually appealing interface, ensuring a smooth and enjoyable browsing experience.</p>
                            <div className='flex flex-row gap-2'>
                            <Link to={'https://github.com/Alagwudavid/wynx'} className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2'><FontAwesomeIcon icon={faGithub}/> Source code</Link>
                            <Link to={'https://wynx.vercel.app'} target='blank' className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2 flex justify-center items-center gap-3'>Website <FontAwesomeIcon icon={faAngleRight}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 bg-[#191d24] max-w-[350px] h-fit rounded-3xl'>
                        <div className='h-[180px] bg-[#2b2f34] border-2 border-[#2b2f34] flex flex-shrink-0 items-center justify-center text-white overflow-hidden rounded-2xl'>
                            <img src={calcThumbnail} className='w-full h-full'/>
                        </div>
                        <div className='flex flex-col justify-between bg-[#191d24] py-1 gap-2 text-white'>
                            <div className='flex flex-row gap-2 pt-2'>
                            <div className='flex flex-row gap-2 items-center text-[#3573a6] font-bold'>
                            <span className='text-[12px] font-[montserrat] bg-[#3573a6] rounded-full px-1 h-[9px]'></span>
                                <span className='text-[12px] font-[montserrat]'>python (100%)</span>
                            </div>
                            </div>
                            <span className='font-bold text-[22px]'>Simple Python Calculator</span>
                            <p>Just another CLI interactive, nice and simple Python Calculator. Does all basic calculations!</p>
                            <div className='flex flex-row gap-2'>
                            <Link to={'https://github.com/Alagwudavid/my_projects_on_python/blob/master/simple_calculator.py'} className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2'><FontAwesomeIcon icon={faGithub}/> Source code</Link>
                            <Link to={'/#no-link'} className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2 flex justify-center items-center gap-3'>Website <FontAwesomeIcon icon={faAngleRight}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 bg-[#191d24] max-w-[350px] h-fit rounded-3xl'>
                        <div className='h-[180px] bg-[#2b2f34] border-2 border-[#2b2f34] flex flex-shrink-0 items-center justify-center text-white overflow-hidden rounded-2xl'>
                            <img src={bmiThumbnail} className='w-full h-full'/>
                        </div>
                        <div className='flex flex-col justify-between bg-[#191d24] py-1 gap-2 text-white'>
                            <div className='flex flex-row gap-2 pt-2'>
                            <div className='flex flex-row gap-2 items-center text-[#3573a6] font-bold'>
                            <span className='text-[12px] font-[montserrat] bg-[#3573a6] rounded-full px-1 h-[9px]'></span>
                                <span className='text-[12px] font-[montserrat]'>python (100%)</span>
                            </div>
                            </div>
                            <span className='font-bold text-[22px]'>Simple BMI Calculator</span>
                            <p>Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters. A high BMI can indicate high body fatness!</p>
                            <div className='flex flex-row gap-2'>
                            <Link to={'https://github.com/Alagwudavid/my_projects_on_python/blob/master/bmi_calculator.py'} className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2'><FontAwesomeIcon icon={faGithub}/> Source code</Link>
                            <Link to={'/#no-link'} className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2 flex justify-center items-center gap-3'>Website <FontAwesomeIcon icon={faAngleRight}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 bg-[#191d24] max-w-[350px] h-fit rounded-3xl'>
                        <div className='h-[180px] bg-[#2b2f34] border-2 border-[#2b2f34] flex flex-shrink-0 items-center justify-center text-white  overflow-hidden rounded-2xl'>
                            <span><FontAwesomeIcon icon={faFolder}/> Repository</span>
                        </div>
                        <div className='flex flex-col justify-between bg-[#191d24] py-1 gap-2 text-white'>
                            <div className='flex flex-row gap-2 pt-2 items-center'>
                            <div className='flex flex-row gap-2 items-center text-[#3573a6] font-bold'>
                            <span className='text-[12px] font-[montserrat] bg-[#3573a6] rounded-full px-1 h-[9px]'></span>
                                <span className='text-[12px] font-[montserrat]'>python (100%)</span>
                            </div>
                                <span className='text-[12px] font-[montserrat] text-yellow-200 border-[1px] border-yellow-200 rounded-full px-2'><FontAwesomeIcon icon={faFolder}/> repository</span>
                            </div>
                            <span className='font-bold text-[22px]'>Python projects</span>
                            <p>A repository made for python projects combined</p>
                            <div className='flex flex-row gap-2'>
                            <Link to={'https://github.com/Alagwudavid/my_projects_on_python/'} className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2'><FontAwesomeIcon icon={faGithub}/> Source code</Link>
                            <Link to={'/#no-link'} className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2 flex justify-center items-center gap-3'>Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 bg-[#191d24] max-w-[350px] h-fit rounded-3xl flex flex-col gap-3 text-white'>
                        <div className='h-[180px] bg-[#2b2f34] border-2 border-[#2b2f34] flex flex-shrink-0 items-center justify-center text-white overflow-hidden rounded-2xl'>
                            <img src={proposalThmb} className='w-full h-full'/>
                        </div>
                        <span className='font-bold text-[22px] text-center'>
                            Submit a project proposal
                        </span>
                        <div className='flex items-center flex-col'>
                            <Link to={'https://github.com/Alagwudavid?tab=repositories'} target='blank' className='px-4 py-2 hover:text-blue-600 rounded-2xl bg-gray-700 hover:bg-[#2b2f34] transition-colors w-1/2 flex justify-center items-center gap-3'>Submit <FontAwesomeIcon icon={faAngleRight} /> </Link>
                        </div>
                    </div>
                </div>
            <div className='flex items-center flex-col'>
                <Link to={'https://github.com/Alagwudavid?tab=repositories'} target='blank' className=' border-2 border-yellow-200 rounded-3xl px-3 py-2 text-yellow-200'>Show more <FontAwesomeIcon icon={faAngleRight} /> </Link>
            </div>    
        </div>
        </section>
     );
}
 
export default portfolio;