import { Link } from "react-router-dom";
import Logo from "./nav-parts/Logo";
import 'flowbite'; // Import Flowbite CSS (if it's not included in your CSS bundle)
import 'flowbite/dist/flowbite.js'; // Import Flowbite JavaScript
import { useEffect, useState } from "react";
import DropdownProfile from "./DropdownProfile";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "@/store/features/order/orderAction";
import parseJwt from "@/fUtils/parseJwt";



function Navbar() {
    const [menuOpen, setOpen] = useState(false);
    const [profileDropDown, setProfileDropDown] = useState(false);
    const { userInfo } = useSelector(state => state.auth)
    const [ decoded, setDecoded ] = useState(parseJwt(userInfo))
    const { profileImage } = useSelector(state => state.order)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getImage(decoded.profileImage))
    }, [])

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
                                        <Link to={"/home"}
                                            className="py-2 pl-3 pr-4 hover:text-thirdBlue">Acceuil</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-2/6">
                                <div className="m-auto">
                                    <img onClick={toggleProfileDropDown} className="w-10 h-10 rounded-full cursor-pointer" src={profileImage} alt="profile image" />
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
