import {parse} from '../src/main'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

test('parse .env.test', async () => {
  const files = '.env.test\n.env.dev.*'
  expect(await parse(files)).toEqual({
    foo: 'FOO',
    Bar: 'Bar',
    bAZ: 'bAZ',
    Answer: '42',
    Hello: 'World'
  })
})

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['FILES'] = '.env.test\n.env.dev.*'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'dist', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
