import React, { useState } from 'react';
import feature1 from './assets/Feature1.webp'
import feature1_2 from './assets/feature1_2.webp'
import feature1_3 from './assets/feature1_3.webp'
import plus from './assets/plus.svg'
import minus from './assets/minus.svg'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Feature() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    feature1,
    feature1_2,
    feature1_3,
  ];

  const faqs = [
    {
      question: '24/7 Health Assistance',
      answer: 'Access real-time help for any health concern at any time of day, offering timely advice and support whenever you need it.'
    },
    {
      question: 'Personalized Health Recommendations',
      answer: 'Based on your health concerns, the chatbot offers tailored advice and resources, ensuring the information you receive is relevant to your condition.'
    },
    {
      question: 'Get Response in Your Language',
      answer: 'No language barriers here—our chatbot supports multiple languages, ensuring everyone can access quality healthcare advice.'
    },
  ];

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="row my-5 py-5" style={{background: "#F1F2FF"}} >
      <div className="row g-0 mt-5 ">
      <h2 className='text-center color-3'>Here's how <span className='color-5'>Magnum AI</span> is Transforming</h2>
      <h2 className='text-center'><strong>Your Healthcare <span className='color-5'>Experience</span> Today</strong></h2>
        {/* Left Column */}
        <div className="col-sm-12 col-lg-6 d-flex  align-items-start">
          <div className="col-md-12 col-lg-12">
            <img 
              src={activeIndex !== null ? images[activeIndex] : images[0]} 
              alt="Feature"
              className="img-fluid mt-5"
              style={{ maxWidth: '100%', maxHeight: '500px',marginTop: ''}} // Kept object-fit inline
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-12 col-lg-6 col-sm-12 p-0">
          <div className="row mt-5 ">
            <div className="col-sm-12 col-md-12 color-3">
            <h3>AI-Powered Health Chatbot: <span className='color-5'>Instant Support</span> for Your Health Needs</h3>
              <p className="mt-4">
              Our AI-driven health <span className='color-5 '>chatbot is here to help</span> you manage any health concern. Whether it’s answering <span>your questions, guiding you</span> to the right our chatbot ensures <span className='color-5'>you get the assistance you</span> need quickly and efficiently.
              </p>
            </div>
            <div className="col-md-12 col-lg-12 mt-3">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-2 bg-light rounded-3 p-2">
                  <button 
                    className="btn btn-outline-light d-flex align-items-center w-100 text-start fs-6 fw-bold" 
                    onClick={() => toggleText(index)}
                  >
                    <div className="d-flex align-items-center my-2 text-dark " style={{border: 'none'}}>
                      <img
                        src={activeIndex === index 
                          ? minus 
                          : plus}
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
