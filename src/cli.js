import promtly  from 'promptly';

export default async () => {
  const name = await promtly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
}
