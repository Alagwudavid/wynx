
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Services = () => {
    return (
        <section className="relative h-[728px] w-full bg-[#0d1017]">
            <div className="mx-auto max-w-7xl px-5 py-[72px] sm:px-6 lg:px-8 flex flex-col h-full">
                <div className='block text-center'>
                    <div className='text-[32px] font-[palanquin] font-bold text-white uppercase'>Our Services</div>
                    <div className='font-[montserrat] mb-5 text-gray-400'>
                        Browse our services
                    </div>
                </div>
                <div className='swiper-wrapper overflow-x-hidden flex flex-row flex-nowrap gap-10 mt-5 items-center'>
                        <div className='bg-[#161a21] rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-[#161a21] rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-[#161a21] rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-[#161a21] rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-[#161a21] rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-[#161a21] rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                        <div className='bg-[#161a21] rounded-md w-[250px] h-[200px] flex-shrink-0'></div>
                </div>
        </div>
        </section>
     );
}
 
export default Services;