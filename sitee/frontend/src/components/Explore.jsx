/* eslint-disable react/prop-types */
// import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

export default function Explore() {
  // const [active, setActive] = useState("Popular destination");
  const Card = ({ image, text, location, price }) => {
    return (
      <div>
        <div className="overflow-hidden relative my-0 mx-auto rounded-t-2xl">
          <img
            src={image}
            alt=""
            className="rounded-2xl w-[300px] h-[300px] box-border hoverImg"
          />
          <p className="bg-white rounded-lg p-1 text-sm absolute top-4 right-4 flex items-center gap-1">
            <FaStar className="text-[#ffc103]" /> 4.8
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span>
            <h5 className="text-xl pt-2 font-semibold">{text}</h5>
            <div className="flex items-center gap-2 py-3">
              <HiLocationMarker size={20} className="text-teal-800" />
              <p className="text-gray text-light">{location}</p>
            </div>
          </span>
          <p className="font-semibold">
            ${price}/<span className="font-light">Pax</span>
          </p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section className="lg:p-16">
        <div className="container mx-auto px-3">
          <div className="lg:flex justify-between">
            <span className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Psycho Disponibles
              </h2>
              <p className="py-4 text-left">
                Rencontrez nos Psychologues Experts
              </p>
            </span>
            <p className="text-light lg:w-2/5 lg:text-right lg:text-lg">
              Planifiez votre consultation dès maintenant Les Gardiens de l
              Équilibre Mental Expérimentez la Force de nos Médecins
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-16">
            <Card
              image="/psy1.jpg"
              text=" Dr Nesrine Selmane"
              location="123 Avenue du Bien-Être, 75000 Paris"
              // price="148"
            />
            <Card
              image="../../public/psy2.jpg"
              text="Dr Riadh Bekkkaoui"
              location="Bejaia"
              // price="140"
            />
            <Card
              image="../../public/meriemHamia.jpg"
              text="Dr HAMIA Meriem"
              location="Alger Said Hamdine 16012 Alger Algérie"
              // price="150 Da"
            />
          </div>

      
        </div>
        <div className="overflow-hidden rounded-2xl">
          <div className="w-full lg:h-[40rem] h-100 rounded-2xl">
            <video loop controls muted autoPlay>
              <source src="/Votre psychologue en ligne(720P_HD).mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
