import config from 'config'

function main(): void {
  console.log(`Launched: ${config.get('applicationName')}`)
}

main()
