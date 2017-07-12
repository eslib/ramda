import '../src'
import test from 'ava'

test('append', t => t.deepEqual([1, 2, 3].append(4), [1, 2, 3, 4]))
