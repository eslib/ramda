<img src="logo.png" alt="ESlib + Ramda" width="450px" />

[![Build Status][build]](https://circleci.com/gh/eslib/ramda) [![npm]](https://www.npmjs.com/package/@eslib/ramda) [![mit]](https://opensource.org/licenses/MIT)

[build]: https://img.shields.io/circleci/project/eslib/ramda.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/@eslib/ramda.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/@eslib/ramda.svg?style=flat-square

> (Ramda + ESlib = <<3) All the Ramda functions available natively

## Installation

```sh
npm install @eslib/ramda --save
```

## Example

```ts
import '@eslib/ramda'

[1, 2, 3, 4]
  .dropWhile(n => n < 3)
  .head()
```

## Tests

```sh
npm test
```

## License

MIT
