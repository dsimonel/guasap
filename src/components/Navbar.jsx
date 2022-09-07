import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import iconG from "../img/guasá-rojizo.png";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <div className="logo">
      <span>
        <img
          className="iconGuasa"
          src={iconG}
          alt=""
        /></span>
        <span className="texto">Guasáp</span>
      </div>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>{t("logout")}</button>
      </div>
    </div>
  );
};

export default Navbar;
