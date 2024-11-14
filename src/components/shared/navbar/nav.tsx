"use client";
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';

export default function Navbar(){
    return(
        <div className='z-50'>
            <div className="md:hidden">
                <MobileNav/>
            </div>
            <div className="hidden md:block">
                <DesktopNav/>
            </div>
        </div>
    );
}