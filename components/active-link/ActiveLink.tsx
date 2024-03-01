'use client'

import Link from 'next/link';
import style from './activeLink.module.css'
import { usePathname } from 'next/navigation';

interface props{
    path: string;
    text: string;
}

export const ActiveLink = ({path, text}:props) => {

    const pathName = usePathname()
    
    return (

        <Link className={`${style.link} ${(pathName===path)&&style.activeLink}`} href={path}>{text}</Link>

    )
}
