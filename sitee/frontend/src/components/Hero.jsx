import { Link } from "react-router-dom";
import Chronometre from '../components/Chronometre';

export default function Hero() {
  return (
    <div className="container mx-auto px-6 pt-12 relative min-h-screen">
      {/* Section pour le logo et le texte principal */}
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src="../../public/logo-removebg-preview (1).png"
          alt="Logo"
          className="w-96 h-28 object-contain "
        />

        <h1 className="text-white lg:text-4xl  lg:mt-20 font-semibold lg:w-4/5  text-center">
          Notre nouveau site <span className="text-customColor ml-3">arrive bientôt</span>
        </h1>

        {/* Section pour le chronomètre */}
        <div className="mt-10">
          <Chronometre initialDays={1} initialHours={10} initialMinutes={30} initialSeconds={54} />
        </div>

        {/* Paragraphe de description */}
        <p className="text-white mt-8 text-lg lg:text-xl text-center px-6">
          Bienvenue chez Bio & Clean, votre spécialiste en services de nettoyage et 
          <br /> de detailing automobiles, que vous soyez particulier ou professionnel,
          <br /> directement chez vous.
        </p>
      </div>

      {/* Section pour les boutons */}
      <div className="flex justify-center gap-4 mt-12">
        <Link to="/a">
          <button className="rounded-lg text-white font-bold bg-customColor px-7 py-3 flex items-center justify-center gap-2">
            QUI SOMMES NOUS
          </button>
        </Link>
        <Link to="/b">
          <button className="rounded-lg text-white font-bold bg-transparent border border-white px-7 py-3 flex items-center justify-center gap-2 hover:bg-customColor">
            CE QUE NOUS FAISONS
          </button>
        </Link>
      </div>
    </div>
  );
}
