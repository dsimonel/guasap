import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useTranslation } from "react-i18next";
import iconG from "../img/guasá-rojizo.png";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo">Guasáp</span>
        <span >
          <img style={{height: "100px", width: "100px"}} src={iconG} alt="" />
        </span>
        <span className="title">{t("login")}</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>{t("signin")}</button>
          {err && <span>{t("somethingwrong")}</span>}
        </form>
        <p>{t("noaccount")} <Link to="/register">{t("register")}</Link></p>
      </div>
    </div>
  );
};

export default Login;
