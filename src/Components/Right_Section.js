import React, { useState } from "react";
import "../Styles/Right_Section.css";
import Paytmlogo1 from "../images/paytmlogo1.png";
import Paytmlogo from "../images/Paytm_Logo.jpeg";
import Userlogo from "../images/user.png";
import { HashLoader } from "react-spinners";
import axios from 'axios';

// const API_KEY = AIzaSyBY7MZC6O9K8TkZ66HXr4WdJtDSZ8k694I;

const Right_Section = () => {
  const trainingPrompt = [
    {
      role: "user",
      parts: [
        {
          text: "This is Introductory dialogue for any prompt :  'Hello, I am the Paytm Bot. Ask me anything. '",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "okay",
        },
      ],
    },
  ];

  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(true);
  const [allMessages, setAllMessages] = useState([]);

  const sendMessage = async () => {

    if (message.toLowerCase() === "give hostname") {
      setIsSent(false);
      try {
        const res = await axios.get('http://127.0.0.1:5000/get_hostname');
        const hostname = res.data.hostname;
        setIsSent(true);

        let newAllMessages = [
          ...allMessages,
          {
            role: "user",
            parts: [
              {
                text: message,
              },
            ],
          },
          {
            role: "model",
            parts: [
              {
                text: `Your PC hostname is: ${hostname}`,
              },
            ],
          },
        ];

        setAllMessages(newAllMessages);
        setMessage("");
      } catch (error) {
        console.error("Error fetching hostname:", error);
        setIsSent(true);
      }
      return;
    }

    let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBY7MZC6O9K8TkZ66HXr4WdJtDSZ8k694I`;

    let messagesToSend = [
      ...trainingPrompt,
      ...allMessages,
      {
        role: "user",
        parts: [
          {
            text: message,
          },
        ],
      },
    ];

    setIsSent(false);
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: messagesToSend,
      }),
    });

    let resjson = await res.json();
    setIsSent(true);

    let responseMessage = resjson.candidates[0].content.parts[0].text;

    let newAllMessages = [
      ...allMessages,
      {
        role: "user",
        parts: [
          {
            text: message,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: responseMessage,
          },
        ],
      },
    ];

    setAllMessages(newAllMessages);
    setMessage("");
  };

  return (
    <div className="rightsection">
      {allMessages.length > 0 ? (
        <div className="messages">
          {allMessages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.role === "user" ? "user-message" : ""}`}
            >
              <img
                src={msg.role === "user" ? Userlogo : Paytmlogo1}
                width={50}
                height={50}
                alt=""
              />
              <div className="details">
                <h2>{msg.role === "user" ? "You" : "Paytm-Bot"}</h2>
                <p>{msg.parts[0].text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="nochat">
          <div className="s1">
            <img src={Paytmlogo} alt="paytm" height={70} width={70} />
            <h1>How can I help you today</h1>
          </div>
          <div className="s2">
            <div className="suggestioncard">
              <h2>Recommend Activities</h2>
              <p>check your plan</p>
            </div>
            <div className="suggestioncard">
              <h2>Recommend Activities</h2>
              <p>check your plan</p>
            </div>
            <div className="suggestioncard">
              <h2>Recommend Activities</h2>
              <p>check your plan</p>
            </div>
            <div className="suggestioncard">
              <h2>Recommend Activities</h2>
              <p>check your plan</p>
            </div>
          </div>
        </div>
      )}
      <div className="bottomsection">
        <div className="messagebar">
          <input
            type="text"
            placeholder="Ask your query"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {isSent ? (
            <svg
              onClick={sendMessage}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          ) : (
            <HashLoader color="#042e6f" size={30} />
          )}
        </div>
        <p>
          Paytm Bot can make mistakes. Consider checking important information
        </p>
      </div>
    </div>
  );
};

export default Right_Section;
