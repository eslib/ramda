#!/usr/bin/env node

const { template } = require('lodash')
const { readFileSync, writeFileSync } = require('fs')
const pkg = require('../package.json')

const { name, version } = pkg
const index = readFileSync(__dirname + '/../dist/src/index.js', 'utf8')
const result = template(index)(({ name, version }))

writeFileSync(__dirname + '/../dist/src/index.js', result, 'utf8')
