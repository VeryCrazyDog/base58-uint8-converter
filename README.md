# base58-uint8-converter
CLI for convertion between Base58 and unsigned 8-bit integer array. Useful for importing
[Solana file system wallet] to [Phantom] wallet and vise versa.

[Solana file system wallet]: https://docs.solana.com/wallet-guide/cli#file-system-wallet
[Phantom]: https://phantom.app/


# Installation
```bash
# Install dependencies
npm ci
# Build the source code
npm run build
```


# Using the CLI
Convert from unsigned 8-bit integer array to Base58.
```bash
# Output: bWDHvqkG54d49Mcwj75Tgim9nKhAytDz4XwUFUk4PhUdQSzUNzywF7SyC82ZYeqKQfR8DwEF6hBUsdqdtS6NhML
node . base58 "[29,193,48,46,114,99,223,196,174,249,211,59,164,191,14,189,203,249,159,60,98,183,221,168,54,207,197,25,126,219,168,210,9,121,151,25,137,132,45,176,242,174,140,19,72,209,167,34,155,1,57,167,36,115,1,129,89,201,238,137,178,207,70,51]"
```

Convert from Base58 to unsigned 8-bit integer array.
```bash
# Output: [29,193,48,46,114,99,223,196,174,249,211,59,164,191,14,189,203,249,159,60,98,183,221,168,54,207,197,25,126,219,168,210,9,121,151,25,137,132,45,176,242,174,140,19,72,209,167,34,155,1,57,167,36,115,1,129,89,201,238,137,178,207,70,51]
node . uint8 bWDHvqkG54d49Mcwj75Tgim9nKhAytDz4XwUFUk4PhUdQSzUNzywF7SyC82ZYeqKQfR8DwEF6hBUsdqdtS6NhML
```
