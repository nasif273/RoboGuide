import { Link } from "react-router-dom";
import amazonLogo from "./logo1.jpg";
import "./signup.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={amazonLogo} alt="Amazon Logo" />
      </Link>
      <div className="container">
        <h1>Sign Up</h1>
        <form action="">
          <div className="form__group">
            <label>Name</label>
            <input type="text" className="form__input" />
          </div>
          <div className="form__group">
            <label>Email</label>
            <input type="text" className="form__input" />
          </div>
          <div className="form__group">
            <label>Password</label>
            <input type="password" className="form__input" />
          </div>
          <div className="form__group">
            <label>Date of Birth</label>
            <input type="date" className="form__input" />
         </div>
          <button className="login__button">Sign Up</button>
          <p className="terms__text">
            By continuing, you agree to our Conditions of Use and Privacy
            Notice.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
