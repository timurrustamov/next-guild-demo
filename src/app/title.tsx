export default async function Title() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <span>I am server</span>;
}
