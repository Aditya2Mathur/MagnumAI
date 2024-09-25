import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import feature3 from "./assets/feature3.png"
import feature3_2 from "./assets/feature3_2.png"
import feature3_3 from "./assets/feature3_3.png"

export default function Feature() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
     feature3,
     feature3_2,
     feature3_3,
  ];

  const faqs = [
    {
      question: 'Fast and Accurate Report Analysis',
      answer: 'Upload your reports for quick analysis. Our AI provides clear explanations, helping you understand complex medical details in simple terms.'
    },
    {
      question: 'Personalized Health Advice',
      answer: "Based on your reports, receive tailored health advice and treatment recommendations, ensuring you're on the right path to recovery."
    },
    {
      question: 'Ask Questions About Your Reports',
      answer: 'Got questions? Our system allows you to ask anything related to your reports, giving you the confidence and clarity you need to take control of your health.'
    },
  ];

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="row p-0 m-0" >
      <div className="row g-0">
        {/* Left Column */}
        <div className="col-sm-12 col-lg-6 d-flex  align-items-start">
          <div className="col-md-12 col-lg-12">
            <img 
              src={activeIndex !== null ? images[activeIndex] : images[0]} 
              alt="Feature"
              className="img-fluid mt-5"
              style={{ maxWidth: '100%', maxHeight: 'auto',marginTop: ''}} // Kept object-fit inline
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-12 col-lg-6 col-sm-12 p-0">
          <div className="row mt-5 ">
            <div className="col-sm-12 col-md-12">
              <h2>Upload Medical Reports for Instant Analysis and Advice</h2>
              <p className="mt-4">
              Easily upload your medical reports and get quick, AI-driven insights. Our system analyzes your reports and answers any questions you have, helping you understand your health better and guiding you toward the right treatment.
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
