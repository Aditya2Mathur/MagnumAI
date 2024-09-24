import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feature.css'
import feature2 from "./assets/Feature1.png"

export default function Feature() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    feature2,
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-2-1010x1024.webp',
    'https://yellow.ai/wp-content/uploads/2024/06/healthcare-inline-img-2-3-1010x1024.webp',
  ];

  const faqs = [
    {
      question: 'Appointment booking and rescheduling',
      answer: 'Automate booking and updation of appointments and lab tests. Free up healthcare agents for high-value tasks.'
    },
    {
      question: 'Human-like voice interactions',
      answer: 'Tackle interruptions with empathy using voice AI agents, adept in active listening. Transfer complex queries to live agents.'
    },
    {
      question: 'Secure billing and payments',
      answer: 'Streamline invoicing, billing, and reimbursements with smooth integration with existing payment solutions.'
    },
  ];

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container-fluid mt-5 p-5 m-0" style={{background: "linear-gradient(180deg, rgba(99,102,241,1) 0%, rgba(165,180,252,1) 100%"}}>
      <div className="row g-0" >

        {/* Left Column (Image) - Swapped to top on small screens */}
        <div className="col-sm-12 col-lg-6 d-flex  align-items-start" >
          <div className="col-md-12 col-lg-12">
            <img 
              src={activeIndex !== null ? images[activeIndex] : images[0]} 
              alt="Feature"
              className="img-fluid"
              style={{ maxWidth: '100%', maxHeight: 'auto' }}
            />
          </div>
        </div>

        {/* Right Column (Text) - Swapped to bottom on small screens */}
        <div className="col-md-12 col-lg-6 col-sm-12 p-0">
          <div className="row f-reverse m-auto" >
            <div className="col-sm-12 col-md-12">
              <h2>Boost healthcare support efficiency with human-like empathy</h2>
              <p className="mt-4">
                Make high query volume handling effortless: Self-serve 90% of FAQs with accurate resolutions (having 1% hallucinations). 
                Personalize interactions in 135+ languages.
              </p>
            </div>
            <div className="col-md-12 col-lg-12 mt-3">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-2">
                  <button 
                    className="btn btn-outline-light d-flex align-items-center w-100 text-start fs-6 fw-bold" 
                    onClick={() => toggleText(index)}
                  >
                    <div className="d-flex align-items-center my-2 text-dark" style={{border: 'none'}}>
                      <img
                        src={activeIndex === index 
                          ? 'https://cdn-icons-png.flaticon.com/512/262/262039.png' 
                          : 'https://cdn-icons-png.flaticon.com/128/3024/3024515.png'}
                        alt={activeIndex === index ? 'Minus icon' : 'Plus icon'}
                        style={{ width: '24px', height: '24px', marginRight: '10px' }}
                      />
                      <span>{faq.question}</span>
                    </div>
                  </button>
                  {activeIndex === index && (
                    <p className="faq-answer ms-5 text-sm-start">{faq.answer}</p> 
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
