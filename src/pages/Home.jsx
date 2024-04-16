import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthNavbar from "@/components/AuthNavbar";
import landingPic from "../assets/image4.png";
import secondPic from "../assets/image5.png";
import thirdPic from "../assets/image6.png";


const Home = () => {
  return (
    <>
      <AuthNavbar />
      <section>
        <img className="" src={landingPic} />
        <div className="relative bottom-96 pl-10">
          <h1 className="text-4xl text-firstBlue font-semibold w-6/12 leading-relaxed mb-6">Personnalisé votre emballage durable - Printnoon</h1>
          <h2 className="text-secondBlue font-normal w-5/12 text-2xl">Ici tout ce que vous pouvez trouver, pour vos clients</h2>
        </div>
      </section>
      <section className="bg-gradient-to-r from-white to-thirdBlue relative bottom-40 flex flex-row-reverse pt-8">
        <img className="w-10/12 h-96" src={secondPic} />
        <div className="pl-10 pt-20">
          <h1 className="text-4xl text-firstBlue font-semibold w-10/12 leading-tight mb-6">Envoyez-nous votre conception, et laisse le reste pour nous.</h1>
          <h2 className="text-secondBlue font-medium w-5/12 text-base">Rencontrez le service d'imprimerie qui vous satisfera votre clients. Consacrez moins de temps et garantie la mielleur qualitie d'impression. Accédez à notre platforme, et envoyer vos conceptions et laissez-nous faire imprimer votre creativite.</h2>
        </div>
      </section>
      <footer className="bg-thirdBlue items-center flex pl-10 py-6 relative bottom-32">
        <img src={thirdPic} />
        <p className="ml-5">Copyright 2023 © Printnoon.com - Tous droits réservés.</p>
      </footer>
    </>
  )
}

export default Home;