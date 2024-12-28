import {
  // FaArrowAltCircleUp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div id="footer" className="bg-teal-700">
        <div className="container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 px-3  border-t border-solid py-16">
          <div>
            <h2 className="text-teal-800 font-bold text-lg lg:text-4xl">ePsyCare</h2>
            <p className="text-gray py-4 text-lg pb-4">
            Découvrez notre expertise en psychologie et en conseil pour mieux comprendre vos problèmes.            </p>
            <span className="flex items-center gap-4">
              <FaFacebook
                size={24}
                className="text-teal-800 hover:text-teal-800 cursor-pointer"
              />
              <FaInstagram
                size={24}
                className="text-teal-800 hover:text-teal-800 cursor-pointer"
              />
              <FaYoutube
                size={24}
                className="text-teal-800 hover:text-teal-800 cursor-pointer"
              />
            </span>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">À propos</h5>
            <ul> 
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="">
                
                
              À propos de nous              </a></li>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="#fonctionnalites">
                
              Fonctionnalités
              </a></li>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="/">
                
              Termes et Conditions
              </a></li>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="/">
                
              Politique de confidentialité
              </a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Entreprise</h5>
            <ul>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="#fonctionnalites">
                
              Pourquoi ePsyCare
              </a></li>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="/">
                
              Partenariat avec nous
              </a></li>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="/">
                
                FAQ
              </a></li>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="#">
                
                Blog
              </a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Support</h5>
            <ul>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="/">
                
              Compte
             </a> </li>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="/">
                
              Contact us
             </a> </li>
              <li className="hover:text-teal-800 text-lg leading-10 cursor-pointer"><a href="/">
                
                Feedback
             </a> </li>
             
            </ul>
          </div>
          <div>
            
          
          </div>
        </div>
      </div>
    </footer>
  );
}
