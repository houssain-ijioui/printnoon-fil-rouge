import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PrimaryButton from "@/components/PrimaryButton";
import CommandeCard from "@/components/CommandeCard";


const Commandes = () => {
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
                    <div className="flex justify-between lg:mr-5">
                        <h1 className="text-firstBlue font-semibold text-2xl">Mes Commandes</h1>
                        <PrimaryButton text={"Ajouter"} /> 
                    </div>
                    <div className="flex flex-col gap-4 mt-8 mr-5">
                        <CommandeCard />
                        <CommandeCard />
                        <CommandeCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Commandes;
