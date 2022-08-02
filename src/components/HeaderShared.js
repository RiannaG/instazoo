import logo from "../assets/logo-b.svg";
import heartWhite from "../assets/heart-white.svg";
import heartPink from "../assets/heart-pink.svg";
import { Link } from "react-router-dom";

export function HeaderShared({ openPreferred, preferredAnimals, token }) {
  return (
    <div className="header-footer-height d-flex justify-content-between gradient-header align-items-center px-4 shadow">
      {/* LINK TO HOME */}
      <Link to="/">
        <img src={logo} width="100" alt="logo" />
      </Link>

      {/* LIKE-BADGE */}
      <div className="position-relative">
        {preferredAnimals.length > 0 && (
          <span className="position-absolute top-0 bg-light px-2 rounded-pill fw-medium">
            {preferredAnimals.length}
          </span>
        )}
        <button className="btn p-0 ms-2" onClick={() => openPreferred()}>
          {token && (
            <img
              src={(preferredAnimals.length > 0 && heartPink) || heartWhite}
              width="44"
              alt="heart"
            />
          )}
        </button>
      </div>
    </div>
  );
}
