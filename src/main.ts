import 'dotenv/config';

export function main(): void {
  console.log(`Env: ${process.env.NODE_ENV}`);
}

main();
