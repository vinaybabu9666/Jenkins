import React from 'react';
import './styles.css';
//import './Responsive.css';


const SocialMediaIcons = () => {
  return (
    <div className="float-sm">
      <div className="fl-fl float-fb">
        {/* <i className="fa"></i> */}
        <a href="https://www.facebook.com/kanakadurgafinancelimited/" target="_blank">
          <img src="/img/fb.png" alt="logo" />
        </a>
        <i className="fa"></i>
       
      </div>
      <div className="fl-fl float-tw">
        <i className="fa"></i>
        <a href="/" target="_blank"> </a>
        <img src="/img/tw.png" alt="logo" />
      </div>
      {/* <div className="fl-fl float-li">
        <i className="fa"></i>
        <a href="" target="_blank"> </a>
        <img src="/img/li.png" alt="logo" />
      </div> */}
      <div className="fl-fl float-li">
    <a href="https://in.linkedin.com/company/kanakadurga-finance" target="_blank" rel="noopener noreferrer">
        <img src="/img/li.png" alt="LinkedIn Logo" />
    </a>
    <i className="fa"></i>  
</div>

      <div className="fl-fl float-yt">       
        <a href="https://www.youtube.com/@kanakadurgafinancelimited8574" target="_blank" rel="noopener noreferrer"> 
        <img src="/img/yt.png" alt="logo" />
        </a>
        <i className="fa"></i>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
