sample_apps = require('sample-apps');
const fs = require('fs'); const path = require('path');

apps = sample_apps.list();

apk_dir = path.join(__dirname, 'sample_apks')
console.log(apk_dir)
for (let i = 0; i < apps.length; ++i) {
  let app = apps[i];
  let url = sample_apps(app);
  console.log('app: %s', app);
  fs.copyFile(url, path.join(apk_dir, path.basename(url)),(err) => {
    if (err) {
        console.log("Error Found:", err);
    }
    else {
        console.log("Ok!");
    }
});
}