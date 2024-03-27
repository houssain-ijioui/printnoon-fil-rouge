import AuthNavbar from '@/components/AuthNavbar';
import sideImage from "@/assets/auth/auth 1.png"
import { Link } from 'react-router-dom';
import InputField from '@/components/ui/InputField';
import AuthButton from '@/components/ui/AuthButton';
import { useEffect, useState } from 'react';
import { signup } from '@/store/features/authAction';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { clearSignedUpResponseMessage } from '@/store/features/authSlice';


const Signup = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { signUpLoading, signedUpResponseMessage } = useSelector((state) => state.auth)

  const dispatch  = useDispatch()


  const handleRegister = async (e) => {
    e.preventDefault()
    dispatch(signup({ name, email, password }))
  }

  useEffect(() => {
    if (signedUpResponseMessage !== "") {
      toast(signedUpResponseMessage, {
        duration: 1900
      })
      dispatch(clearSignedUpResponseMessage())
    }
  }, [signedUpResponseMessage])

  
  return (
    <div className='h-full flex flex-col'>
      <AuthNavbar />
      <div className='flex flex-row justify-between grow'>
        <div className='py-16 px-20'>
          <h1 className='text-3xl font-semibold tracking-wide mb-3 w-5/5'>Emballage de fole digne de ce nom, trie !</h1>
          <h4 className='text-secondBlue font-semibold text-base mb-3'>Connectez-vous pour suiver vos conceptions et vos commandes, le tout en un seul endroit.</h4>
          <div className='flex flex-row mb-3'>
            <h4 className='font-semibold'>Déja inscris ?</h4>
            <Link to="/login"><h4 className='text-thirdBlue font-semibold ml-4 hover:underline'>Se connecter</h4></Link>
          </div>
          <form className='' onSubmit={handleRegister}>
            <InputField value={name} setValue={setName} placeholderText={"Full Name"} type={"text"} />
            <InputField value={email} setValue={setEmail} placeholderText={"Email"} type={"email"} />
            <InputField value={password} setValue={setPassword} placeholderText={"Password"} type={"password"} />
            <AuthButton text={signUpLoading ? "Loading..." :"Signup"} />
          </form>
        </div>
        <div className='bg-firstBlue py-4 pl-8'>
          <img src={sideImage} />
        </div>
      </div>
    </div>
  )
}

export default Signup
