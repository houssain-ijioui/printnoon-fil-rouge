import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const Profile = () => {
  return (
    <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="w-7/12 lg:w-9/12">
                    <img src="" alt="" />
                </div>
            </div>
        </>
  )
}

export default Profile
