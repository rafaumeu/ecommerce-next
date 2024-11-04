export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return <h1>Hello world</h1>   
}
