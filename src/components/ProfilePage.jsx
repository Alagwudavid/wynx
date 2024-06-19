import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePicture from "../assets/profile/profile.jpg";
import {
  faArrowLeft,
  faBookBookmark,
  faBrain,
  faBriefcase,
  faCalendar,
  faCloudDownload,
  faLocationPinLock,
  faMagicWandSparkles,
  faMars,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import CvDoc from "../assets/file/MyResume.pdf";
const ProfilePage = () => {
  return (
    <section className="relative w-full bg-[#fff]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-20 sm:px-6 lg:px-8">
        <Link
          to={"/"}
          className="rounded border-[2px] border-black text-center text-black hover:bg-black hover:text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Home
        </Link>
        <div className="flex w-full flex-row items-center gap-4">
          <div className="h-fit w-[135px]">
            <img
              src={ProfilePicture}
              alt="image of a masked man with cap facing backwards"
              className="h-auto w-auto rounded-3xl"
              style={{ WebkitUserDrag: "none" }}
            />
          </div>
          <div className="text-[18px]">
            <h1>
              <span className="text-[1.2em] font-bold text-black sm:text-[2em]">
                David (Favour) Alagwu
              </span>
            </h1>
            <div className="block flex-row items-center gap-2 text-[14px] text-gray-600 lg:flex">
              <p>
                <FontAwesomeIcon icon={faMars} className="text-black" /> He/Him
              </p>
              <span className="hidden h-[1px] w-[1px] rounded-full bg-gray-700 p-[1.5px] lg:block"></span>
              <p>
                <FontAwesomeIcon icon={faBrain} className="text-black" /> 3+
                years experience
              </p>
            </div>
            <span className="text-[.8em] text-gray-700">
              <FontAwesomeIcon
                icon={faLocationPinLock}
                className="text-black"
              />{" "}
              Lagos, Nigeria
            </span>
          </div>
        </div>
        <hr className="border-gray-500" />
        <div className="w-full">
          <div className="flex flex-col gap-3 text-[18px]">
            <span className="flex w-fit cursor-default flex-row items-center gap-2 rounded-full border-[1px] border-gray-600 px-2 font-[montserrat] text-[16px] uppercase text-black">
              <FontAwesomeIcon icon={faPenNib} />
              <h1 className="text-[1.2em] font-bold">Bio-Data</h1>
            </span>
            <span className="font-bold text-black">
              Software Engineer || Frontend React Developer || Python Developer
            </span>
            <div className="block flex-row items-center gap-2 text-[14px] text-black lg:flex">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-black"
                    size="lg"
                  />
                  <Link
                    to={"https://www.linkedin.com/davidalagwung"}
                    className="font-bold text-gray-500 hover:underline"
                  >
                    in/davidalagwung
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-500"
                    size="lg"
                  />
                  <Link
                    to={"https://www.linkedin.com/davidalagwung"}
                    className="font-bold text-gray-500 hover:underline"
                  >
                    in/davidalagwung
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faXTwitter} size="lg" />
                  <Link
                    to={"https://www.x.com/davidalagwu"}
                    className="font-bold text-gray-500 hover:underline"
                  >
                    @davidalagwu
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="text-yellow-500"
                    size="lg"
                  />
                  <Link
                    to={"mailto:alagwudavid@gmail.com"}
                    className="font-bold text-gray-500 hover:underline"
                  >
                    alagwudavid@gmail.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-500"
                    size="lg"
                  />
                  <Link
                    to={"https://www.facebook.com/davidalagwu"}
                    className="font-bold text-gray-500 hover:underline"
                  >
                    fb/davidalagwung
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block text-[14px] text-black">
              <span className="bg-blue-700 px-2 py-1 text-white">
                Description:
              </span>
              <div className="cursor-default bg-blue-300 p-2 text-black">
                Hello! I'm Alagwu David, a passionate software engineer. I
                develop web applications and produce garphic designs. i
                specualize in many areas and skills and I love to do most of the
                things using JavaScript. I love to make the web more open to the
                world. I'm an undergraduate with a pending bachelor's degree in
                Mechanical Engineering from University of Nigeria, Nsukka,
                Enugu. I am available for any kind of job opportunity that suits
                my interests.
              </div>
            </div>
            <hr className="border-gray-500" />
            <span className="flex w-fit cursor-default flex-row items-center gap-2 rounded-full border-[1px] border-gray-600 px-2 font-[montserrat] text-[16px] uppercase text-black">
              <FontAwesomeIcon icon={faMagicWandSparkles} />
              <h1 className="text-[1.2em] font-bold">Skills</h1>
            </span>
            <ul className="flex flex-row gap-2">
              <li className="rounded-full border-[1px] border-black px-2 font-[montserrat] text-[18px] text-black">
                Html: 90%
              </li>
              <li className="rounded-full border-[1px] border-black px-2 font-[montserrat] text-[18px] text-black">
                React: 50%
              </li>
              <li className="rounded-full border-[1px] border-black px-2 font-[montserrat] text-[18px] text-black">
                Sass: 90%
              </li>
              <li className="rounded-full border-[1px] border-black px-2 font-[montserrat] text-[18px] text-black">
                Tailwind: 85%
              </li>
              <li className="rounded-full border-[1px] border-black px-2 font-[montserrat] text-[18px] text-black">
                Php: 50%
              </li>
              <li className="rounded-full border-[1px] border-black px-2 font-[montserrat] text-[18px] text-black">
                MySql: 75%
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-500" />
        <div className="flex flex-col gap-4 text-[18px]">
          <span className="flex w-fit cursor-default flex-row items-center gap-2 rounded-full border-[1px] border-gray-600 px-2 font-[montserrat] text-[16px] uppercase text-black">
            <FontAwesomeIcon icon={faBookBookmark} />
            <h1 className="text-[1.2em] font-bold">Education</h1>
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-black">
              University of Nigeria, Nsukka
            </span>
            <div className="flex flex-row items-center gap-2">
              <p className="text-[14px]">
                <FontAwesomeIcon icon={faCalendar} className="text-black" />{" "}
                2022 - (current)
              </p>
              <span className="block h-[1px] w-[1px] rounded-full bg-gray-700 p-[1.5px]"></span>
              <p className="text-[14px]">
                <FontAwesomeIcon
                  icon={faLocationPinLock}
                  className="text-black"
                />{" "}
                Enugu, Nigeria
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 text-[14px] text-black">
              <span className="bg-black px-2 py-1 text-white">Course:</span>
              <span className="uppercase">Mechanical Engineering</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-black">
              Ewutuntun Grammar School, Mafoluku
            </span>
            <div className="flex flex-row items-center gap-2">
              <p className="text-[14px]">
                <FontAwesomeIcon icon={faCalendar} className="text-black" />{" "}
                2015 - 2022
              </p>
              <span className="block h-[1px] w-[1px] rounded-full bg-gray-700 p-[1.5px]"></span>
              <p className="text-[14px]">
                <FontAwesomeIcon
                  icon={faLocationPinLock}
                  className="text-black"
                />{" "}
                Lagos, Nigeria
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 text-[14px] text-black">
              <span className="bg-black px-2 py-1 text-white">
                Certificate:
              </span>
              <span className="uppercase">
                (SSCE) Senior School Leaving Certificate
              </span>
            </div>
          </div>
        </div>
        <hr className="border-gray-500" />
        <div className="flex flex-col gap-4 text-[18px]">
          <span className="flex w-fit cursor-default flex-row items-center gap-2 rounded-full border-[1px] border-gray-600 px-2 font-[montserrat] text-[16px] uppercase text-black">
            <FontAwesomeIcon icon={faBriefcase} />
            <h1 className="text-[1.2em] font-bold">Work Experience</h1>
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-black">TSCO Software Services</span>
            <div className="flex flex-row items-center gap-2">
              <p className="text-[14px]">
                <FontAwesomeIcon icon={faCalendar} className="text-black" />{" "}
                (Jun - Aug) 2023
              </p>
              <span className="block h-[1px] w-[1px] rounded-full bg-gray-700 p-[1.5px]"></span>
              <p className="text-[14px]">
                <FontAwesomeIcon
                  icon={faLocationPinLock}
                  className="text-black"
                />{" "}
                (Remote) Nigeria
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 text-[14px] text-black">
              <span className="bg-black px-2 py-1 text-white">Position:</span>
              <span className="uppercase">Front-End developer</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-black">
              Hoptec Business Services
            </span>
            <div className="flex flex-row items-center gap-2">
              <p className="text-[14px]">
                <FontAwesomeIcon icon={faCalendar} className="text-black" />{" "}
                2015 - 2022
              </p>
              <span className="block h-[1px] w-[1px] rounded-full bg-gray-700 p-[1.5px]"></span>
              <p className="text-[14px]">
                <FontAwesomeIcon
                  icon={faLocationPinLock}
                  className="text-black"
                />{" "}
                Lagos, Nigeria
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 text-[14px] text-black">
              <span className="bg-black px-2 py-1 text-white">Position:</span>
              <span className="uppercase">(Staff) Operator</span>
            </div>
          </div>
        </div>
        <hr className="border-gray-500" />
        <Link
          to={CvDoc}
          target="blank"
          className="rounded bg-blue-700 py-2 text-center text-black hover:bg-blue-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faCloudDownload} /> Download CV
        </Link>
      </div>
    </section>
  );
};

export default ProfilePage;
