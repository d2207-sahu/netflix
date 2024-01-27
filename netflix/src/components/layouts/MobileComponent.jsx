import React, { useState, useEffect } from "react";

const MobileComponent = (WrappedComponent) => {
  const MobileComponentWrapper = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
      const checkScreenWidth = () => {
        setIsMobile(window.innerWidth <= 600);
      };

      window.addEventListener('resize', checkScreenWidth);

      return () => {
        window.removeEventListener('resize', checkScreenWidth);
      };
    }, []);

    return isMobile ? <></> : WrappedComponent;
  };

  return MobileComponentWrapper;
};

export default MobileComponent;