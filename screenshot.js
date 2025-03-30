// screenshot.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

async function takeHomeScreenshot() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a standard desktop size
  await page.setViewport({ width: 1280, height: 800 });
  
  try {
    console.log('Navigating to homepage...');
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
    
    console.log('Taking screenshot...');
    await page.screenshot({ 
      path: path.join(screenshotsDir, 'homepage.png'),
      fullPage: false
    });
    
    console.log('Screenshot saved to ./screenshots/homepage.png');
  } catch (error) {
    console.error('Error taking screenshot:', error);
  } finally {
    await browser.close();
  }
}

takeHomeScreenshot();
