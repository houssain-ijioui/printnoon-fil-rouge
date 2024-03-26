import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/store/features/authSlice";


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLougout = () => {
    dispatch(logout())
  }

  return (
    <>
      <div className="text-black">Home</div>
      <h1 className="hover:underline hover:text-slate-600" onClick={handleLougout}>Logout</h1>
    </>
  )
}

export default Home;