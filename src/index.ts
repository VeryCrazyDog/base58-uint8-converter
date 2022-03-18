import { resolve as pathResolve } from 'node:path'
import { readFileSync } from 'node:fs'

import { program } from 'commander'
import { decode, encode } from 'bs58'

// Private classes
class CommandError extends Error {}
CommandError.prototype.name = 'CommandError'

// Private functions
function base58ToUInt8ArrayCmd (value: string): void {
  const data = decode(value)
  console.log(JSON.stringify(Array.from(data)))
}

function uInt8ArrayToBase58Cmd (value: string): void {
  let json: any
  try {
    json = JSON.parse(value)
  } catch (error) {
    throw new CommandError('Not a JSON value')
  }
  if (!Array.isArray(json)) {
    throw new CommandError('JSON is not an array')
  }
  if (!json.every(v => typeof v === 'number' && v >= 0 && v <= 255)) {
    throw new CommandError('Not all values in array are unsigned 8-bit integer')
  }
  const array = Uint8Array.from(json)
  console.log(encode(array))
}

// Main
const { description } = JSON.parse(readFileSync(pathResolve(__dirname, '../package.json'), 'utf-8'))
program.description(description)
program
  .command('uint8')
  .description('Convert Base58 to unsigned 8-bit integer array')
  .argument('<VALUE>', 'Base58 encoded value')
  .action(base58ToUInt8ArrayCmd)
program
  .command('base58')
  .description('Convert unsigned 8-bit integer array to Base58')
  .argument('<VALUE>', 'Unsigned 8-bit integer array in JSON format')
  .action(uInt8ArrayToBase58Cmd)

program.parseAsync().catch(error => {
  if (!(error instanceof CommandError)) { throw error }
  console.error('Error:', error.message)
})
