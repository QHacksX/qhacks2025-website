"use client";

import "../../css/FaqStyle.css";
import { faqs } from "@/src/data/faqs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"; 

export default function Dropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-3/5'>
      {faqs.map((faq, index) => (
        <div key={index} className='p-4'>
          <button
            className='flex justify-between w-full text-left font-medium text-lg'
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span>
              {openIndex === index ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className={`faq-content ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
