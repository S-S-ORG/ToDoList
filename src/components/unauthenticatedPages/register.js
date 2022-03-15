import React /*,{ useState }*/ from "react";
// import { useAuth } from "../context/auth-context";

const Register = (props) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState(null);

  // let setUser = useAuth().setUser;

  const onSubmitHandler = (e) => {
    e.preventDefault();
  //   let body = JSON.stringify({ username: username, password: password });
  //   fetch("http://localhost:8989/api/register", {
  //     method: "POST",
  //     body: body,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       if (response.status === 200) {
  //         setUser({ username: username, password: password });
  //       }
  //     })
  //     .catch((error) => setErrorMessage(error.message));
  };
  return (
    <div className="account-form">
      <h2>Sign up</h2>
      <div className="error-message" data-testid="error-message">
        {/* {errorMessage} */}
      </div>
      <form onSubmit={onSubmitHandler}>
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
        <button type="submit" data-testid="register-btn">
          Register
        </button>
      </form>
      <button className="unauthenticated-link" onClick={props.changePage}>
        Already have an account? Log In
      </button>
    </div>
  );
};

export default Register;
