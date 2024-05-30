import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return ( 
        <div className="min-h-screen bg-transparent w-[62px] p-3 flex flex-col gap-5 items-center fixed top-1/2 right-3 z-10 text-white">
            <a><FontAwesomeIcon icon={faChevronUp} size="2x" className="hover:text-gray-500 text-white" /></a>
            <a><FontAwesomeIcon icon={faChevronDown} size="2x" className="hover:text-gray-500 text-white" /></a>
        </div>
     );
}
 
export default Sidebar;