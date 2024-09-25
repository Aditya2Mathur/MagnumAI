import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
const ContentSwitcher = () => {
  // Array of content with headings, text, and images
  return (
    <div style={{ marginTop: '100px',background: "#F1F2FF"}} >
      <div className="">
        <div className="row p-0 m-0">
          <div className="row g-0 d-flex flex-sm-row-reverse flex-md-row" >
            {/* left */}
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-end" style={{height: '400px'}}> 
              <div className="row fw-bold text-start color-5" style={{fontSize: '16px' }}>
                <p className='color-5'>Goode Doctor Technology</p> {/* Dynamic heading */}
              </div>
              <div className="row text-align-justify text-start color-3">
                <p>At Good Doctor, we are committed to building a robust digital healthcare ecosystem connecting medical professionals with patients, to deliver high-quality health services. Deploying a conversational AI-powered solution enabled by Yellow.ai allows us to seamlessly engage with 700+ patients 24/7 on their preferred channels like WhatsApp. The aim is to improve accessibility of healthcare without being constrained by time and geographic boundaries</p> {/* Dynamic text */}
              </div>
            </div>
            {/* right */}
            <div className="col-lg-5 col-md-6 d-flex justify-content-center align-items-md-center align-items-sm-start align-items-xs-start" style={{height: '400px'}}>
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
