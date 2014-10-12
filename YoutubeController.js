var util                      = require('util');
var castv2Cli                 = require('castv2-client');
var RequestResponseController = castv2Cli.RequestResponseController;

function YoutubeController(client, sourceId, destinationId) {
  RequestResponseController.call(this, client, sourceId, destinationId, 'urn:x-cast:com.google.youtube.mdx');
  this.once('close', onclose);
  var self = this;
  function onclose() {
    self.stop();
  }
}

util.inherits(YoutubeController, RequestResponseController);

YoutubeController.prototype.load = function(videoId) {
  // TODO: Implement Callback

  var data = {
    type: 'flingVideo',
    data: {
      currentTime: 0,
      videoId: videoId
    }
  };

  this.request(data);
};

module.exports = YoutubeController;
