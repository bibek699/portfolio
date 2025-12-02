import React from 'react'

export default function Project() {
  return (
 <section id="project" className="bg-green-300 py-16 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Projects</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


        <div className="bg-green-200 rounded-lg shadow-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
          <p className="text-gray-600 mb-4">
            A web app that helps users track tasks and stay productive. Built with React and Firebase.
          </p>
          <a href="g.html" target="-"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-red-700 active:bg-zinc-400">
            View Project
          </a>
        </div>


        <div className="bg-green-200 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 2</h3>
          <p className="text-gray-600 mb-4">
            A real-time chat app using Node.js, Express, and Socket.io. Features private rooms and emoji support.
          </p>
          <a href="h.html" target="_"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-red-700 active:bg-zinc-400 transition">
            View Project
          </a>
        </div>


        <div  className="bg-green-200 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h3>
          <p  className="text-gray-600 mb-4">
            A portfolio generator tool built with Vue and Tailwind CSS that creates fast, mobile-first resumes.
          </p>
          <a href="c.html" target="_"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-red-700 active:bg-zinc-400 transition">
            View Project
          </a>
        </div>

      </div>
    </div>
  </section>

  )
}
