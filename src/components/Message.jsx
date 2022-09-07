import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import LocaleContext from "../context/LocaleContext";


function timeConverter(timestamp, locale){
  let today = new Date().toLocaleDateString(locale, {day: '2-digit', month: 'short'});
  let fecha = new Date(timestamp * 1000);
  let date = fecha.toLocaleDateString(locale, {day: '2-digit', month: 'short'});
  let time = fecha.toLocaleTimeString(locale);
  let notToday = date !== today ? date : "";
  return `${notToday} ${time}`;
};

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const { locale } = useContext(LocaleContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{timeConverter(message.date, locale)}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
