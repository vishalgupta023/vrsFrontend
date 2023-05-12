import React from "react";
import FAQItem from "./faqItem";
import "./faq.css";
import FaqData from "./FaqData"

function FAQSection() {
  return (
    <div className="faq-section container">
      {FaqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQSection;

