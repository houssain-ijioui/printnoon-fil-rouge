import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";


const Conceptions = () => {
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
                <div className="w-7/12 lg:w-9/12">
                    <h1 className="text-firstBlue font-semibold text-2xl">Mes Conceptions</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:mr-5 pt-8 gap-3">
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
            </div>
        </>
    )
}

export default Conceptions;
