import 'dotenv/config'

console.log('Testing a functionnality')

export function main(): void {
  console.log(`Env: ${process.env.NODE_ENV}`)
}

main()
