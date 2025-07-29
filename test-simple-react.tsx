import { createRoot } from "react-dom/client";

// Minimal React test without complex imports
function SimpleApp() {
  return (
    <div>
      <h1>Simple React Test Working!</h1>
      <p>If you see this, React is rendering correctly.</p>
      <div style={{ background: 'lightblue', padding: '20px', margin: '20px' }}>
        <h2>Focused on What Matters Most</h2>
        <p>This is a test to see if React content renders properly.</p>
      </div>
    </div>
  );
}

console.log("Starting simple React test...");
const root = document.getElementById("root");
if (root) {
  console.log("Root element found, rendering...");
  createRoot(root).render(<SimpleApp />);
} else {
  console.error("Root element not found!");
}