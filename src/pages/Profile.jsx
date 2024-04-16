import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import pic from "../assets/auth/pic.jpg"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from 'react-redux';
import parseJwt from "../fUtils/parseJwt.js";
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"




const Profile = () => {
    const [image, setImage] = useState()
    const { userInfo } = useSelector(state => state.auth)
    const [decoded, setDecoded] = useState(parseJwt(userInfo))
    const navigate = useNavigate()
    const [ imageChanged, setImageChanged ] = useState(false)

    const handleInput = (e) => {
        setImage(e.target.files[0])
    }

    const handleImageChange = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()
            formData.append('id', JSON.stringify(decoded?.id))
            formData.append('image', image)
            axios.post('http://localhost:8000/user/dashboard/change-image', formData)
            setImageChanged(true)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (imageChanged) {
            toast('Image Changed Successfully')
            navigate('/profile')
        }
    }, [imageChanged, navigate])

    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="w-7/12 lg:w-9/12">
                    <div className="lg:mr-5">
                        <h1 className="text-firstBlue font-semibold text-2xl mb-5">Paramétres du Compte</h1>
                        <div>
                            <form>
                                <input onChange={handleInput} required type="file" className=" mb-5" />
                                <button onClick={handleImageChange} type="submit" className="text-white bg-firstBlue w-5/12 sm:w-36 h-10 rounded-3xl border border-thirdBlue">Changer L'image</button>
                            </form>
                            <div className="mb-5">
                                <h1 className="font-bold text-xl">Nom</h1>
                                <h2>Houssain</h2>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl">Email</h1>
                                <h2>Houssain@gmail.com</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
