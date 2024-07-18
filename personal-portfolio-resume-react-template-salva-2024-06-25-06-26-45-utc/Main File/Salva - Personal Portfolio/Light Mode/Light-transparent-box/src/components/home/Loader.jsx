import React, { useState, useEffect } from "react";

const Overlay = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after 2 seconds
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="overlay" style={{ display: mounted ? "none" : "block" }}>
      <div className="overlayDoor"></div>
      <div className="banter-loader">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="banter-loader__box"></div>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
