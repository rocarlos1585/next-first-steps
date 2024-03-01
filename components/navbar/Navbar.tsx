import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink';


const navItems = [
    {path:"/about", text:"About"},
    {path:"/contact", text:"Contact"},
    {path:"/pricing", text:"pricing"}
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-500 bg-opacity-30 p-2 m-2 rounded'>

        <Link href={'/'} className='flex items-center'>
            <HomeIcon className='mr-2'/>
            <span>home</span>
        </Link>

        <div className='flex flex-1'></div>

       {
        navItems.map(navItem=>(
            <ActiveLink key={navItem.path} {...navItem}/>
        ))
       } 



    </nav>
  )
}
