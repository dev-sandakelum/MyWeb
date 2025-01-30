"use client"
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Homepage from "@/components/homePage/Homepage";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import { useState } from "react";

const colorCollection = {
  '1': 'bg-[#F8F8FF] text-[#070F2B]',
  '2': 'bg-green-500 text-white',
  '3': 'bg-yellow-500 text-white',
  '4': 'bg-red-500 text-white',

  'text0': '#535C91',
  'time': 'text-gray-400',

  'icon0' : 'text-gray-400 hover:text-[#535C91]'
}
export const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${colorCollection['icon0']} socialIcon`}
  >
    <Icon className="h-5 w-5" />
  </a>
);


export default function Home() {
  
  
  const [route, setRoute] = useState(1);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar route={route} setRoute={setRoute}  colorCollection={colorCollection}/>
    </div>
  )
}

export function HomeRoute({route ,setRoute}) {
  return (
    <div className="min-h-screen bg-gray-100 py-20 block overflow-hidden">
      {route == 1 && <Homepage colorCollection={colorCollection} setRoute={setRoute}/>}
      {route == 2 && <About/>}
      {route == 3 && <Projects/>}
      {route == 4 && <Contact/>}
      
      
    </div>
  )
}


