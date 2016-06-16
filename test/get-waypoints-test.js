'use strict'

const tap = require('tap')
const getWaypoints = require('../index')
const wpNoSkole = require('./data/waypoint-no-skole.json')
const wpNoZip = require('./data/waypoint-no-zip.json')
const wpNoStreet = require('./data/waypoint-no-street.json')
const wpYes = require('./data/waypoint-yes.json')
const wp = require('../lib/data/waypoints.json').toString()
const empty = [].toString()

tap.equal(getWaypoints(wpNoSkole).toString(), empty, 'It returns empty if incorrect school')

tap.equal(getWaypoints(wpNoZip).toString(), empty, 'It returns empty if incorrect zip')

tap.equal(getWaypoints(wpNoStreet).toString(), empty, 'It returns empty if incorrect street')

tap.equal(getWaypoints(wpYes).toString(), wp, 'It returns waypoints as expected')
