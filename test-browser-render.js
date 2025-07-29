// Test to simulate browser rendering behavior
const puppeteer = require('puppeteer');

(async () => {
  console.log('Testing browser rendering...');
  
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Capture console logs
    page.on('console', msg => {
      console.log('BROWSER LOG:', msg.text());
    });
    
    // Capture errors
    page.on('pageerror', err => {
      console.log('BROWSER ERROR:', err.message);
    });
    
    // Navigate to localhost
    await page.goto('http://localhost:5000', { waitUntil: 'networkidle0', timeout: 10000 });
    
    // Wait for React to potentially render
    await page.waitForTimeout(3000);
    
    // Check if content exists
    const content = await page.content();
    const bodyText = await page.evaluate(() => document.body.textContent);
    
    console.log('Page title:', await page.title());
    console.log('Body text contains "Focused on What Matters Most":', bodyText.includes('Focused on What Matters Most'));
    console.log('Body text length:', bodyText.length);
    
    if (bodyText.includes('Focused on What Matters Most')) {
      console.log('✅ SUCCESS: React content rendered correctly');
    } else {
      console.log('❌ FAILURE: React content not rendered');
      console.log('First 500 chars of body:', bodyText.substring(0, 500));
    }
    
    await browser.close();
  } catch (error) {
    console.error('Browser test failed:', error.message);
  }
})();