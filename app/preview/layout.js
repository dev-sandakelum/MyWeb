import Link from "next/link";
import "./preview.css";



export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col bg-gray-100 preview" >
      <Link href={'/'} className="p-1">{'<<'}BACK</Link>
      {children}
    </div>
  );
}
