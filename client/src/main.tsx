import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("Main.tsx loading...");
console.log("Root element:", document.getElementById("root"));

try {
  createRoot(document.getElementById("root")!).render(<App />);
  console.log("React app rendered successfully");
} catch (error) {
  console.error("Error rendering React app:", error);
  document.body.innerHTML = `<div style="background: red; color: white; padding: 20px;">React Error: ${error}</div>`;
}
