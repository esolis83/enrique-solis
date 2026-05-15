import React from 'react';

// This component represents the mobile logo
const MobileLogo = () => (
  <div>
    <h1 className="global-site-title">
      <img src="images/es-logo.svg" alt="logo" className="logo-mobile-sgv" />
      <span style={ {
        display: "inline-block",
        textIndent: "-9999px",
        right: "0",
        height: "75px",
        width: "35%",
        position: "absolute",
        top: "0",
        zIndex: "10"
      } }>Enrique Solis Logo</span>
    </h1>
  </div>
);

export default MobileLogo;