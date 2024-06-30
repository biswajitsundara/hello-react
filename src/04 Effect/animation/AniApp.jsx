import React, { useEffect, useRef } from "react";
import { FadeInAnimation } from "./Animation";

function AniApp() {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(3000);

    return () => {
      animation.stop();
    };
  }, []);
  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: "white",
        padding: 50,
        textAlign: "center",
        fontSize: 50,
        backgroundImage:
          "radial-gradient(circle, rgba(30, 30, 30, 1) 0%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      Welcome
    </h1>
  );
}

export default AniApp;
