import { useEffect, useState } from "react";

function Balloon({ speed, leftPosition }) {
  // Apply the animation duration to the balloon using inline styles.
  return (
    <div
      className="balloon-container"
      style={{ left: `${leftPosition}%`, animationDuration: `${speed}s` }}
    >
      <div className="balloon">
        <div className="tail"></div>
      </div>
    </div>
  );
}

function Balloons() {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Create multiple balloons with random speeds and positions.
    const balloonData = Array.from({ length: 10 }, () => ({
      speed: Math.random() * 3 + 5, // Speed between 5s and 8s
      leftPosition: Math.random() * 80 + 10, // Random left position between 10% and 90%
    }));
    setBalloons(balloonData);
  }, []);

  return (
    <div className="App">
      <div className="container">
        {balloons.map((balloon, index) => (
          <Balloon
            key={index}
            speed={balloon.speed}
            leftPosition={balloon.leftPosition}
          />
        ))}
      </div>
    </div>
  );
}

export default Balloons;
