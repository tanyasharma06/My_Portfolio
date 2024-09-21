import image from '../images/tanya.jpg'
import { motion } from 'framer-motion';
import Navbar from './Navbar'
export default function Hero() {
  return (
    <div>
      <Navbar/>
    
    <section
      id="hero"
      className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                 justify-center items-center align-center mt-40 
                 mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <div>
        <motion.h2
         initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 1, ease: 'easeInOut' }}
  className="text-center text-emerald-500 text-5xl font-bold"
>
  Welcome to my Portfolio Website
</motion.h2>
        </div>
        <h3 className="text-center font-bold animation-slide">
         HI! I am Tanya Sharma,Student of MMMUT.
        </h3>

        <div className="flex flex-column gap-10 mt-5">
          <a href="https://github.com/tanyasharma06" >
          <i class='bx bxl-github text-5xl'></i>
      
          </a>
          <a href="https://www.instagram.com/_tanyasharma8218/">
          <i class='bx bxl-instagram text-5xl'></i>
            </a>
            <a href="https://www.linkedin.com/in/tanya-sharma-6220b6258/">
            <i class='bx bxl-linkedin text-5xl' ></i>
                </a>
            
        </div>
        <div className="mt-4">
 <button className="bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 ">
          Hire Me
        </button>
        </div>
      </div>
      <div className="flex-1">
        <img src=
        {image}

             alt="Hello.svg"
             className="w-[325px] h-[400px]  gap-20px"/>
      </div>

      </section>
    </div>
  );
}

