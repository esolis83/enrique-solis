import React from 'react';

const Logo = () => (
  <div>
    <h1 className="global-site-title">
      <img src="/images/es-logo.svg" alt="logo" className="logo-svg" />
      <span style={ { display: "inline-block", textIndent: "-9999px", height: "111px", width: "100%", position: "absolute", top: "0", zIndex: "10" } }>Enrique Solis Logo</span>
    </h1>
  </div>
);

export default Logo;