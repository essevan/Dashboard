import React, { useState, useRef, useEffect } from 'react';
import { json } from 'react-router-dom';

const Chat = ({ data, isOpen, onClose }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [chatHistory, setChatHistory] = useState("");
    const [loading, setLoading] = useState(false)
    const messagesContainerRef = useRef(null);


    // useEffect(()=>{
    //     setMessages([])
    //     setChatHistory("")
    // },[])

    useEffect(() => {

        const fetchData = async () => {
            if (data) {
                setMessages([])
                setChatHistory("")
                try {
                    setLoading(true)
                    const response = await fetch(
                        "http://54.82.90.195:8000/invoke/",
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ "data": data })
                        }
                    );
                    const responseData = await response.json();
                    console.log(responseData);
                    const userMessage = { text: responseData.message, sender: "bot" };
                    setMessages((prevMessages) => [...prevMessages, userMessage]);
                    setLoading(false)
                    setChatHistory(prevChatHistory => `${prevChatHistory}user: ${JSON.stringify(data)}\nbot: ${responseData.message}\n`);
                } catch (error) {
                    console.error("Error sending JSON data:", error);
                }
            }
        };
        fetchData();
    }, [data]);




    const handleSendMessage = async () => {
        if (inputValue.trim() !== "") {
            setLoading(true);
            const userMessage = { text: inputValue, sender: "user" };
            const updatedChatHistory = `${chatHistory}user: ${inputValue}\n`;
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setChatHistory(updatedChatHistory);
            setInputValue(""); // Clear input after sending

            sendMessageToBot(updatedChatHistory);
        }
    };

    const sendMessageToBot = async (updatedChatHistory) => {
        try {
            console.log("Checking", updatedChatHistory);
            const response = await fetch(
                "http://54.82.90.195:8000/invoke/",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "text": updatedChatHistory
                    })
                }
            );

            const data = await response.json();
            console.log(data);

            const botMessage = { text: data.message, sender: "bot" };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
            setChatHistory((prevChatHistory) => `${prevChatHistory}bot: ${data.message}\n`);
            setLoading(false);
        } catch (error) {
            console.error("Error sending message to chatbot:", error);
        }
    };



    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop =
                messagesContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed bottom-0 right-0 w-80 h-96 bg-white shadow-lg rounded-t-lg flex flex-col overflow-hidden z-10">
            <div className="text-black px-6 pt-2 pb-1 flex justify-between items-center">
                <h3 className="text-[#092053] font-bold">Chat</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#092053" className="bi bi-x text-lg cursor-pointer" viewBox="0 0 16 16"
                    onClick={onClose}>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
            <div className="w-[90%] border-b self-center border-gray-300"></div>
            <div className="flex-1 p-3 overflow-y-auto hide-scrollbar" ref={messagesContainerRef}>


                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 p-2 rounded  whitespace-pre-wrap text-[#111C36] text-sm max-w-fit ${msg.sender === 'user' ? 'bg-[#D3E5EC] ml-auto' : 'bg-[#F0F0F0] mr-auto'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="ml-5">
                {loading === true ? <div className='pulse-loader'></div> : ""}
            </div>
            <div className="px-3 py-1 flex flex-row">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full pl-2 py-2 pr-10 bg-[#111C36] text-white rounded-3xl placeholder:text-white text-sm outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <svg width="12" height="12" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={handleSendMessage}
                    className="w-6 cursor-pointer h-6 p-[3px] bg-white rounded-full text-white absolute right-4 bottom-3 justify-center items-center">
                    <path d="M21.8718 0.816529C21.7117 0.656463 21.5087 0.546086 21.2874 0.498685C21.066 0.451285 20.8356 0.468882 20.624 0.549359L1.04968 7.95818H1.04577C0.820072 8.04499 0.626676 8.19935 0.491992 8.40018C0.357308 8.60101 0.287903 8.83852 0.293257 9.08028C0.29861 9.32203 0.37846 9.55624 0.521902 9.75091C0.665344 9.94558 0.865383 10.0912 1.0947 10.168L1.11476 10.1743L7.83315 13.0432C7.96419 13.083 8.10337 13.0877 8.2368 13.0569C8.37023 13.0261 8.49325 12.9608 8.59356 12.8676L19.3763 2.8203C19.4084 2.78817 19.4465 2.76269 19.4885 2.7453C19.5305 2.72791 19.5755 2.71896 19.6209 2.71896C19.6664 2.71896 19.7114 2.72791 19.7533 2.7453C19.7953 2.76269 19.8335 2.78817 19.8656 2.8203C19.8977 2.85243 19.9232 2.89057 19.9406 2.93255C19.958 2.97453 19.9669 3.01953 19.9669 3.06496C19.9669 3.1104 19.958 3.15539 19.9406 3.19737C19.9232 3.23935 19.8977 3.27749 19.8656 3.30962L9.81784 14.0874C9.72462 14.1877 9.65933 14.3108 9.62851 14.4442C9.59768 14.5776 9.6024 14.7168 9.64218 14.8478L12.512 21.5701C12.515 21.5799 12.5179 21.5887 12.5213 21.598C12.6779 22.0516 13.0743 22.3717 13.5533 22.3932C13.5744 22.3932 13.5817 22.3932 13.6023 22.3932C13.8441 22.3946 14.0808 22.3232 14.2815 22.1882C14.4822 22.0533 14.6377 21.8612 14.7277 21.6367L22.1355 2.06773C22.2172 1.85599 22.2357 1.62513 22.1889 1.40308C22.1421 1.18104 22.0319 0.977304 21.8718 0.816529Z" fill="#111C36" />
                </svg>
            </div>
        </div>
    );
};

export default Chat;
