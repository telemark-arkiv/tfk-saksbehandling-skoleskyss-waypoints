[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-skoleskyss-waypoints.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-skoleskyss-waypoints)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-saksbehandling-skoleskyss-waypoints/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-saksbehandling-skoleskyss-waypoints?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-skoleskyss-saksbehandling-waypoints

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-saksbehandling-skoleskyss-waypoints.svg)](https://greenkeeper.io/)
Returns an array of waypoints for some addresses

## Usage

```
'use strict'

const getWaypoints = require('tfk-saksbehandling-skoleskyss-waypoints')
const nope = {
  "skole": "3730",
  "ADR": "ELSETVEGEN 7",
  "POSTN": "3731"
}
const yep = {
  "skole": "3730",
  "ADR": "ELSETVEGEN 34",
  "POSTN": "3731"
}

console.log(getWaypoints(nope)) //=> []

console.log(getWaypoints(yep)) //=> ["59.1919941,9.5440346","59.1914183,9.5543178"]
```