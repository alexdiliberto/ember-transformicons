/* jshint node:true */
// var RSVP = require('rsvp');

// For details on each option run `ember help release`
module.exports = {
  local: false,
  remote: 'origin',
  annotation: "Release %@",
  message: "Bumped version to %@",
  manifest: [ 'package.json' ],
  publish: true,
  strategy: 'semver'
  // format: 'YYYY.MM.DD',
  // timezone: 'America/New_York',
  //
  // beforeCommit: function(project, versions) {
  //   return new RSVP.Promise(function(resolve, reject) {
  //     // Do custom things here...
  //   });
  // }
};
