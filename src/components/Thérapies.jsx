/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function Therapies() {
  const Card = ({ image, text, link }) => {
    // const Card = ({ image, text, location, price }) => {
    return (
      <div>
        <div className="overflow-hidden relative my-0 mx-auto rounded-t-2xl">
        <Link to={link}><img
            src={image}
            alt=""
            className="rounded-2xl w-[300px] h-[300px] box-border "
          /></Link>
       
        </div>
        <div className="flex justify-between items-center">
          <span>
            <a href={link}><h5 className="text-xl pt-2 font-semibold">{text}</h5></a>
           
          </span>
          
        </div>
      </div>
    );
  };
  return (
    <div id="blog" >
      <section className="lg:p-16">
        <div className="container mx-auto px-3">
          <div className="lg:flex justify-between">
            <span className="text-center">
              <h2 className="text-start lg:text-5xl font-bold">
              Blog et article sur la santé mentale
              </h2>
              <p className="py-4 text-left">
              Explorer les voies de la guérison intérieure et du bien-être psychologique.              </p>
            </span>
          
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-16">
            <Card
              image="/public/image6.png"
              text="Comment les discussions de groupe peuvent-elles aider à guérir votre santé mentale ?"
              link="/"
            />
            <Card
              image="/public/image7.png"
              text="Comment la thérapie peut vous aider à avancer ?"
              link="/"

            />
            <Card
              image="../..//public/image8.png"
              text="Quand et pourquoi vous devriez consulter un conseiller conjugal ?"
              link="/"

            />
          </div>
        
        </div>
      
      </section>
    </div>
  );
}
