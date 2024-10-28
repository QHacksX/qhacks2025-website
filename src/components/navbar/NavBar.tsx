"use client";
import DeskTopNav from "./Desktop";
import MobileNav from "./Mobile";


export default function Navbar(){
    return(
        <div>
            <div className="md:hidden">
                <MobileNav/>
            </div>
            <div className="hidden md:block">
                <DeskTopNav/>
            </div>
        </div>
    );
}
