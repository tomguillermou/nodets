import config from 'config';

export function main(): void {
  console.log(`Launched: ${config.get('applicationName')}`);
}

main();
