import "./styles.css";
import TextAnimation from "./TextAnimation"; // Uses setInterval for animation
import TextAnimationOptimized from "./TextAnimationOptimized"; // Uses requestAnimationFrame for animation

export default function App() {
  return (
    <div className="App">
      <h1>7 - Text Animation Component (Fade/Scroll)</h1>

      {/* TextAnimation uses setInterval for animation */}
      {/* This method updates opacity and position at fixed intervals (e.g., every 50ms) */}
      {/* It may not sync perfectly with the browser's refresh rate, causing potential stutter */}
      <TextAnimation />

      {/* TextAnimationOptimized uses requestAnimationFrame for animation */}
      {/* This method synchronizes animations with the browser’s refresh rate (usually 60FPS) */}
      {/* Provides a smoother and more efficient animation experience */}
      <TextAnimationOptimized />
    </div>
  );
}
