App.info({
  name: 'Random Post',
  author: 'Rajaselvan',
  description: 'A random article generator',
  version: '0.0.1'
});

App.icons({
  'android_ldpi': 'public/img/newspaper.png',
  'android_mdpi': 'public/img/newspaper.png',
  'android_hdpi': 'public/img/newspaper.png',
  'android_xhdpi': 'public/img/newspaper.png'
});



App.accessRule('http://*');
App.accessRule('https://*');
