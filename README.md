# hash-test-vectors

The nist test vectors expanded to cover every hash function supported by node.js,
output is saved in a json file, so that it is possible to run tests in the browser.

NIST provides test vectors for sha and md5, and this module takes
that set and outputs a json file containing the input (in base 64)
plus all output of every hash function that node.js supports.

This makes it easy to test javascript hash functions, with fairly roboust coverage.

I took the original test vectors at http://www.nsrl.nist.gov/testdata/

## example

``` js
var vectors = require('hash-test-vectors')
var tape = require('tape')
var MySha1 = require('./my-sha1-implementation')

vectors.forEach(function (v, i) {

  tape('my-sha1 against test vector ' + i, function (t) {
    //test in bash64 encoding + as a buffer
    t.equal(new MySha1().update(v.input, 'base64').digest('hex'), v.sha1)
    t.equal(new MySha1().update(new Buffer(v.input, 'base64')).digest('hex'), v.sha1)
    t.end()
  })
})

```


## License

MIT
