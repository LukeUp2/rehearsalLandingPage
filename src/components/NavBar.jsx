import React, { useState } from 'react'

import { navLinks } from '../constants'
import { RehearsalLogo, instagram, linkedin } from '../assets'

function NavBar() {

  const [toggle, setToggle] = useState(false)


  return (
    <nav className='w-full flex py-6 justify-between items-center'>
      {/* <img src={RehearsalLogo} className=' h-[100px]' /> */}

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins ${'mr-10'} font-normal text-[20px] cursor-pointer text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        <div className='mr-10 cursor-pointer'>
          <a href="https://www.instagram.com/rehearsal.vr/" target={'_blank'}>
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className='cursor-pointer'>
          <a href="https://www.linkedin.com/company/xrehearsal/" target={'_blank'}>
            <img src={linkedin} alt="instagram" />
          </a>
        </div>

      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* <img 
            src={toggle ? close : menu} 
            alt='menu' 
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(prev => !prev)}
          /> */}
      </div>

      <div
        className={`${toggle ? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} font-normal cursor-pointer text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
      </div>
    </nav>
  )
}

export default NavBar