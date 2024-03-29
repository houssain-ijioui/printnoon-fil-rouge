import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";


const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userInfo } = useSelector(state => state.auth)

    useEffect(() => {
        if (userInfo === null) {
            navigate('/login')
        }
    }, [userInfo, navigate])

    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-7/12 lg:w-9/12 lg:mr-5 pt-8 gap-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Profile;
