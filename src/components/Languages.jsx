
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faSass, faPhp, faLaravel, faSquareJs, faMicrosoft, faPython, faTailwindCss } from '@fortawesome/free-brands-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons'
const Languages = () => {
    return (
        <section className="relative h-fit w-full bg-[#121212]">
            <div className="mx-auto max-w-7xl px-5 py-20 flex flex-col h-full">
            <div className='flex items-center flex-col'>
                    <div className='text-[16px] font-[montserrat] text-yellow-200 uppercase border-[1px] border-yellow-200 rounded-full px-2'><FontAwesomeIcon icon={faToolbox} className='text-[#d3ae42]' size='sm'/> Tools</div>
                    <div className='font-[palanquin] italic mb-5 text-white'>
                       Languages, Frameworks and Tools i work with
                    </div>
                </div>
                <div className='flex flex-row flex-wrap sm:gap-2 gap-10 mt-2 items-center justify-center'>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faHtml5} className='text-[brown]' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-[brown] font-bold text-[22px] font-[montserrat]'>HTML5</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faCss3} className='text-[#6cbfff]' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-[#6fbfff] font-bold text-[22px] font-[montserrat]'>CSS3</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faTailwindCss} className='text-blue-600' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-blue-600 font-bold text-[22px] font-[montserrat]'>Tailwind Css</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faSquareJs} className='text-[yellow]' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-[#d4af42] font-bold text-[22px] font-[montserrat]'>Javascript</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faReact} className='text-[#369ae7]' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-[#369ae7] font-bold text-[22px] font-[montserrat]'>React</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faSass} className='text-[#d44255]' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-[#d44255] font-bold text-[22px] font-[montserrat]'>Sass</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faPython} className='text-yellow-200' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-yellow-200 font-bold text-[22px] font-[montserrat]'>Python</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faLaravel} className='text-[#d4af42]' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-[#d4af42] font-bold text-[22px] font-[montserrat]'>Laravel</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faPhp} className='text-[#666]' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-[#666] font-bold text-[22px] font-[montserrat]'>PHP</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between flex-row py-2 px-3 gap-3'>
                            <span className='flex items-center'><FontAwesomeIcon icon={faMicrosoft} className='text-[#fff]' size='2x'/></span>
                            <div className='flex items-center'>
                                <span className='text-[#fff] font-bold text-[22px] font-[montserrat]'>Office Packages</span>
                            </div>
                        </div>
                        <div className='rounded-md flex-shrink-0 flex justify-between py-2 px-3'>
                            <div className='flex items-center'>
                                <span className='text-[red] font-bold text-[22px] font-[montserrat]'>ADOBE Packages</span>
                            </div>
                        </div>
                </div>
        </div>
        </section>
     );
}
 
export default Languages;