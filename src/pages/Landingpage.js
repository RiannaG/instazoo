import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logo from "../assets/logo.svg";
import compositionLeft from "../assets/composizione-1.png";
import compositionRight from "../assets/composizione-2.png";
import { FooterShared } from "../components/FooterShared";
import { useNavigate } from "react-router-dom";

export const Landingpage = () => {
  const navigate = useNavigate();
  function handleLoginButton() {
    navigate("/Homepage");
  }

  return (
    <div className=" vw-100 vh-100">
      <div className="centrale-landing">
        <div className="h-100">
          <Image
            src={compositionLeft}
            alt="immagine sinistra"
            className="h-100"
          />
        </div>
        <div className="d-flex flex-column align-items-center gap-5">
          <Image src={logo} alt="logo" className="w-50 align-self-center" />
          <h1 className="fredoka fw-bold">Scopri il nostro nuovo social</h1>
          <Button className="gradient w-25" onClick={handleLoginButton}>
            Visita
          </Button>
        </div>
        <div className="h-100">
          <Image
            src={compositionRight}
            alt="immagine destra"
            className="h-100"
          />
        </div>
      </div>
      <FooterShared />
    </div>
  );
};
