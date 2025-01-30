"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";
import { HomeRoute, SocialIcon } from "@/app/page";
import "./navbar.css";



export default function Navbar({colorCollection ,route ,setRoute}) {
  const [isOpen, setIsOpen] = useState(false);

  const goHome = () => {
    if (route != 1) {
      setRoute(1);
      setIsOpen(false);
    }
  };

  const goAbout = () => {
    if (route != 2) {
      setRoute(2);
      setIsOpen(false);
    }
  };

  const goProjects = () => {
    if (route != 3) {
      setRoute(3);
      setIsOpen(false);
    }
  };

  const goContact = () => {
    if (route != 4) {
      setRoute(4);
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`${colorCollection["1"]}  shadow-sm fixed w-full top-0`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-900">
                  Hasitha_San_
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex space-x-4">
                <Button
                  onClick={goHome}
                  className="text-gray-700 shadow-none hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Button>
                <Button
                  onClick={goAbout}
                  className="text-gray-700 shadow-none hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Button>
                <Button
                  onClick={goProjects}
                  className="text-gray-700 shadow-none hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Button>
                <Button
                  onClick={goContact}
                  className="text-gray-700 shadow-none hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Button>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex items-center space-x-4">
                <SocialIcon
                  Icon={FaGithub}
                  href="https://github.com/yourusername"
                />
                <SocialIcon
                  Icon={FaLinkedin}
                  href="https://linkedin.com/in/yourusername"
                />
                <SocialIcon
                  Icon={FaTwitter}
                  href="https://twitter.com/yourusername"
                />
              </div>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button
              onClick={goHome}
              className="text-gray-700 shadow-none hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Button>
            <Button
              onClick={goAbout}
              className="text-gray-700 shadow-none hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Button>
            <Button
              onClick={goProjects}
              className="text-gray-700 shadow-none hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </Button>
            <Button
              onClick={goContact}
              className="text-gray-700 shadow-none hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Button>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <SocialIcon
                Icon={FaGithub}
                href="https://github.com/yourusername"
              />
              <SocialIcon
                Icon={FaLinkedin}
                href="https://linkedin.com/in/yourusername"
              />
              <SocialIcon
                Icon={FaTwitter}
                href="https://twitter.com/yourusername"
              />
            </div>
          </div>
        </div>
      </nav>
      <HomeRoute route={route} setRoute={setRoute} />
    </>
  );
}
