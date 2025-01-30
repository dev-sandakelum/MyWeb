import Image from "next/image"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function About() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-[200px] w-full md:h-full md:w-auto object-cover "
            src="/p.jpg"
            alt="Your Name"
            width={192}
            height={192}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">About Me</div>
          <h2 className="mt-2 text-2xl leading-8 font-bold text-gray-900">Hasitha Sandakelum</h2>
          <p className="mt-2 text-gray-600">
            I'm a passionate web developer with expertise in React, Next.js, and TypeScript. I love creating
            user-friendly and performant web applications that solve real-world problems.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((skill) => (
                <span key={skill} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

