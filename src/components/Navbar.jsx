import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import React, { Fragment, useState, useEffect } from 'react'
import ProfilePicture from '../assets/profile/profile.jpg'
import WynxLogo from './wynxLogo';
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
import { BarsArrowDownIcon, BarsArrowUpIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { faDownload, faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  return (
    <Disclosure as="nav" className={`bg-[#121212]`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex py-[25px] items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className={`relative inline-flex items-center justify-center rounded-md p-2 text-[#FBE68D] hover:bg-yellow-900 hover:text-[#FBE68D]`}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <BarsArrowUpIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <BarsArrowDownIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div
                    className="w-auto relative"
                    ><WynxLogo/></div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? ' text-white' : 'text-black transition duration-500 ease-in-out',
                          'rounded-md px-3 py-2 text-sm font-medium', 'text-white'
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
                to="https://wa.me/+2349045492542"
                className={`text-[#121212] px-4 py-1 text-md font-medium md:block hidden bg-yellow-200 rounded`}
                ><FontAwesomeIcon icon={faWhatsapp} size='lg'/> Chat</Link>
                <Link
                to="../assets/file/DAVID ALAGWU.pdf"
              className={`text-yellow-200 border-yellow-200 px-2 py-1 text-md font-medium md:block hidden rounded-md border-[2px]`}
                ><FontAwesomeIcon icon={faDownload} size='lg'/> Resume</Link>
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
            <div className="flex gap-[1px] space-y-1 px-[2px] pb-3 pt-2 justify-between mx-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="Link"
                  to={item.href}
                  className={classNames(
                    item.current ? ' text-white' : `text-white`,
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}