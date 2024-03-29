import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FooterShared } from "../components/FooterShared";
import compositionRight from "../assets/composizione-finale.png";
import logo from "../assets/logo-b.png";

export function SignUpForm() {
  const [reqStatus, setReqStatus] = useState("");
  const [errorStatus, setErrorStatus] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    email: "",
    city: "",
    address: "",
    gender: "male",
    age: "",
  });

  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("");

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleConfirmPassword(event) {
    const confirm = event.target.value;
    setConfirmPassword(confirm);
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

  useEffect(() => {
    if (reqStatus.status === "ok") {
      navigate("/login", {
        state: { message: "User created successfully, please login" },
      });
    }
  }, [reqStatus]);

  useEffect(() => {
    setReqStatus("");
  }, [data]);

  useEffect(() => {
    dataFormValidation();
  }, [data, confirmPassword]);

  const dataFormValidation = () => {
    for (let key in data) {
      if (key !== "address" && data[key] === "") {
        setErrorStatus("Fields with * are mandatory");
        setIsDisabled(true);
        return;
      }
    }

    if (data.age.match(/[^0-9]/) || data.age < 15 || data.age > 99) {
      setErrorStatus("Must be a number between 15 and 99");
      setIsDisabled(true);
      return;
    }

    if (data.password.length < 8) {
      setErrorStatus(
        "Password too short, minimum 8 characters, numbers and symbol"
      );
      setIsDisabled(true);
      return;
    }

    if (confirmPassword !== data.password) {
      setErrorStatus("Password not match");
      setIsDisabled(true);
      return;
    }

    if (!data.email.match(/\S+@\S+\.\S+/)) {
      setErrorStatus("Invalid email");
      setIsDisabled(true);
      return;
    }
    setErrorStatus("");
    setIsDisabled(false);
    return;
  };

  const submit = () => {
    setReqStatus("");

    fetch("http://localhost:3000/signup", {
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

  return (
    <div className="form-container">
      <Link className="link-path fredoka rounded-pill" to="/">
        Back to home
      </Link>
      <Link className="link-path fredoka rounded-pill" to="/login">
        Login
      </Link>
      <img src={logo} alt="logo" className="logo-forms" />
      <div className="form fredoka" onKeyDown={handleEnter}>
        <h2>Sign-Up</h2>
        <label>
          Name*:
          <input
            onChange={handleInputChange}
            // onKeyDown={handleSpacebar}
            name="name"
            value={data.name}
          ></input>
        </label>
        <label>
          Surname*:
          <input
            onChange={handleInputChange}
            // onKeyDown={handleSpacebar}
            name="surname"
            value={data.surname}
          ></input>
        </label>
        <label>
          Username*:
          <input
            onChange={handleInputChange}
            onKeyDown={handleSpacebar}
            name="username"
            value={data.username}
          ></input>
        </label>
        <section className="small-input fredoka">
          <label>
            Gender*:
            <select
              className="select"
              onChange={handleInputChange}
              name="gender"
              value={data.gender}
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
          </label>
          <label>
            Age*:
            <input
              onChange={handleInputChange}
              onKeyDown={handleSpacebar}
              name="age"
              value={data.age}
            ></input>
          </label>
        </section>
        <label>
          Password*:
          <input
            type="password"
            onChange={handleInputChange}
            onKeyDown={handleSpacebar}
            name="password"
            value={data.password}
          ></input>
        </label>
        <label>
          Confirm password*:
          <input
            type="password"
            onChange={handleConfirmPassword}
            onKeyDown={handleSpacebar}
            name="confirm_password"
            value={confirmPassword}
          ></input>
        </label>
        <label>
          Email*:
          <input
            type="email"
            onChange={handleInputChange}
            onKeyDown={handleSpacebar}
            name="email"
            value={data.email}
          ></input>
        </label>
        <label>
          City*:
          <input
            onChange={handleInputChange}
            name="city"
            value={data.city}
          ></input>
        </label>
        <label>
          Address:
          <input
            onChange={handleInputChange}
            name="address"
            value={data.address}
          ></input>
        </label>

        {/* <label>
          Remember:
          <input
            onChange={handleInputChange}
            onKeyDown={handleSpacebar}
            name='remember'
            checked={data.remember}
            type='checkbox'></input>
        </label> */}

        <span className={(errorStatus || reqStatus?.message) && "info"}>
          {errorStatus || reqStatus?.message}
        </span>
        <button
          className="submitBtn rounded-pill"
          onClick={submit}
          disabled={isDisabled}
        >
          Sign-Up
        </button>
      </div>
      <img className="img-back" src={compositionRight} alt="immagine destra" />
      <FooterShared />
    </div>
  );
}
