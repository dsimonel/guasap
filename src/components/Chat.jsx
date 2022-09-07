import React, { useContext } from "react";
import styled from "styled-components";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import arFlag from "../locales/es/es-AR.png";
import enFlag from "../locales/en/en-US.png";
import Messages from "./Messages";
import Input from "./Input";
import LocaleContext from "../context/LocaleContext";
import i18n from "../i18n";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const { locale } = useContext(LocaleContext);

  const LangButton = styled.input`
    background-size: cover;
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 5px;
  `;

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  function traducir() {
    console.log("Cambiar l", locale);
    locale === "en" ? changeLocale("es") : changeLocale("en");
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <LangButton
            type="image"
            onClick={() => traducir()}
            src={locale === "en" ? enFlag : arFlag}
            alt=""
          />
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
