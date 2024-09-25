import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feature.css'
import feature2 from "./assets/feature2.png"
import feature2_2 from "./assets/feature2_1.png"
import feature2_3 from "./assets/feature2_3.png"

export default function Feature() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    feature2,
    feature2_2,
    feature2_3,
  ];

  const faqs = [
    {
      question: 'Voice Messaging for Easy Communication',
      answer: 'Speak directly to our AI-powered system and share your health concerns without typing, making healthcare more accessible to everyone.'
    },
    {
      question: 'Multilingual Voice Support',
      answer: 'No matter what language you speak, our voice chat understands and responds to what you say, ensuring clear communication and personalised health advice.'
    },
    {
      question: 'Designed for Rural Communities',
      answer: 'This facility caters to the needs of people in rural areas, and provides a simple and effective way to get medical assistance without the need for typing or formal education.'
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
              <h2>Voice Chat: Speak Your Health Concerns with Ease</h2>
              <p className="mt-4">
              Our voice chat feature allows you to communicate your health issues via voice messages in any language. Designed specifically for people who may have trouble writing, it ensures that everyone, including people in rural areas, can access quality healthcare advice.
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
