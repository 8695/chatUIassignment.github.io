import React, { useState } from "react";
import styles from "../css/chat.module.css";
import adminIcon from "../image/group.png";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { BsEmojiSmile } from "react-icons/bs";

const ChatSection = () => {
    const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
    const [message, setMessage] = useState("");
    const [emoji, setEmoji] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);

    const getTimeStamp = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    const toggleEmoji = () => {
        setEmoji(!emoji); // Toggle emoji picker visibility
    };

    const addEmoji = (e) => { 
        const symEmoji = e.unified.split("_");
        const emojiArray = [];
        symEmoji.forEach((ele) => emojiArray.push("0x"+ele));
        let newEmoji = String.fromCodePoint(...emojiArray);
        setMessage(message + newEmoji);
    };
    const styleEmoji={
        position: "fixed",
        right: "2%",
        bottom: "12%"
    }

    const getRandomColor = () => {
        const colorCodes = ["#f97ca0", "#95c51ba8", "#c51f1bd4", "#c51f1bd4", "#e216b2cc"];
        return colorCodes[Math.floor(Math.random() * colorCodes.length)];
    };

    const handleSendMessage = () => {
        if (message.trim() === "") return;
        const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
        const newMessage = { user: randomUser, text: message, time: getTimeStamp(), color: getRandomColor() };
        setChatMessages([...chatMessages, newMessage]);
        setMessage("");
    };

    return (
        <>
            <div className={styles.headerSec}>
                <div className={styles.chatHeading}>
                    <div>
                        <p className={styles.Introduce}>Introductions</p>
                        <p className={styles.para}>This Channel is For Company wide Chatter</p>
                    </div>
                    <div className={styles.adminIcon}>
                        <p className={styles.title}>3|100</p>
                        <span>
                            <img src={adminIcon} alt="Admin" className={styles.admin} />
                        </span>
                    </div>
                </div>
                <div className={styles.chatBox}>
                    {chatMessages.map((msg, index) => (
                        <div key={index} className={styles.message}>
                            <div className={styles.userContainer}>
                                <div className={styles.FirstChar} style={{ backgroundColor: msg.color }}>
                                    <p className={styles.Char}>{msg.user.charAt(0)}</p>
                                </div>
                                <div>
                                    <p className={styles.user}>{msg.user} </p>
                                </div>
                                <div>
                                    <p className={styles.time}>{msg.time}</p>
                                </div>
                            </div>
                            <div className={styles.messContainer}>
                                <p className={styles.text}>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.inputBox}>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type message..."
                    />
                    <div className={styles.emoji}>
                        <p onClick={toggleEmoji}>

                        <BsEmojiSmile />
                        </p>
                        <p style={styleEmoji}>
                        {emoji && <Picker data={data} maxFrequentRows={0} onEmojiSelect={addEmoji}  />}
                        </p>
                    </div>
                   
                    <button className={styles.btn} onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </>
    );
};

export default ChatSection;
