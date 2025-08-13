/**
 * Component to inline critical CSS to improve First Contentful Paint
 */
export default function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical path CSS for above-the-fold content */
          .hero-section {
            background: linear-gradient(135deg, hsl(206, 84%, 17%) 0%, hsl(220, 13%, 18%) 50%, hsl(206, 84%, 17%) 100%);
            min-height: 100vh;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          
          .hero-bg-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              rgba(29, 29, 29, 0.7) 0%,
              rgba(29, 29, 29, 0.5) 50%,
              rgba(29, 29, 29, 0.7) 100%
            );
            z-index: 10;
          }
          
          /* Navigation critical styles */
          .nav-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          
          /* Button critical styles */
          .btn-primary {
            background: #1e40af;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 0.375rem;
            font-weight: 500;
            transition: all 0.2s ease;
            border: none;
            cursor: pointer;
          }
          
          .btn-primary:hover {
            background: #1d4ed8;
            transform: translateY(-1px);
          }
          
          /* Text critical styles */
          .hero-title {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 700;
            line-height: 1.2;
            color: white;
            text-align: center;
            margin-bottom: 1.5rem;
          }
          
          .hero-subtitle {
            font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            font-size: clamp(1rem, 2.5vw, 1.25rem);
            color: rgba(255, 255, 255, 0.9);
            text-align: center;
            margin-bottom: 2rem;
            max-width: 600px;
          }
          
          /* Performance optimizations */
          img {
            max-width: 100%;
            height: auto;
          }
          
          picture img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          /* Prevent layout shift */
          .aspect-ratio-container {
            position: relative;
            width: 100%;
          }
          
          .aspect-ratio-container::before {
            content: '';
            display: block;
            padding-top: 56.25%; /* 16:9 aspect ratio */
          }
          
          .aspect-ratio-container > * {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        `,
      }}
    />
  );
}