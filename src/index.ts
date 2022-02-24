import { program } from 'commander'
import { decode } from 'bs58'

import { description } from '../package.json'

// Private classes
class CommandError extends Error {}

function base58ToUInt8Array (value: string): void {
  const data = decode(value)
  console.log(JSON.stringify(Array.from(data)))
}

function uInt8ArrayToBase58 (value: string): void {
  throw new CommandError('Not implemented')
}

// Main
program.description(description)
program
  .command('uint8')
  .description('Convert Base58 to unsigned 8-bit integer array')
  .argument('<VALUE>', 'Base58 encoded value')
  .action(base58ToUInt8Array)
program
  .command('base58')
  .description('Convert unsigned 8-bit integer array to Base58')
  .argument('<VALUE>', 'Unsigned 8-bit integer array in JSON format')
  .action(uInt8ArrayToBase58)

program.parseAsync().catch(error => {
  if (!(error instanceof CommandError)) { throw error }
  console.error('Error:', error.message)
})
