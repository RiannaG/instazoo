import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FooterShared } from "../components/FooterShared";
import imgSignup from "../assets/img-signup.png";
import logo from "../assets/logo-b.png";

const LoginForm = () => {
  const { state } = useLocation();
  const [reqStatus, setReqStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [messageInfo, setMessageInfo] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const token =
    JSON.parse(localStorage.getItem("token")) ||
    JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    reqStatus.token && redirect();
  }, [reqStatus]);

  useEffect(() => {
    loginCheck();
  }, []);

  useEffect(() => {
    enableLoginButton();
    setMessageInfo();
  }, [data]);

  useEffect(() => {
    setMessageInfo(reqStatus.message);
  }, [reqStatus]);

  const navigate = useNavigate();

  function loginCheck() {
    token && navigate("/Homepage");
  }

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSpacebar(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }

  function handleEnter(event) {
    if (event.keyCode === 13 && isDisabled === false) {
      submit();
    }
  }

  const submit = () => {
    setReqStatus("");

    fetch("http://localhost:3000/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setReqStatus(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const redirect = () => {
    sessionStorage.setItem("token", JSON.stringify(reqStatus.token));
    data.remember &&
      localStorage.setItem("token", JSON.stringify(reqStatus.token));
    navigate("/Homepage");
  };

  const enableLoginButton = () => {
    for (let key in data) {
      if (data[key] === "") {
        setIsDisabled(true);
        return 1;
      }
    }
    setIsDisabled(false);
  };

  return (
    <div class="form-container">
      <Link className="link-path fredoka rounded-pill" to="/">
        Back to home
      </Link>
      <Link className="link-path fredoka rounded-pill" to="/signup">
        Sign-In
      </Link>
      <img src={logo} alt="logo" className="logo-forms" />
      <div className="form form-login" onKeyDown={handleEnter}>
        <h2>Login</h2>
        <label>
          Username:
          <input
            onChange={handleInputChange}
            onKeyDown={handleSpacebar}
            name="username"
            value={data.username}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={handleInputChange}
            onKeyDown={handleSpacebar}
            name="password"
            value={data.password}
          ></input>
        </label>
        <label>
          Remember me
          <input
            type="checkbox"
            name="remember"
            onChange={handleInputChange}
            checked={data.remember}
          />
        </label>

        <span>
          {(messageInfo || state) && "info"}
          {messageInfo?.message || state?.message}
        </span>
        <button
          className="submitBtn fredoka rounded-pill"
          onClick={submit}
          disabled={isDisabled}
        >
          Login
        </button>
      </div>
      <img
        className="img-back modifica"
        src={imgSignup}
        alt="immagine destra"
      />
      <FooterShared />
    </div>
  );
};

export default LoginForm;
