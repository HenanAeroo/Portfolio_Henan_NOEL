import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import VerticalBar from "../components/VerticalBar";
import HorizontalBar from "../components/HorizontalBar";
import SocialBadge from "../components/SocialBadge";
// import MapComponent from "../components/MapComponent";
import ScrollToTop from "../components/ScrollToTop";
// @ts-ignore
import Pdp from "../assets/img/pdp.webp";
// @ts-ignore
import Challenge from "../assets/img/Challenge72.webp";
// @ts-ignore
import Infra from "../assets/img/Projet_Infra.webp";
// @ts-ignore
import SalutChef from "../assets/img/Logo_Salut_Chef.webp";

function Home() {
  return (
    <div>
      <Header />
      <div className="landingPage">
        <img src={Pdp} alt="Hénan Noël" className="pdp" />
        <div className="description">
          <h2 className="text-4xl font-bold">Hénan NOËL</h2>
          <p>
            Étudiant en Bachelor 2 Informatique <br />
            Recherche d'alternance développeur fullstack
          </p>
        </div>
      </div>

      <VerticalBar />

      <div className="about">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            À propos
          </span>
        </h2>

        <div className="aboutElem">
          <p>
            Ayant repris les études depuis septembre 2023, je suis fort
            d'expériences professionnelles précédentes. J'ai été formé dans le
            milieu de l'hôtellerie-restauration, ce qui m'a permis d'acquérir
            des compétences en communication, organisation et gestion des
            tâches.
          </p>
        </div>

        <div className="badges">
          <div className="flex flex-wrap gap-4">
            <SocialBadge
              platform="linkedin"
              link="https://www.linkedin.com/in/h%C3%A9nan-no%C3%ABl-0a2aa1198/"
            />
            <SocialBadge
              platform="github"
              link="https://github.com/HenanAeroo"
            />
            <SocialBadge platform="cv" link={`../../public/CV_Henan_NOEL.pdf`} />
          </div>
        </div>
      </div>

      <HorizontalBar />

      <div className="languages">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Mes langagues
          </span>
        </h2>
        <div className="imgLanguages">
          <img
            src="https://www.vectorlogo.zone/logos/java/java-horizontal.svg"
            alt="Logo de Java"
          />
          <img
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
            alt="Logo de React"
          />
          <img
            src="https://www.vectorlogo.zone/logos/golang/golang-ar21.svg"
            alt="Logo de Golang"
          />
        </div>
      </div>

      <HorizontalBar />

      <div className="projects">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Mes projets
          </span>
        </h2>

        <div className="projectsElem">
          <div className="projectCard">
            <div className="max-w-sm rounded overflow-hidden">
              <img
                src={Challenge}
                alt="Accueil de mon projet d'infrastructure"
                className="w-full h-[250px]"
              />
              <div className="px-6">
                <p className="text-gray-700 text-base">TransMusicales x Ynov</p>
              </div>
            </div>
          </div>

          <div className="projectCard">
            <div className="max-w-sm rounded overflow-hidden">
              <img
                src={Infra}
                alt="Accueil de mon projet d'infrastructure"
                className="w-full h-[250px]"
              />
              <div className="px-6">
                <p className="text-gray-700 text-base">
                  Projet d'infrastructure
                </p>
              </div>
            </div>
          </div>

          <div className="projectCard">
            <div className="max-w-sm rounded overflow-hidden">
              <img
                src={SalutChef}
                alt="Salut Chef !"
                className="w-full h-[250px]"
              />
              <div className="px-6">
                <p className="text-gray-700 text-base">Salut Chef !</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-[10px] text-sm py-1 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 hover:shadow-[inset_0px_0px_10px_rgba(0,_0,_0,_1)] transition duration-300"
            style={{
              width: "100px",
              maxWidth: "100px",
            }}
          >
            <Link
              to="/projects"
              onClick={() => window.scrollTo(0, 0)}
              className="block text-center"
            >
              En savoir <span className="block text-xl">+</span>
            </Link>
          </button>
        </div>
      </div>

      <HorizontalBar />

      <div className="location">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Comment me contacter ?
          </span>
        </h2>

        <div className="map">
          <iframe title="Ynov Campus Rennes" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2411.0893794561453!2d-1.684635824084292!3d48.10366705352205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480edf8e59ca2915%3A0xb813f400fa51547a!2sYnov%20Campus%20Rennes%20-%20Ecole%20des%20m%C3%A9tiers%20du%20digital!5e1!3m2!1sfr!2sfr!4v1733216841325!5m2!1sfr!2sfr" width="400" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          <p>
            <b>Rennes Ynov Campus :</b>
            <br />
            42 Rue du Capitaine Maignan, 35000 Rennes
            <br />
            <br />
            <b>Mon contact :</b>
            <br />
            henan.noel@gmail.com
            <br />
            <br />
            <div className="flex justify-center">
              <button
                type="button"
                className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-[10px] text-sm py-1 me-2 mb-2 hover:shadow-[inset_0px_0px_10px_rgba(0,_0,_0,_1)] transition duration-300"
                style={{
                  width: "100px",
                  maxWidth: "100px",
                }}
              >
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="block text-center"
                >
                  Me <span className="block">contacter</span>
                </Link>
              </button>
            </div>
          </p>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Home;
