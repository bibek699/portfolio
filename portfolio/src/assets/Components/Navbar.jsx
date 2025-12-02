

export default function Navbar() {
  return (
        
         <div class="bg-green-700 shadow-xl fixed top-0 left-0 right-0 h-18 z-50">
    <div class="w-full mx-auto px-4 ">
      <div class="flex justify-between items-center h-15">

        <div class="flex items-center font-bold text-xl text-blue-600 dark:text-sky-400">
          Bibek's portfolio
        </div>

           <input 
  type="checkbox" 
  id="hamburger" 
  class="hidden peer"
/>

 <label
          htmlFor="hamburger"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span className="block bg-white h-0.5 w-6 transition-all peer-checked:rotate-45 peer-checked:translate-y-1.5"></span>
          <span className="block bg-white h-0.5 w-6 transition-all peer-checked:opacity-0"></span>
          <span className="block bg-white h-0.5 w-6 transition-all peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></span>
        </label>
    
      
   


        <ul
          className=" text-2xl cursor-pointer flex items-center text-white gap-7 md:flex space-x-8 text-[1.2rem] peer-checked:flex peer-checked:flex-col peer-checked:absolute peer-checked:right-0 peer-checked:h-60 peer-checked:w-40  peer-checked:top-18 peer-checked:bg-green-400  peer-checked:py-6 peer-checked:border-b peer-checked:border-l peer-checked: ">
          <li><a className="hover:bg-indigo-400 active:bg-red-700" href="#home">Home</a></li>
          <li><a className="hover:bg-indigo-400 active:bg-red-700" href="#about"> About</a></li>
          <li><a className="hover:bg-indigo-400 active:bg-red-700" href="#project">Project</a></li>
          <li><a className="hover:bg-indigo-400 active:bg-red-700" href="#contact">Contact</a></li>
        </ul>
  </div>
   
        </div>
        </div>



  )}
