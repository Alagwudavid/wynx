import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faFolder, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import calcThumbnail from '../assets/calculator_thumbnail.png'
import bmiThumbnail from '../assets/bmi_thumbnail.png'
// import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
const portfolio = () => {
    return (
        <section className="relative w-full bg-[#121212]">
            <div className="mx-auto max-w-7xl px-5 py-12 flex flex-col h-full">
                <div className='flex items-center flex-col'>
                    <span className='text-[16px] font-[montserrat] text-yellow-200 uppercase border-[1px] border-yellow-200 rounded-full px-2'><FontAwesomeIcon icon={faWandMagicSparkles} className='text-[#d3ae42]' size='sm'/> Portfolio</span>
                </div>
                <div className='py-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-3 items-center'>
                    <div className='mx-auto p-3 bg-[#191d24] max-w-[350px] flex-shrink-0 rounded-md'>
                        <div className='h-[180px] p-1 bg-[#2b2f34] flex flex-shrink-0 items-center justify-center text-white'>
                            <img src={calcThumbnail}/>
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
                            <Link to={'https://github.com/Alagwudavid/my_projects_on_python/blob/master/simple_calculator.py'} className='px-4 py-2 rounded bg-gray-700 w-1/2'><FontAwesomeIcon icon={faGithub}/> Source code</Link>
                            <Link to={'#'} className='px-4 py-2 rounded bg-gray-700 w-1/2 flex justify-center items-center gap-3'>Website <FontAwesomeIcon icon={faAngleRight}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto p-3 bg-[#191d24] max-w-[350px] flex-shrink-0 rounded-md'>
                        <div className='h-[180px] p-1 bg-[#2b2f34] flex flex-shrink-0 items-center justify-center text-white'>
                            <img src={bmiThumbnail}/>
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
                            <Link to={'https://github.com/Alagwudavid/my_projects_on_python/blob/master/bmi_calculator.py'} className='px-4 py-2 rounded bg-gray-700 w-1/2'><FontAwesomeIcon icon={faGithub}/> Source code</Link>
                            <Link to={'#'} className='px-4 py-2 rounded bg-gray-700 w-1/2 flex justify-center items-center gap-3'>Website <FontAwesomeIcon icon={faAngleRight}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto p-3 bg-[#191d24] max-w-[350px] flex-shrink-0 rounded-md'>
                        <div className='h-[180px] p-1 bg-[#2b2f34] flex flex-shrink-0 items-center justify-center text-white'>
                            Repository
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
                            <Link to={'https://github.com/Alagwudavid/my_projects_on_python/blob/master/bmi_calculator.py'} className='px-4 py-2 rounded bg-gray-700 w-1/2'><FontAwesomeIcon icon={faGithub}/> Source code</Link>
                            <Link to={'#'} className='px-4 py-2 rounded bg-gray-700 w-1/2 flex justify-center items-center gap-3'>Website <FontAwesomeIcon icon={faAngleRight}/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='flex items-center flex-col'>
                <Link to={'https://github.com/Alagwudavid?tab=repositories'} target='blank' className=' border-2 border-yellow-200 rounded-md px-3 py-2 text-yellow-200'>Show more <FontAwesomeIcon icon={faAngleRight} /> </Link>
            </div>    
        </div>
        </section>
     );
}
 
export default portfolio;