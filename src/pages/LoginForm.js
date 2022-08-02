import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [reqStatus, setReqStatus] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, type, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
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
      .then((response) => response.text())
      .then((data) => setReqStatus(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    enableLoginButton();
    setReqStatus("");
  }, [data]);

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
    <div>
      <Link to="/">Back to home</Link> | <Link to="/signup">Sign-In</Link>
      <div className="form" onKeyDown={handleEnter}>
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

        <span className={reqStatus && "info"}>{reqStatus}</span>
        <button className="submitBtn" onClick={submit} disabled={isDisabled}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
