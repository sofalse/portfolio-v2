export default function PrimaryButton({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (<a href="#" className="font-bold rounded-lg p-2 bg-primary hover:bg-primary/80">{children}</a>)
}
