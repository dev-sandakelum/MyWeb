import Link from "next/link";




export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Link href={'/'} className="p-1">{'<<'}BACK</Link>
      {children}
    </div>
  );
}
