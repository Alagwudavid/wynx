import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePicture from "../assets/profile/profile.jpg"
import { faArrowLeft, faBookBookmark, faBrain, faBriefcase, faCalendar, faCloudDownload, faLocationPinLock, faMars, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFacebook, faGoogle, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import CvDoc from "../assets/file/DAVID ALAGWU.pdf"
const ProfilePage = () => {
    return ( 
        <section className="relative w-full bg-[#fff]">
        <div className="mx-auto py-20 sm:px-6 lg:px-8 px-5 max-w-7xl flex flex-col gap-3">
            <Link to={'/'} className="rounded border-[2px] border-black text-center hover:text-white hover:bg-black text-black"><FontAwesomeIcon icon={faArrowLeft}/> Home</Link>
            <div className="w-full flex flex-row gap-4 items-center">
                <div className="w-[135px] h-fit">
                    <img src={ProfilePicture} alt="image of a masked man with cap facing backwards" className="w-auto h-auto rounded-3xl" style={{WebkitUserDrag: 'none'}} />
                </div>
                <div className="text-[18px]">
                    <h1><span className="text-black text-[1.2em] sm:text-[2em] font-bold">David (Favour) Alagwu</span></h1>
                    <div className="block lg:flex flex-row items-center gap-2 text-[14px] text-gray-600">
                    <p><FontAwesomeIcon icon={faMars} className="text-black"/> He/Him</p>
                    <span className="w-[1px] h-[1px] bg-gray-700 p-[1.5px] rounded-full lg:block hidden"></span>
                    <p><FontAwesomeIcon icon={faBrain}className="text-black"/> 3+ years experience</p>
                    </div>
                    <span className="text-[.8em] text-gray-700"><FontAwesomeIcon icon={faLocationPinLock} className="text-black"/> Lagos, Nigeria</span>
                </div>
            </div>
            <hr className="border-gray-500" />
            <div className="w-full">
                <div className="text-[18px] flex flex-col gap-3">
                    <span className="text-[16px] font-[montserrat] text-black uppercase border-[1px] border-gray-600 rounded-full px-2 flex flex-row w-fit items-center gap-2 cursor-default">
                    <FontAwesomeIcon icon={faPenNib}/>
                    <h1 className="text-[1.2em] font-bold">Bio-Data</h1>
                    </span>
                    <span className="text-black font-bold">Software Engineer || Frontend React Developer || Python Developer</span>
                    <div className="block lg:flex flex-row items-center gap-2 text-[14px] text-black">
                    <ul className="flex flex-col gap-2">
                        <li className="gap-2 flex items-center"><FontAwesomeIcon icon={faLinkedin} className="text-blue-500" size="lg"/><Link to={'https://www.linkedin.com/davidalagwung'} className="text-gray-500 font-bold hover:underline">in/davidalagwung</Link></li>
                        <li className="gap-2 flex items-center"><FontAwesomeIcon icon={faXTwitter} size="lg"/><Link to={'https://www.x.com/davidalagwu'} className="text-gray-500 font-bold hover:underline">@davidalagwu</Link></li>
                        <li className="gap-2 flex items-center"><FontAwesomeIcon icon={faGoogle} className="text-yellow-500" size="lg"/><Link to={'mailto:alagwudavid@gmail.com'} className="text-gray-500 font-bold hover:underline">alagwudavid@gmail.com</Link></li>
                        <li className="gap-2 flex items-center"><FontAwesomeIcon icon={faFacebook} className="text-blue-500" size="lg"/><Link to={'https://www.facebook.com/davidalagwu'} className="text-gray-500 font-bold hover:underline">fb/davidalagwung</Link></li>
                    </ul>
                    </div>
                    <div className="block text-[14px] text-black">
                    <span className="bg-blue-700 text-white px-2 py-1">Description:</span>
                    <div className="text-black bg-blue-300 p-2 cursor-default">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, ipsum. Atque illo minus officiis, doloremque quis debitis ratione quidem facilis voluptatum reiciendis doloribus quos laboriosam, aperiam, corporis ullam odit qui? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo, voluptatum necessitatibus error, vitae, ea quidem exercitationem voluptatem maxime rerum possimus. Maiores pariatur sint laboriosam voluptates iusto harum suscipit odio?
                    </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-500" />
            <div className="text-[18px] flex flex-col gap-4">
                    <span className="text-[16px] font-[montserrat] text-black uppercase border-[1px] border-gray-600 rounded-full px-2 flex flex-row w-fit items-center gap-2 cursor-default">
                    <FontAwesomeIcon icon={faBookBookmark}/>
                    <h1 className="text-[1.2em] font-bold">Education</h1>
                    </span>
                    <div className="flex flex-col gap-1">
                    <span className="text-black font-bold">University of Nigeria, Nsukka</span>
                    <div className="flex flex-row items-center gap-2">
                    <p className="text-[14px]"><FontAwesomeIcon icon={faCalendar} className="text-black"/> 2022 - (current)</p>
                    <span className="w-[1px] h-[1px] bg-gray-700 p-[1.5px] rounded-full block"></span>
                    <p className="text-[14px]"><FontAwesomeIcon icon={faLocationPinLock}className="text-black"/> Enugu, Nigeria</p>
                    </div>
                    <div className="flex flex-row items-center gap-3 text-[14px] text-black">
                    <span className="bg-black text-white px-2 py-1">Course:</span>
                    <span className="uppercase">Mechanical Engineering</span>
                    </div>
                    </div>
                    <div className="flex flex-col gap-1">
                    <span className="text-black font-bold">Ewutuntun Grammar School, Mafoluku</span>
                    <div className="flex flex-row items-center gap-2">
                    <p className="text-[14px]"><FontAwesomeIcon icon={faCalendar} className="text-black"/> 2015 - 2022</p>
                    <span className="w-[1px] h-[1px] bg-gray-700 p-[1.5px] rounded-full block"></span>
                    <p className="text-[14px]"><FontAwesomeIcon icon={faLocationPinLock}className="text-black"/> Lagos, Nigeria</p>
                    </div>
                    <div className="flex flex-row items-center gap-3 text-[14px] text-black">
                    <span className="bg-black text-white px-2 py-1">Course:</span>
                    <span className="uppercase">Mechanical Engineering</span>
                    </div>
                    </div>
                </div>
            <hr className="border-gray-500" />
            <div className="text-[18px] flex flex-col gap-4">
                    <span className="text-[16px] font-[montserrat] text-black uppercase border-[1px] border-gray-600 rounded-full px-2 flex flex-row w-fit items-center gap-2 cursor-default">
                    <FontAwesomeIcon icon={faBriefcase}/>
                    <h1 className="text-[1.2em] font-bold">Work Experience</h1>
                    </span>
                    <div className="flex flex-col gap-1">
                        <span className="text-black font-bold">TSCO Software Services</span>
                        <div className="flex flex-row items-center gap-2">
                        <p className="text-[14px]"><FontAwesomeIcon icon={faCalendar} className="text-black"/> (Jun - Aug) 2022</p>
                        <span className="w-[1px] h-[1px] bg-gray-700 p-[1.5px] rounded-full block"></span>
                        <p className="text-[14px]"><FontAwesomeIcon icon={faLocationPinLock}className="text-black"/> (Remote) Nigeria</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 text-[14px] text-black">
                        <span className="bg-black text-white px-2 py-1">Position:</span>
                        <span className="uppercase">Front-end developer</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-black font-bold">Hoptec Business Services</span>
                        <div className="flex flex-row items-center gap-2">
                        <p className="text-[14px]"><FontAwesomeIcon icon={faCalendar} className="text-black"/> 2015 - 2022</p>
                        <span className="w-[1px] h-[1px] bg-gray-700 p-[1.5px] rounded-full block"></span>
                        <p className="text-[14px]"><FontAwesomeIcon icon={faLocationPinLock}className="text-black"/> Lagos, Nigeria</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 text-[14px] text-black">
                        <span className="bg-black text-white px-2 py-1">Position:</span>
                        <span className="uppercase">(Staff) Operator</span>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-500" />
                <Link to={CvDoc} target="blank" className="rounded text-center hover:text-white hover:bg-blue-400 bg-blue-700 py-2 text-black"><FontAwesomeIcon icon={faCloudDownload}/> Download CV</Link>
          </div>
        </section>
     );
}
 
export default ProfilePage;