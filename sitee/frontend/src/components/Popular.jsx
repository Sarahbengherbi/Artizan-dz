/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";

export default function Popular() {
  const Card = ({ image, text, location }) => {
    return (
      <div>
        <div className="overflow-hidden relative my-0 mx-auto rounded-2xl">
          <img
            src={image}
            alt=""
            className="rounded-2xl w-[300px] h-[300px] box-border hoverImg"
          />
          <p className="bg-white rounded-lg p-1 text-sm absolute top-4 right-4">
            40% off
          </p>
        </div>
        <div>
          <h5 className="text-xl pt-2 font-semibold">{text}</h5>
          <div className="flex items-center gap-2 py-3">
            <HiLocationMarker size={20} className="text-teal-800" />
            <p className="text-gray text-light">{location}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-3">
      <section className="pt-16">
        <div>
          <div className="lg:flex justify-between text-center">
            <span>
              <h2 className="text-4xl lg:text-5xl font-bold">Thérapies Populaires</h2>
              <p className="py-4 text-left lg:text-lg">
              Trouvez l équilibre sur ePsyCare              </p>
            </span>
            <p className="text-light lg:w-2/5 text-right lg:text-lg">
            Découvrez nos thérapies populaires conçues pour votre bien-être. Commencez dès aujourd hui avec ePsyCare!
            </p>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
            <Card
              image="/Thérapie individuelle.png"
              location="Thérapie individuelle"
              text="Thérapie individuelle"
            />
            <Card
              image="/Thérapie familile.png"
              location="Thérapie familile"
              text="Thérapie familile"
            />
            <Card
              image="../../public/thérapie de couple.png"
              location="Thérapie de couple"
              text="Thérapie de couple"
            />
            {/* <Card
              image="/"
              location=""
              text=""
            /> */}
          </div>
        </div>
      </section>
      <section  id="fonctionnalites" className="py-16">
        <span className="flex flex-col items-center text-center gap-2">
          <h2 className="text-4xl font-bold lg:text-5xl">
          Transformez votre bien-être avec ePsyCare
          </h2>
          <p className="lg:text-lg">Trouvez l équilibre à votre rythme </p>
        </span>
        <div className="lg:flex items-center justify-between py-16">
          <div className="lg:w-1/2">
            <div>
              <span className="bg-[#38B2AC] text-white px-3 py-1 rounded-xl lg:text-2xl">
                01
              </span>
              <h2 className="font-bold text-lg py-4 lg:text-3xl">
              Prendre un rendez-vous
              </h2>
              <p className="text-light pb-6 lg:w-1/2 lg:text-lg">
              Planifier une consultation avec un psychologue en ligne.
              </p>
            </div>
            <div>
              <span className="bg-[#4FD1C5] text-white px-3 py-1 rounded-xl lg:text-2xl">
                02
              </span>
              <h2 className="font-bold text-lg py-4 lg:text-3xl">
              Consultation
              </h2>
              <p className="text-light pb-6 lg:w-1/2 lg:text-lg">
              Interaction en ligne avec un professionnel de la santé mentale pour discuter et évaluer des problèmes psychologiques.  
              </p>
            </div>
            <div>
              <span className="bg-teal-300 text-white px-3 py-1 rounded-xl lg:text-2xl">
                03
              </span>
              <h2 className="font-bold text-lg py-4 lg:text-3xl">
              Conseils              </h2>
              <p className="text-light pb-6 lg:w-1/2 lg:text-lg">
              Recommandations et orientations fournies par un psychologue pour améliorer le bien-être mental.
              </p>
            </div>
            <div>
              <span className="bg-[#B2F5EA] text-white px-3 py-1 rounded-xl lg:text-2xl">
                04
              </span>
              <h2 className="font-bold text-lg py-4 lg:text-3xl">
              Résultat
              </h2>
              <p className="text-light pb-6 lg:w-1/2 lg:text-lg">
              Bilan et perspectives déduits de la consultation avec un psychologue pour guider le patient vers un mieux-être mental.
              </p>
            </div>
            <Link to="/">
            <button className="bg-teal-800 text-white px-6 py-3 transition-bg hover:bg-white hover:text-teal-800 rounded-xl shadow my-8">
            Inscrivez-vous maintenant !
            </button>
            </Link>
          </div>
          <div className="lg:w-1/2 h-full overflow-hidden rounded-2xl">
            <img
              src="../../public/image 5 1.png"
              alt=""
              className="rounded-2xl w-full h-full hoverImg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
