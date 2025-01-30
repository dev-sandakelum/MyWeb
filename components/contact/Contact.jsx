import { useState } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here (e.g., send email, API call, etc.)
    console.log("Form submitted:", { name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className="md:flex">
        <div className="md:flex-1 p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Contact Me</div>
          <h2 className="mt-2 text-2xl leading-8 font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="h-5 w-5 text-gray-400 mr-2" />
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-indigo-500">
                your.email@example.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="h-5 w-5 text-gray-400 mr-2" />
              <a href="tel:+1234567890" className="text-gray-600 hover:text-indigo-500">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-600">Your City, Country</span>
            </div>
          </div>
        </div>
        <div className="md:flex-1 p-8 bg-gray-50">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

