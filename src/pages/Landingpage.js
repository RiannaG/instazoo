import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logo from "../assets/logo.svg";
import elefante from "../assets/elefante.png";
import elefanteReverse from "../assets/elefante-reverse.png";
import { FooterShared } from "../components/FooterShared";

export const Landingpage = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between vw-100 vh-100">
        <div>
          <Image src={elefanteReverse} alt="elefante-reverse" />
        </div>
        <div className="d-flex flex-column justify-content-center gap-5">
          <Image src={logo} alt="logo" className="w-50 align-self-center" />
          <h1 className="fredoka fw-bold">Scopri il nostro nuovo social</h1>
          <Button className="w-25 align-self-center gradient fredoka rounded-pill fw-bold">
            Visita
          </Button>
        </div>
        <div className="align-self-end">
          <Image src={elefante} alt="elefante" />
        </div>
      </div>
      <FooterShared />
    </div>
  );
};
