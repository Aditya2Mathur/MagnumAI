import React, { useRef } from 'react';
import { CloudinaryContext } from 'cloudinary-react'; // Removed Video as we are using native video tag
import './Home.css';
import 'animate.css';

export default function Home() {
  const videoRef = useRef(null);

  // Function to handle video play/pause on tap
  const handleVideoTap = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <CloudinaryContext cloudName="dcx4eh4kv">
      <div className="container-fluid col-sm-12 home-content" style={{ padding:'20px', background: "linear-gradient(180deg, rgba(99,102,241,1) 0%, rgba(165,180,252,1) 100%)"}}>
        <div className="col-sm-10" style={{ margin: 'auto' }}>
          <div className="row align-items-center" style={{ marginTop: '50px'}}>
            {/* Left Column */}
            <div className="col-md-12 text-center ">
              <h1 className="hero-title text-white">Transform Healthcare with AI-Powered Solutions</h1>
              
              <p className="hero-subtitle text-white">
              Improve patient care, streamline operations, and boost efficiency with AI-driven technology
              </p>
            </div>
          </div>
          {/* Video Section */}
          <div className="row video-section" style={{ marginTop: '30px' }}>
            <div className="col-12 d-flex justify-content-center">
              <video
                ref={videoRef}
                onClick={handleVideoTap}
                autoPlay
                loop
                muted
                style={{
                  borderRadius: '15px 15px 15px 15px', // For rounded top corners
                  width: '100%',
                  maxWidth: '1080px',
                  height: 'auto',
                  borderTop: '1px solid #dee2e6', // Top border
                  borderLeft: '1px solid #dee2e6', // Left border
                  borderRight: '1px solid #dee2e6', // Right border
                  borderBottom: 'none', // No bottom border
                  
                  position: 'relative',
                }}
              >
                <source
                  src="https://res.cloudinary.com/dcx4eh4kv/video/upload/lx7pwmv5smwkqfgll8nn"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </CloudinaryContext>
  );
}
