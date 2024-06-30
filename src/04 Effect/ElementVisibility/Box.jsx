import { useRef, useEffect } from "react";

export default function Box() {
  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white";
        } else {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
        }
      },
      {
        threshold: 1.0,
      }
    );
    observer.observe(div);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        padding: 20,
        border: "2px solid black",
      }}
    >
      <h1>Next Article</h1>
    </div>
  );
}
