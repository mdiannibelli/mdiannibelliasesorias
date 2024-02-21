"use client"
import { itemsNavbar, socialNetworks } from "@/data";
/* navigation paths */
import { usePathname } from "next/navigation";
import img from '../public/banner-white.png'

import Link from "next/link";
import MotionTransition from "./transition-component";
import Image from "next/image";

const Navbar = () => {
    const router = usePathname()
    return(
        <MotionTransition position="bottom" className="fixed z-40 top-0 flex flex-col items-center justify-center w-full mt-auto h-max backdrop-blur-sm">
            <nav className="flex items-center xl:gap-x-20">
            <div className="hidden sm:block w-auto h-auto mt-6">
                <Image src={img} className="w-[240px] h-[35px]" alt="logo" />
            </div>
                <div className="flex items-center justify-center gap-2 xl:px-4 xl:py-1 rounded-full background-blur-sm mt-6">
                    {itemsNavbar.map((item) => (
                        <div key={item.id} className={`px-2 py-2 md:px-4 md:py-3 transition duration-150 rounded-full cursor-pointer hover:bg-secondary bg-opacity-[0.8]  ${router === item.link && 'bg-secondary'} `} >
                            <Link className="flex gap-x-2 items-center size-4 md:w-auto" href={item.link}>{item.icon}<p className="hidden lg:block">{item.title}</p></Link>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center xl:px-4 xl:py-1 rounded-full background-blur-sm mt-6 xl:ml-6">
                    {socialNetworks.map((social) => (
                         <div key={social.id} className={`px-4 py-3 transition duration-150 rounded-full cursor-pointer hover:bg-secondary bg-opacity-[0.8]`}>
                         <Link target="_blank" className="flex gap-x-2 items-center size-4 md:w-auto" href={social.src}>{social.logo}</Link>
                     </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;