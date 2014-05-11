
var vectors = require('./key-data')

var lengths = [16, 32, 64, 128]
var iterations = [100, 200, 500, 1000]
var crypto = require('crypto')

var pbkdf2s = []
vectors.forEach(function (input) {
  iterations.forEach(function (N) {
    lengths.forEach(function (L) {
      var key = new Buffer(input.key, 'hex')
      var data = new Buffer(input.data, 'hex')
      pbkdf2s.push({
        key       : input.key,
        data      : input.data,
        iterations: N,
        length    : L,
        sha1      : crypto.pbkdf2Sync(key, data, N, L).toString('hex')
      })
    })
  })
})

console.log(JSON.stringify(pbkdf2s, null, 2))
