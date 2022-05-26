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
    <div className="h-100">
      <div className="centrale-landing ">
        <div>
          <Image
            src={compositionLeft}
            alt="immagine sinistra"
            className="w-100"
          />
        </div>
        <div>
          <Image src={logo} alt="logo" className="w-50 align-self-center" />
          <h1 className="fredoka fw-bold">Scopri il nostro nuovo social</h1>
          <Button onClick={handleLoginButton}>Visita</Button>
        </div>
        <div>
          <Image
            src={compositionRight}
            alt="immagine destra"
            className="w-100"
          />
        </div>
      </div>
      <FooterShared />
    </div>
  );
};
