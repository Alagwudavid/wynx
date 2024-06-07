import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import ProfilePicture from '../assets/profile/profile.jpg'
import logoText from '../assets/logoText.svg'
import { navigation } from "./constants"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
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
    <Disclosure as="nav" className={`${fix ? 'bg-white' : 'bg-transparent'} fixed w-full z-50 transition duration-500 ease-in-out`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className={`relative inline-flex items-center justify-center rounded-md p-2 ${fix ? 'text-black' : 'text-white'} hover:bg-gray-700 hover:text-white`}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ChevronDoubleUpIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <ChevronDoubleDownIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div
                    className="w-auto relative"
                    ><img src={logoText} alt="Logo" className="h-6" /></div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white transition duration-700 ease-in-out',
                          'rounded-md px-3 py-2 text-sm font-medium', fix ? 'text-black' : 'text-white'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className='flex gap-3'>
              <Link
                to="./"
                className={`${fix ? 'text-black' : 'text-white'} px-2 py-1 text-md font-medium md:block hidden`}
                ><FontAwesomeIcon icon={faHandsClapping} className='text-red-500' size='lg'/> '20'</Link>
              <Link
                to="https://wa.me/+2349045492542?text=I'm%20interested%20in"
                className={`${fix ? 'text-black' : 'text-white'} px-2 py-1 text-md font-medium md:block hidden bg-green-400 rounded`}
                ><FontAwesomeIcon icon={faWhatsapp} size='lg'/> Chat</Link>
              </div>
                {/* Profile dropdown */}
                <Menu as="div" className="hidden relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-black text-sm">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <span
                        className="h-9 w-9 rounded-full bg-black items-center flex justify-center border-2 border-black"
                      ><img src={ProfilePicture} className='rounded-full'/></span>
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                           Profile (David Alagwu)
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Login
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="flex gap-[1px] space-y-1 px-[2px] pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-black text-white' : `${fix ? 'text-black' : 'text-white'} hover:bg-black hover:text-white`,
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}