import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import CvDoc from "../assets/file/DAVID ALAGWU.pdf"


const Sidebar = () => {

    return ( 
        <div className="min-h-screen bg-transparent w-[62px] p-3 flex flex-col gap-5 items-center fixed top-3/4 right-3 z-10 text-white">
              <Link 
                 to={CvDoc} target='blank'
                className={`text-white bg-white rounded-full py-2 px-[10px] text-md font-medium sm:block lg:hidden relative`}
                ><FontAwesomeIcon icon={faDownload} className='text-blue-700' size='lg'/><span className='rounded-full px-1 py-[2px] text-[10px] bg-gray-400 text-black font-bold absolute -top-1 -right-1'>CV</span></Link>
              <Link
                to="https://wa.me/+2349045492542"
                className={`text-white px-2 py-1 text-md font-medium sm:block lg:hidden bg-green-400 rounded`}
                ><FontAwesomeIcon icon={faWhatsapp} size='lg'/></Link>
        </div>
     );
}
 
export default Sidebar;