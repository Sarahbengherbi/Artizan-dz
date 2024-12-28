import {
  FaArrowAltCircleUp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="bg-white">
        <div className="container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 px-3 border-t border-solid py-16">
          <div>
            <h2 className="text-primary font-bold text-lg lg:text-4xl">DZ_ARTISAN</h2>
            <p className="text-gray py-4 text-lg pb-4">
              30 Rue Great Peter, WestMinister, Londres SWIP 28J, Royaume-Uni
            </p>
            <span className="flex items-center gap-4">
              <FaFacebook
                size={24}
                className="text-primary hover:text-primary cursor-pointer"
              />
              <FaInstagram
                size={24}
                className="text-primary hover:text-primary cursor-pointer"
              />
              <FaYoutube
                size={24}
                className="text-primary hover:text-primary cursor-pointer"
              />
            </span>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">À propos</h5>
            <ul>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                À propos de nous
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Fonctionnalités
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Actualités
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Tarifs
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Entreprise</h5>
            <ul>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Pourquoi DZ-ARTISAN
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Devenir partenaire
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                FAQ
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Support</h5>
            <ul>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Compte
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Centre de support
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Avis
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Nous contacter
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Newsletter</h5>
            <p className="text-gray py-4 text-lg pb-4">
              Inscrivez-vous à notre Newsletter et recevez des offres exclusives.
            </p>
            <div className="h-14 flex items-center relative">
              <input
                type="text"
                placeholder="Entrez votre adresse e-mail"
                className="bg-white outline-none w-full h-full shadow px-4"
              />
              <button className="bg-primary text-white rounded-full absolute right-2 w-10 h-10">
                <FaArrowAltCircleUp className="w-full h-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
