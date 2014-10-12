## castv2-youtube

castv2-client youtube receiver.

### Sample

```javascript
var Client                = require('castv2-client').Client;
var YoutubeReceiver       = require('./YoutubeReceiver');
var mdns                  = require('mdns');

var browser = mdns.createBrowser(mdns.tcp('googlecast'));

browser.on('serviceUp', function(service) {
  console.log('found device "%s" at %s:%d', service.name, service.addresses[0], service.port);
  ondeviceup(service.addresses[0]);
  browser.stop();
});

browser.start();

function ondeviceup(host) {

  var client = new Client();
  client.connect(host, function() {
    console.log('connected, launching app ...');
    client.launch(YoutubeReceiver, function(err, player) {
      player.load('69V__a49xtw');
    });
  });

  client.on('error', function(err) {
    console.log('Error: %s', err.message);
    client.close();
  });

}
```

### Installation

`npm install castv2-youtube`

## License
MIT
