# adonis-hashids

[![npm version](https://badge.fury.io/js/adonis-hashids.svg)](https://badge.fury.io/js/adonis-hashids)
[![npm](https://img.shields.io/npm/dt/adonis-hashids.svg)](https://www.npmjs.com/package/adonis-hashids)
[![Build Status](https://travis-ci.org/carlsonorozco/adonis-hashids.svg?branch=master)](https://travis-ci.org/carlsonorozco/adonis-hashids)
[![dependencies Status](https://david-dm.org/carlsonorozco/adonis-hashids/status.svg)](https://david-dm.org/carlsonorozco/adonis-hashids)
[![devDependencies Status](https://david-dm.org/carlsonorozco/adonis-hashids/dev-status.svg)](https://david-dm.org/carlsonorozco/adonis-hashids?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Hashids Provider for AdonisJs framework.

## Installation

In order to use adonis-hashids

```
npm install adonis-hashids --save
```

Also, for registering commands.

##### bootstrap/app.js
```javascript
const aceProviders = [
  ...,
  'adonis-hashids/providers/CommandsProvider'
]

const commands = [
  ...,
  'Adonis/Commands/Hashids:Config'
]
```

Also, it is a good practice to setup an alias to avoid typing the complete namespace.

##### bootstrap/app.js
```javascript
const aliases = {
  ...,
  Hashids: 'Adonis/Addons/Hashids'
}
```

Then, for generating a config file.
```bash
./ace hashids:config
```

## Configuration

AdonisHashids generate YouTube-like ids from numbers. Use Hashids when you do not want to expose your database ids to the user. The hashids configuration is located at `config/hashids.js`. In this file you may specify which hashids connection you would like used by default throughout your application.

The hashids configuration file also contains various other options, which are documented within the file so make sure to read over these options. By defaault AdonisHashids is configured to use the `default` connection.

## Usage

### Using default connection

```javascript
// Initialize
const Hashids = use('Hashids')

Hashids.encode(1)
// OY

Hashids.decode('OY');
// [ 1 ]
```

### Combination of ids

```javascript
// Initialize
const Hashids = use('Hashids')

Hashids.encode(1, 2, 3)
// or Array parameters
Hashids.encode([1, 2, 3])
// will ouput wzs9cr

Hashids.decode('wzs9cr');
// [ 1, 2, 3 ]
```

### Encode hex

```javascript
// Initialize
const Hashids = use('Hashids')

Hashids.encodeHex(1, 2, 3)
// or Array parameters
Hashids.encode('507f1f77bcf86cd799439011')
// Nrao6rxKbziryRrXR1zD

Hashids.decodeHex('Nrao6rxKbziryRrXR1zD');
// 507f1f77bcf86cd799439011
```

### Using other connection

```javascript
// Initialize
const Hashids = use('Hashids')

Hashids.connection('alternative').encode(1)
// OY

Hashids.connection('alternative').decode('OY');
// [ 1 ]
```

## Changelog

[CHANGELOG](CHANGELOG.md)

## Credits

Thanks to the community of [AdonisJs](http://www.adonisjs.com/).

## Copyright and License

Copyright (c) 2016 [Carlson Orozco](http://carlsonorozco.com/), [MIT](LICENSE.md) License