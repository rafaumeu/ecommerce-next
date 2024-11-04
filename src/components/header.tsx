export async function Header() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  
  return <h1>Header</h1>
}