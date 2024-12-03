import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ReactPlayer from "react-player/lazy";
import "../index.css";
import ScrollToTop from "../components/ScrollToTop";

const Projects = () => {
  return (
    <div className="projectsPage">
      <Header />

      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
          Mes Projets
        </span>
      </h1>

      <div className="challenge">
        <div className="card">
          {/* <ReactPlayer
            className="react-player"
            url="../../rickroll.mkv"
            controls={true}
            volume={0}
          /> */}
          <p>
            Le{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              <b>projet Ynov x Les Trans Musicales</b>
            </span>{" "}
            a été un réel défi. Un défi à réaliser en 72h, dans lequel il
            fallait permettre aux organisateurs des Trans Musicales de répondre
            à une problématique : Comment impliquer la génération Z lors de la
            prochaine édition de son festival ?
            <br />
            <br />
            <b>72h pour y répondre.</b> Un vrai défi que mon équipe et moi avons
            décidé d'aborder sous un angle différent : pourquoi vouloir
            impliquer la génération Z, si elle n'est pas encore présente ? Nous
            avons donc fait le choix d'attirer la génération Z en réalisant une
            refonte visuelle du site web et de l'application des Trans
            Musicales, en améliorant l'expérience utilisateur et en proposant de
            nouvelles fonctionnalités une fois sur le site ou le festival.
            <br />
            <br />
            <i>
              Cette prise de risque nous a valu le prix coup de coeur du jury à
              la fin du challenge.
            </i>
          </p>
        </div>
      </div>

      <div className="infra">
        <div className="card">
          <p>
            Mon{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              <b>projet infrastructure</b>
            </span>{" "}
            m'a permis de réaliser 2 choses : une base de données complètement
            fonctionnelle, et une application web permettant de créer des fiches
            de notation sur des jeux vidéos, d'en modifier le contenu,
            d'afficher ces fiches ou de les supprimer.
            <br />
            <br />
            Pour cela, j'ai utilisé une base de données MySQL, un serveur Apache
            via XAMPP pour gérer l'affichage du site web, et un serveur PHP pour
            la partie back-end.
          </p>
          {/* <ReactPlayer
            className="react-player"
            url="../../rickroll.mkv"
            controls={true}
            volume={0}
          /> */}
        </div>
      </div>

      <div className="salutchef">
        <div className="card">
          {/* {<ReactPlayer
            className="react-player"
            url="./public/Site_SC.mp4"
            controls={true}
            volume={0}
          />} */}
          <p>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              <b>Salut Chef !</b>
            </span>{" "}
            est une association que j'ai créée en mars 2024. Son objectif
            principal est de sensibiliser les étudiants au "mieux manger".
            <br />
            <br />
            Son intérêt pour moi ?
            <br />
            Je gère une équipe de 7 personnes, réparties sur la communication,
            le marketing, l'audiovisuel, les partenaires et l'informatique. Je
            développe également le site web de l'association, en React pour le
            moment.
          </p>
        </div>
      </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Projects;
