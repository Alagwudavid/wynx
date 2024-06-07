import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
export default function AlertBox() {
  return (
  <section className="h-[45px] w-full bg-white fixed z-50 top-0">
          <div className="mx-auto max-w-7xl px-5 py-2 flex h-full flex-row gap-3">
           <span className="uppercase font-bold">Notice:</span>
           <marquee className='text-red-600'>Site is currently under maintenance, some function might not work eg. the close button on this notice container</marquee>
           <button href='#' className='rounded px-3 py-0 bg-gray-700 text-white'><FontAwesomeIcon icon={ faX } size="sm" /></button>
            </div>
  </section>
  )
}