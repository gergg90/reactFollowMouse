import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const buttonEtate = enabled ? "Activated" : "Disabled";

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <main>
      <div
        className="follow-pointer"
        style={{
          position: "absolute",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />

      <button onClick={() => setEnabled(!enabled)}>
        Button State: {buttonEtate}
      </button>
    </main>
  );
}

export default App;
