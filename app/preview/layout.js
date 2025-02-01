import Link from "next/link";


const colorCollection = {
  1: "bg-[#F8F8FF] text-[#070F2B]",
  2: "bg-green-500 text-white",
  3: "bg-yellow-500 text-white",
  4: "bg-red-500 text-white",

  text0: "#535C91",
  time: "text-gray-400",

  icon0: "text-gray-400 hover:text-[#535C91]",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Link href={'/'}>{'<<'}BACK</Link>
      {children}
    </div>
  );
}
