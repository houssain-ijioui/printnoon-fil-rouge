import { Link } from "react-router-dom";
import Logo from "./nav-parts/Logo";
import 'flowbite'; // Import Flowbite CSS (if it's not included in your CSS bundle)
import 'flowbite/dist/flowbite.js'; // Import Flowbite JavaScript
import { useState } from "react";
import DropdownProfile from "./DropdownProfile";
import pic from "../assets/auth/pic.jpg"



function Navbar() {
    const [menuOpen, setOpen] = useState(false);
    const [profileDropDown, setProfileDropDown] = useState(false);

    const toggleMenu = () => {
        setOpen(prev => !prev)
    }

    const toggleProfileDropDown = () => {
        setProfileDropDown(prev => !prev)
    }
    return (
        <>
            <div className="flex flex-col">
                <nav className="bg-white border border-b-2 py-2.5 dark:bg-gray-900">
                    <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto ">
                        <div className="w-28">
                            <Logo />
                        </div>
                        <div className="flex justify-between w-9/12">
                            <div className={`items-center justify-between w-full`} id="mobile-menu-2">
                                <ul className="flex font-medium mt-2">
                                    <li>
                                        <Link href="#"
                                            className="py-2 pl-3 pr-4 hover:text-thirdBlue">Acceuil</Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            className="py-2 pl-3 pr-4 hover:text-thirdBlue">Tableau</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-2/6">
                                <div className="m-auto">
                                    <img onClick={toggleProfileDropDown} className="w-10 h-10 rounded-full cursor-pointer" src={pic} alt="profile image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex justify-end mr-5 mt-2">
                    <DropdownProfile profileDropDown={profileDropDown} />
                </div>
            </div>
        </>
    )
}


export default Navbar;
