import React from 'react'

export default function About() {
  return (
     <section id="about"
    className="bg-green-300 bg-linear-to-r  h-auto bg-[url('https://images.unsplash.com/photo-1617957796155-72d8717ac882?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZWVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000')]">
    <div className="max-w-3xl mx-auto text-center ">

      <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Hi! I'm a passionate software developer with a love for building intuitive and scalable web applications.
        I specialize in modern JavaScript frameworks like <span class="font-semibold">React</span> and
        <span className="font-semibold">Vue.js</span>, and I enjoy working with back-end technologies like
        <span className="font-semibold">Node.js</span> and <span class="font-semibold">Express</span>.
        <br /><br />
        When I'm not coding, you’ll find me exploring new technologies, contributing to open-source, or writing dev
        blogs.
        I'm always eager to take on new challenges and collaborate on meaningful projects.
      </p>
    </div>
    
  <br />
  <br /><br /><br />

    
    <div   className="text-3xl flex items-center flex-col text-center">
      <div className="m-5 text-red-800">Skills</div>

      <div className="size-20 flex items-center justify-center bg-zinc-400 px-15 m-1 h-8">HTML5</div>

      <div className="size-20 flex items-center justify-center bg-zinc-400 px-15 m-1 h-8">CSS3</div>

      <div className="size-20 flex uppercase items-center justify-center bg-zinc-400 m-1 px-15 h-8">c/c++</div>

      <div className="size-20 flex items-center justify-center bg-zinc-400 px-15 m-1 h-8">DSA</div>

      <div className="size-20 flex items-center justify-center bg-zinc-400 px-15 m-1 h-8">GIT</div>

    </div>

   
  </section>
  );
}
