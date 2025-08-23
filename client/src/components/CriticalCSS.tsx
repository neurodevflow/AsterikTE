export const CriticalCSS = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
      /* Critical Above-the-Fold Styles */
      :root {
        --navy-blue: hsl(206, 84%, 17%);
        --white: hsl(0, 0%, 100%);
        --soft-beige: hsl(45, 38%, 96%);
        --warm-orange: hsl(25, 86%, 58%);
        --teal-green: hsl(142, 76%, 45%);
        --light-grey: hsl(0, 0%, 95%);
        --charcoal: hsl(220, 13%, 18%);
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      body {
        font-family: 'Open Sans', system-ui, sans-serif;
        font-display: swap;
        line-height: 1.6;
        color: var(--charcoal);
        background: var(--white);
      }
      
      /* Critical Header Styles */
      .sticky-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        background: var(--white);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        height: 64px;
      }
      
      /* Critical Navigation */
      .nav-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      }
      
      /* Critical Logo */
      .logo-container img {
        height: 36px;
        width: auto;
        max-width: 150px;
      }
      
      /* Critical Hero Section */
      .hero-section {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--navy-blue) 0%, var(--charcoal) 100%);
        padding-top: 64px;
      }
      
      .hero-content {
        text-align: center;
        color: var(--white);
        z-index: 10;
        position: relative;
      }
      
      .hero-title {
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 700;
        margin-bottom: 1rem;
        font-family: 'Montserrat', system-ui, sans-serif;
      }
      
      .hero-subtitle {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        margin-bottom: 2rem;
        opacity: 0.9;
      }
      
      /* Critical Button */
      .cta-button {
        display: inline-block;
        background: var(--warm-orange);
        color: var(--white);
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
      }
      
      .cta-button:hover {
        background: var(--teal-green);
        transform: translateY(-2px);
      }
      
      /* Hide non-critical content initially */
      .defer-load {
        opacity: 0;
        animation: fadeIn 0.3s ease-in-out 0.2s forwards;
      }
      
      @keyframes fadeIn {
        to { opacity: 1; }
      }
      
      /* Responsive critical styles */
      @media (max-width: 768px) {
        .hero-section {
          min-height: 80vh;
          padding: 80px 16px 32px;
        }
        
        .hero-title {
          font-size: 2.5rem;
        }
        
        .hero-subtitle {
          font-size: 1.1rem;
        }
      }
    `
  }} />
);