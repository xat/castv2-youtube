var util              = require('util');
var castv2Cli         = require('castv2-client');
var Application       = castv2Cli.Application;
var MediaController   = castv2Cli.MediaController;
var YoutubeController = require('./YoutubeController');

function Youtube(client, session) {
  Application.apply(this, arguments);

  this.media = this.createController(MediaController);
  this.youtube = this.createController(YoutubeController);

  this.media.on('status', onstatus);

  var self = this;

  function onstatus(status) {
    self.emit('status', status);
  }

}

Youtube.APP_ID = '233637DE';

util.inherits(Youtube, Application);

Youtube.prototype.getStatus = function(callback) {
  this.media.getStatus.apply(this.media, arguments);
};

Youtube.prototype.load = function(videoId) {
  this.youtube.load.apply(this.youtube, arguments);
};

Youtube.prototype.play = function(callback) {
  this.media.play.apply(this.media, arguments);
};

Youtube.prototype.pause = function(callback) {
  this.media.pause.apply(this.media, arguments);
};

Youtube.prototype.stop = function(callback) {
  this.media.stop.apply(this.media, arguments);
};

Youtube.prototype.seek = function(currentTime, callback) {
  this.media.seek.apply(this.media, arguments);
};

module.exports = Youtube;
