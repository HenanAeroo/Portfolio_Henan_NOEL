import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Maintenance = () => {
  return (
    <div className="maintenancePage">
      <h1 className="maintenanceTitle">
        Cette page est actuellement en cours de développement !
      </h1>
      <p className="maintenanceMessage">
        Veuillez revenir plus tard pour voir le contenu de cette page. Merci de
        votre compréhension.
      </p>
      <div className="loadingAnimation">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-[10px] text-sm py-1 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 hover:shadow-[inset_0px_0px_10px_rgba(0,_0,_0,_1)] transition duration-300"
          style={{
            width: "100px",
            maxWidth: "100px",
          }}
        >
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="block text-center"
          >
            Accueil
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Maintenance;
