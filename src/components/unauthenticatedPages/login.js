import React from "react";
// import { useState } from "react";
import { useAuth } from "../../context/auth-context";

const Login = (props) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState(null);
  let setUser = useAuth().setUser;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setUser(true);
    // let body = JSON.stringify({ username: username, password: password });
    // fetch(address, {
    //   method: "POST",
    //   body: body,
    // })
    // .then((response) => {
    //   console.log(response);
    //   if (response.status === 200) {
    //     setUser({ username: username, password: password });
    //   }
    // })
    // .catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className="account-form">
      <h2>Login to App</h2>
      <div className="error-message">{/* {errorMessage} */}</div>
      <form className="loginForm">
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          // onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={onSubmitHandler}>
          Log in
        </button>
      </form>
      <button className="unauthenticated-link" onClick={props.changePage}>
        Sign up for an account
      </button>
    </div>
  );
};

export default Login;
