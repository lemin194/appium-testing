const {remote} = require('webdriverio');

async function main () {
  const caps = {
  "platformName": "Android",
  "appium:platformVersion": "12",
  "appium:deviceName": "Pixel 6 API 31",
  "appium:automationName": "UiAutomator2",
  "appium:app": "/media/minhduck/SSD1/Documents/projects/appium-testing/sample_apks/HelloGappium-debug.apk",
  "appium:autoGrantPermissions": true,
  "appium:autoAcceptAlerts": true,
  "appium:fullReset": true,
  "appium:ensureWebviewsHavePages": true,
  "appium:nativeWebScreenshot": true,
  "appium:newCommandTimeout": 3600,
  "appium:connectHardwareKeyboard": true
}
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/wd/hub",
    capabilities: caps
  });



  async function runTest() {
    try {
      const okBtn = await driver.$('//android.widget.Button[@resource-id="android:id/button1"]');
      await okBtn.click();
      const searchBar = await driver.$('//android.widget.EditText')
      await searchBar.click();
      driver.keys('James'.split(''))

      const profileBtn = await driver.$('//android.widget.ListView/android.view.View[1]')
      await profileBtn.click();
    }  catch (e) {
      console.log(e)
    } finally {
      await driver.pause(1000);
      await driver.deleteSession();
    }
  }


  runTest().catch(console.error);
}

main().catch(console.log);