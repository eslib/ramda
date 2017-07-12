import { assign } from 'eslib'
import * as R from 'ramda'

const SOURCE = '<%= name %>'
const VERSION = '<%= version %>'

const extensions = new Map<any, string[]>()

extensions.set(Array.prototype, ['adjust', 'append'])
extensions.set(Date, [])
extensions.set(Function.prototype, [])
extensions.set(Math, [])
extensions.set(Number, [])
extensions.set(Object.prototype, [])
extensions.set(String.prototype, [])

extensions.forEach((methods, Type) =>
  methods.forEach(method =>
    assign(
      Type,
      { [method]: withThis((R as any)[method]) },
      SOURCE,
      VERSION
    )
  )
)

function withThis(fn: (...a: any[]) => any) {
  return function(this: any, ...args: any[]) {
    return fn(...[...args, this])
  }
}
