
const ContentSwitcher = () => {
  // Array of content with headings, text, and images
  return (
    <div style={{ marginTop: '100px', backgroundColor: '#A5B4FC' }} >
      <div className="row justify-content-center">
       
        
        <div className="col-sm-10">
          <div className="row" >
            <div className="col-sm-5" style={{height: '400px'}}> 
              <div className="row fw-bold text-start" style={{ color: '#5c42fc', fontSize: '16px' }}>
                <p>Goode Doctor Technology</p> {/* Dynamic heading */}
              </div>
              <div className="row text-align-justify text-start">
                <p>At Good Doctor, we are committed to building a robust digital healthcare ecosystem connecting medical professionals with patients, to deliver high-quality health services. Deploying a conversational AI-powered solution enabled by Yellow.ai allows us to seamlessly engage with 700+ patients 24/7 on their preferred channels like WhatsApp. The aim is to improve accessibility of healthcare without being constrained by time and geographic boundaries</p> {/* Dynamic text */}
              </div>
            </div>
            <div className="col-sm-7 d-flex justify-content-center align-items-center" style={{height: '400px'}}>
              <img
                src="https://yellow.ai/wp-content/uploads/2023/04/testimonial-sit.webp" // Dynamic image
                alt="Dynamic Content"
                style={{ 
                  width: '100%', 
                  maxWidth: '300px', // Adjust max-width to control image size
                  height: 'auto',     // Ensures proper aspect ratio
                  objectFit: 'cover', 
                  borderRadius: '10px' 
                }}
              />
            </div>   
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContentSwitcher;
