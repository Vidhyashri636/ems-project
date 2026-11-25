import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavbarContainer = () => {
  return (
    <section className='w-[100vw] h-[75px] bg-gray-800 text-white flex justify-between items-center px-4'>
      <Logo/>
      <Menu/>
    </section>
  )
}

export default NavbarContainer
