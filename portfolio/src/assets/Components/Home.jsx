import React from 'react'

export default function Home() {
  return (
   <section id="home" className=" h-screen bg-green-100 w-full mt-18 columns-2 gap-0 space-y-10">

<div class="p-5 break-after-column  h-screen min-w-30 bg-green-600 ">
    <br />
    <br />
    <br />
    <br />
      <h1 className="text-[1.5rem] font-bold text-zinc-800 mb-1  ">Bibek Kandel</h1>


      <h2 className="text-xl text-sky-500  font-medium mb-4">Software Developer</h2>

      <p className=" mb-4 ">
        I build clean, efficient, and scalable software. Passionate about code, tech, and solving real-world problems.
      </p>


      <a href="#project"
        className="  inline-block bg-indigo-400 text-grey px-4 py-2 rounded hover:bg-blue-800 active:bg-zinc-500">
        View Projects
      </a>
</div>

    

      <div className="flex justify-between  bg-green-600 h-screen gap-0 p-10 mt-20">
       
        <img src="WhatsApp Image 2025-10-11 at 19.22.22_3cb0baa7.jpg" alt=""
          className="w-60 hover:scale-120 h-60 rounded-full  border-3 border-green-400 shadow-xl  object-cover"></img>
      </div>
    </section>
 
  );
}

