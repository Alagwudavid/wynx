import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import CvDoc from "../assets/file/MyResume.pdf";

const Sidebar = () => {
  return (
    <div className="fixed right-3 top-3/4 z-10 flex min-h-screen w-[62px] flex-col items-center gap-5 bg-transparent p-3 text-white">
      <Link
        to={CvDoc}
        target="blank"
        className={`text-md relative rounded-full bg-white px-[10px] py-2 font-medium text-white sm:block lg:hidden`}
      >
        <FontAwesomeIcon
          icon={faDownload}
          className="text-blue-700"
          size="lg"
        />
        <span className="absolute -right-1 -top-1 rounded-full bg-gray-400 px-1 py-[2px] text-[10px] font-bold text-black">
          CV
        </span>
      </Link>
      <Link
        to="https://wa.me/+2349045492542"
        className={`text-md rounded bg-green-400 px-2 py-1 font-medium text-white sm:block lg:hidden`}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </Link>
    </div>
  );
};

export default Sidebar;
