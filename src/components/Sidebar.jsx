import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [ fix, setFix ] = useState(false)
    function setFixed() {
      if (window.scrollY >= 10){
        setFix(true)
      }
        else{
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return ( 
        <div className="min-h-screen bg-transparent w-[62px] p-3 flex flex-col gap-5 items-center fixed top-3/4 right-3 z-10 text-white">
            {/* <Link to="/"><FontAwesomeIcon icon={faChevronUp} size="2x" className={`hover:text-gray-500 ${fix ? 'text-black' : 'text-white'}`} /></Link>
            <Link to="/"><FontAwesomeIcon icon={faChevronDown} size="2x" className={`hover:text-gray-500 ${fix ? 'text-white' : 'text-black'}`} /></Link>
                     */}
        </div>
     );
}
 
export default Sidebar;