import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Magnumlogo from './assets/Magnumlogo.png';

export default function MyComponent() {
  return (
    <div className='container-fluid p-0'>
      <div className="row border-bottom" style={{ minHeight: '100px' }}>
        <div className="col-sm-4 d-flex justify-content-center align-items-center">
          <img src={Magnumlogo} alt="Magnum Logo" style={{ width: '150px' }} />
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center text-sm-end text-md-end">
          <span className="d-block about" style={ {color:'#888DD8'} }>About</span>
        </div>
        {/* Hide this column on screen sizes below 576px */}
        <div className="col-sm-4 d-none d-sm-flex justify-content-center align-items-center">
          <button className='rounded-pill py-2 px-3 fw-bold d-none d-md-block' style={{ backgroundColor: '#888DD8', border: 'none', color:"#f1f2ff" }}>
            Talk to agust
          </button>
        </div>
      </div>
    </div>
  );
}
