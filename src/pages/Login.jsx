import AuthNavbar from '@/components/AuthNavbar';
import sideImage from "@/assets/auth/auth 1.png"
import { Link, useNavigate } from 'react-router-dom';
import InputField from '@/components/ui/InputField';
import AuthButton from '@/components/ui/AuthButton';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/features/auth/authAction';
import toast from 'react-hot-toast';
import { clearLoginResponseMessage } from '@/store/features/auth/authSlice';
import { BarLoader } from 'react-spinners';


const Signup = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loginLoading, userInfo, loginResponseMessage } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(login({ email, password }))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (userInfo !== null) {
      navigate('/conceptions')
    }
    if (loginResponseMessage !== "") {
      toast(loginResponseMessage, {
        duration: 1900
      })
      dispatch(clearLoginResponseMessage())
    }
  }, [userInfo, navigate, loginResponseMessage])


  return (
    <div className='h-full flex flex-col'>
      <AuthNavbar />
      <div className='flex flex-row justify-between grow'>
        <div className='py-16 px-20'>
          <h1 className='text-3xl font-semibold tracking-wide mb-3 w-5/5'>Emballage de fole digne de ce nom, trie !</h1>
          <h4 className='text-secondBlue font-semibold text-base mb-3'>Connectez-vous pour suiver vos conceptions et vos commandes, le tout en un seul endroit.</h4>
          <div className='flex flex-row mb-3'>
            <h4 className='font-semibold'>Déja inscris ?</h4>
            <Link to="/signup"><h4 className='text-thirdBlue font-semibold ml-4 hover:underline'>S'inscrire</h4></Link>
          </div>
          <form className='' onSubmit={handleSubmit}>
            <InputField value={email} setValue={setEmail} placeholderText={"Email"} type={"email"} />
            <InputField value={password} setValue={setPassword} placeholderText={"Password"} type={"password"} />
            <AuthButton text={loginLoading ? (
              <BarLoader color="#fff" />
            ) :"Login"} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
