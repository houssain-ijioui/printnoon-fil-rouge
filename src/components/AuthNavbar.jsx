import Logo from "./nav-parts/Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



function AuthNavbar() {

  const { userInfo } = useSelector(state => state.auth)

  return (
    <div className="flex flex-col">
      <nav className="bg-white border border-b-2 py-2.5 dark:bg-gray-900">
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto ">
          <div className="w-28">
            <Logo />
          </div>
          <div className="flex justify-between w-9/12">
            <div className={`items-center justify-between w-full`} id="mobile-menu-2">
              <ul className="flex font-medium mt-2">
              </ul>
            </div>
            <div className="flex w-2/6">
              <div className="m-auto flex">
                {userInfo === null && (
                  <>
                    <div className="ml-6 w-36">
                      <Link to={"/login"}>Connectez-vous</Link>
                    </div>
                    <div className="w-36">
                      <Link to={"/signup"}>Inscrivez-vous</Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default AuthNavbar;
