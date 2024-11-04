export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <h1>Search</h1>;
}