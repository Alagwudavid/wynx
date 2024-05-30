// import landingSm from '../assets/landing_lg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socials } from './constants';
// import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
    return (
    <section className="relative min-h-[470px] w-full bg-image1">
            <div className="mx-auto max-w-7xl px-5 py-[72px] sm:px-6 lg:px-8 flex h-full">
                <div className=" w-[760px] justify-end mt-20 mb-5 gap-4 flex flex-col">
                    {/* <h1 className="text-[32px] lg:text-[42px] font-[700] font-[Palanquin]"><TypeAnimation
                    sequence={['A software developer', 3000, 'a brand', 3000, 'an aspiring engineer', 3000]}
                    className='text-[36px] text-[#5534eb] border-s-4 border-e-4 rounded-full px-4 bg-[#edefff]'
                    repeat={Infinity}
                    /></h1> */}
                    <div className="font-[montserrat]">
                    Hello! I'm David Alagwu, a passionate and dedicated web developer with a flair for crafting elegant, efficient, and innovative digital solutions. My portfolio showcases a curated selection of my best work, highlighting my skills in front-end and back-end development, user experience design, and problem-solving.
                    </div>
                    <div className="flex space-x-4">
                    {socials.map((item) => (
                        <a key={item.label} href={item.href} aria-label={item.label}>
                        <FontAwesomeIcon icon={item.icon} size="2x" className={`hover:text-[${item.color}]`} />
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Hero;