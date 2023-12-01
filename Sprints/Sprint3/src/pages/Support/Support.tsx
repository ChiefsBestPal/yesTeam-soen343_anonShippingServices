


import React, { useState,useRef,useEffect } from "react";
import "./Support.css";

interface ChatEntry {
    user: string;
    bot: string;
  }
  
  const Support: React.FC = () => {


    const [inputValue, setInputValue] = useState("");
    const [chatHistory, setChatHistory] = useState<ChatEntry[]>([]);
    const [responseIndex, setResponseIndex] = useState(0);

    const messagesContainerRef = useRef<HTMLDivElement | null>(null);

    const [orderNumber, setOrderNumber] = useState('');
    const [problemDescription, setProblemDescription] = useState('');

    const handleSubmit = () => {
      let ticketNum = "" + Math.floor(Math.random() * 99999);
      alert("Submitted ticket #" + ticketNum);

      setOrderNumber('');
      setProblemDescription('');



    };

    useEffect(() => {
      // Scroll to the bottom when messages change
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    }, [chatHistory]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const generateBotResponse = () => {
      const responses = [
        "It eeeez what it eeeez.",
        "IDK, double it and give to the next person.",
        "More than what you can count on your fingers.",
        "Taylor Swift."
      ];
  
      const response = responses[responseIndex % responses.length];
      const newEntry: ChatEntry = {
        user: inputValue,
        bot: response
      };
  
      setChatHistory([...chatHistory, newEntry]);
      setResponseIndex(responseIndex + 1);
      setInputValue(""); // Clear input after sending
    };
  
    const renderChatHistory = () => {


      return chatHistory.map((entry, index) => (
        <div className="chat" key={index}>
          <div className="user-message">{entry.user}</div>
          <div className="bot-message">{entry.bot}</div>
        </div>
      ));
    };
  

  return (
    <div className="Support">
    <div className="background-top"></div>
      <div className="background-bottom"></div>
       <div className="Rectangle">
        <div className="generel-container FAQ">
          Frequently Asked Questions                
        </div>
        <div className="generel-container">
          <div className="Question">
            How can I track my shipment?
          </div>
          <div>
            You can easily track your shipment by entering the provided tracking number on our "Track
            Shipment" page. Real-time updates on the status and location of your package will be available.
          </div>
          <div className="Question">
            Can I change the delivery address after placing an order?
          </div>
          <div>
            Once an order is confirmed, it is challenging to modify the delivery address. Please double-check your
            shipping information before completing your purchase. Contact our customer support for assistance.
          </div>
          <div className="Question">
            What should I do if my package is damaged upon arrival?
          </div>
          <div>
            If you receive a damaged package, please contact our customer support team immediately. Provide photos
            of the damaged items and packaging, and we will assist you in resolving the issue.
          </div>
          <div className="Question">
            What should I do if my package is damaged upon arrival?
          </div>
          <div>
            If you receive a damaged package, please contact our customer support team immediately. Provide photos
            of the damaged items and packaging, and we will assist you in resolving the issue.
          </div>
        </div>
      </div>
      <div className="AI-intro">
          Try to reach an employee here; No one Answering ? <br/>
          More questions? Message the AI-powered revolutionary UPYes help bot for more help!
        </div>
      <div className="AI">
        <div className="chat-history" ref={messagesContainerRef}>
          {renderChatHistory()}
        </div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange}
          placeholder="Enter message"
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              generateBotResponse();
            }
          }}
        />
      </div>
      <div>
        <h1>Submit a Problem Ticket</h1>
        <form>
          <div style={{margin : "0", textAlign: "center"}}>
            <label htmlFor="orderNumber">Order Number: </label>
            <input
                type="text"
                id="orderNumber"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
            />
          </div>
          <br/>
          <div style={{margin : "0", textAlign: "center"}}>
            <label htmlFor="problemDescription">Problem Description: </label>
            <textarea
                id="problemDescription"
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
            />
          </div>

          <button type="button" onClick={handleSubmit} style={{marginLeft: "40%"}}>
            Submit Ticket
          </button>
        </form>
        <br/>
      </div>

    </div>
  );
};

export default Support;
