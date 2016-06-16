'use strict'

const schools = require('./lib/data/schools.json')
const zips = require('./lib/data/zips.json')
const exceptions = require('./lib/data/exceptions.json')
const wp = require('./lib/data/waypoints.json')

module.exports = function (item) {
  var waypoints = []

  if (zips.indexOf(item.POSTN) > -1 && schools.indexOf(item.skole) > -1) {
    if (exceptions.indexOf(item.ADR.toLowerCase()) === -1) {
      waypoints = wp
    }
  }

  return waypoints
}
