import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    console.log("Clicked");
    console.log(isOpen)

  };

  return (
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAccordion}>
            <span>{question}</span>
            <span className={`faq-arrow ${isOpen ? "open" : ""}`}></span>
          </div>
          <div className={`faq-answer ${isOpen ? "open" : ""}`}>{answer}</div>
        </div>
      );
}

export default FAQItem;
