
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faUserShield, faPeopleGroup, faHeadset} from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <section className="relative w-full bg-[#f3f3f3]">
            <div className="mx-auto max-w-7xl px-5 py-[72px] sm:px-6 lg:px-8 flex flex-col h-full">
                <div className='block text-center'>
                    <div className='text-[32px] font-[palanquin] font-bold'>Trending Services</div>
                    <div className='font-[montserrat] mb-5'>
                        Explore services we offer
                    </div>
                </div>
                <div className='swiper-wrapper overflow-x-hidden flex flex-row flex-nowrap gap-10 items-center'>
                        <div className='bg-gray-700 rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-gray-700 rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-gray-700 rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-gray-700 rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-gray-700 rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-gray-700 rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-gray-700 rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                </div>
        </div>
        </section>
     );
}
 
export default Services;