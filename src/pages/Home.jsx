import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/store/features/authAction";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo } = useSelector(state => state.auth)

  const handleLougout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (userInfo === null) {
      navigate('/login')
    }
  }, [userInfo, navigate])


  return (

    <>
      <Navbar />
      {/* <div className="text-black">Home</div>
      <h1 className="hover:underline hover:text-slate-600" onClick={handleLougout}>Logout</h1> */}
    </>
  )
}

export default Home;