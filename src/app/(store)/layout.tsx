import { Header } from '../../components/header';
export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
    <Header />
    {children}
  </>)
}