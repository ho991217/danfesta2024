import { useEffect, useState } from 'react';

export default function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (!window.visualViewport) {
        return;
      }

      setDimensions({
        width: window.visualViewport.width,
        height: window.visualViewport.height,
      });
    };

    window.addEventListener('resize', updateDimensions);

    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
}
