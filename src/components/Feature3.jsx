import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import feature4 from "./assets/feature4.png"
import feature4_2 from "./assets/feature4_2.png"
import feature4_3 from "./assets/feature4_3.png"
import plus from './assets/plus.svg'
import minus from './assets/minus.svg'

export default function Feature() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    feature4,
    feature4_2,
    feature4_3,
  ];

  const faqs = [
    {
      question: 'Quick Meal Tracking',
      answer: 'Just take a photo of your food, and our AI will analyze it to give you an instant breakdown of calories, nutrients, and more.'
    },
    {
      question: 'Personalized Nutrition Advice',
      answer: 'Based on your meal, receive tailored suggestions to improve your diet, ensuring you’re meeting your health goals.'
    },
    {
      question: 'Ask Anything About Your Meal',
      answer: 'Curious about your food choices? Ask our system anything—from portion sizes to healthier alternatives—and get expert guidance to make better eating decisions.'
    },
  ];

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container-fluid mt-5 p-5 m-0">
      <div className="row g-0">

        {/* Left Column (Image) - Swapped to bottom on md, lg screens */}
        <div className="col-sm-12 col-lg-6 d-flex align-items-start order-lg-2 order-md-2">
          <div className="col-md-12 col-lg-12">
            <img
              src={activeIndex !== null ? images[activeIndex] : images[0]}
              alt="Feature"
              className="img-fluid"
              style={{ maxWidth: '100%', maxHeight: 'auto' }}
            />
          </div>
        </div>

        {/* Right Column (Text) - Swapped to top on md, lg screens */}
        <div className="col-md-12 col-lg-6 col-sm-12 p-0 order-lg-1 order-md-1">
          <div className="row f-reverse m-auto">
            <div className="col-sm-12 col-md-12">
              <h3>Track Your Meals with a Simple Photo</h3>
              <p className="mt-4">
                Snap a photo of your meal, upload it, and get instant feedback on what you're eating. Our AI helps you understand your food’s nutritional value, offering personalized advice for healthier eating habits.
              </p>
            </div>
            <div className="col-md-12 col-lg-12 mt-3">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-2 bg-light rounded-3 p-2">
                  <button
                    className="btn btn-outline-light text-dark d-flex align-items-center w-100 text-start fs-6 fw-bold"
                    onClick={() => toggleText(index)}
                  >
                    <div className="d-flex align-items-center my-2" style={{ border: 'none' }}>
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
