import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import React from "react";
import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px] `,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main style={{
      backgroundImage: 'url("https://cdn.wallpapersafari.com/27/32/jt4AoG.jpg")',
      backgroundRepeat: "no-repeat",backgroundSize:'cover'
    }} className={style.main}>
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Compoenent */}
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;