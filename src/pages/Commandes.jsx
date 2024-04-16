import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CommandeCard from "@/components/CommandeCard";
import { getOrders } from "@/store/features/order/orderAction";
import { clearDeletedMessage, unSetDeleted } from "@/store/features/order/orderSlice";
import toast from "react-hot-toast";
import parseJwt from "@/fUtils/parseJwt";
import { ClipLoader } from "react-spinners";



const Commandes = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userInfo } = useSelector(state => state.auth)
    const [ decoded, setDecoded ] = useState(parseJwt(userInfo))
    const { orders, ordersPending, deleted, deletedMessage } = useSelector(state => state.order)

    useEffect(() => {
        if (userInfo === null) {
            navigate('/login')
        }
    }, [userInfo, navigate])

    useEffect(() => {
        dispatch(getOrders(decoded.id))
        dispatch(unSetDeleted())
    }, [deleted])

    useEffect(() => {
        if (deletedMessage !== "") {
            toast(deletedMessage, {
                duration: 1900
            })
        }
        dispatch(clearDeletedMessage())
    }, [deletedMessage])

    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="w-7/12 lg:w-9/12">
                    <div className="flex justify-between lg:mr-5">
                        <h1 className="text-firstBlue font-semibold text-2xl">Mes Commandes</h1>
                    </div>
                    <div className="flex flex-col gap-4 mt-8 mr-5">
                        {ordersPending ? (
                            <div className="mt-20 ml-96">
                                <ClipLoader size={80} color="#36d7b7" />
                            </div>
                        ) : (
                            orders?.map((order, index) => {
                                return (
                                    <CommandeCard nom={order.order.nom} fileUrl={order.fileUrl} dimensions={order.order.dimensions} papier={order.order.papier} grammage={order.order.grammage} orientation={order.order.orientation} key={index} createdAt={order.order.createdAt} orderId={order.order._id} />
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Commandes;
