import { sideSites } from "./constants"
const Sidebar = () => {
    return ( 
        <div className="min-h-screen bg-[white] w-[62px] p-3 flex flex-col gap-5 items-center">
            {sideSites.map((site) => (
                <a href={site.href} key={site.label} className='group'>
                <img src={site.imgUrl} alt={site.label} className="w-[38px] group-hover:active-web transition duration-500 ease-in" />
                <p className="hidden group-hover:block absolute left-[50px] z-10 rounded-[6px] bg-black py-1 px-2 text-white">
        {site.label}</p>
               </a>
            ))}
        </div>
     );
}
 
export default Sidebar;