import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import CreateOrderModal from "../components/CreateOrderModal";
import { openModal } from "@/store/features/order/orderSlice";
import { getOrders } from "@/store/features/order/orderAction";
import parseJwt from "@/fUtils/parseJwt";
import { ClipLoader } from "react-spinners";



const Conceptions = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userInfo } = useSelector(state => state.auth)
    const [ decoded, setDecoded ] = useState(parseJwt(userInfo))
    const { orders, ordersPending } = useSelector(state => state.order)

    const open = () => {
        dispatch(openModal())
    }

    useEffect(() => {
        if (userInfo === null) {
            navigate('/login')
        }
    }, [userInfo, navigate])

    useEffect(() => {
        dispatch(getOrders(decoded.id))
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="w-7/12 lg:w-9/12">
                    <div className="flex justify-between lg:mr-5">
                        <h1 className="text-firstBlue font-semibold text-2xl">Mes Conceptions</h1>
                        <PrimaryButton onClick={open} text={"Ajouter"} />
                    </div>
                    <CreateOrderModal />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mr-5 pt-8 gap-3">
                        {ordersPending ? (
                            <div className="mt-20 ml-96">
                                <ClipLoader size={80} color="#36d7b7" />
                            </div>
                        ) : (
                            orders?.map((order, index) => {
                                return (
                                    <Card nom={order.order.nom} key={index} createdAt={order.order.createdAt} />
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conceptions;
