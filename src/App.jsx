import myImage from './assets/profileimage.jpg';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About';
import Socials from './Components/Socials';
import { Link } from 'react-router-dom';
import resume from './assets/Resume.pdf'

const App = () => {
  return (
    <>
      <div className="h-max md:h-full lg:h-screen w-full bg-[#393333] flex flex-col ">
        <About />
        <Socials />
        <div className="flex flex-col md:flex-row justify-center items-start w-full px-6 md:px-12 lg:px-24 mt-16 md:mt-20 lg:mt-24 space-y-8 md:space-y-0">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl md:text-left lg:text-5xl font-bold text-[#ffad00] animate__animated animate__slideInLeft">
              Step into my Portfolio
            </h2>
            <p className="mt-4 text-lg md:text-xl md:text-left lg:text-2xl text-[#ffae00cf] animate__animated animate__backInRight">
              Hey! You've just stumbled upon my digital playground. A space where I bring my ideas to life and showcase my coding adventures. Dive in and explore my projects, each crafted with a passion for technology and a dash of creativity. Whether you're here to be inspired, learn, or just satisfy your curiosity, I'm glad you stopped by. Feel free to reach out, let's connect, collaborate, or just chat about the exciting world of code!
            </p>
          </div>
          <div className="ml-5 md:ml-56 md:pl-20 md:w-1/2 flex">
            <div className=" h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border-[#504949]/50 border-4 hover:scale-110 transition duration-700 ease-in-out">
              <img src={myImage} alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>


        <div className="flex flex-col md:flex-row md:ml-28 ml-28 justify-center md:justify-start items-center md:items-start w-2/5 mt-16 space-y-4 md:space-y-0 md:space-x-32">
          <a href={resume} download='resume'> <button className="w-40 md:w-48 h-16 bg-[#ffad00] text-2xl text-center border-2 border-[#393333] rounded-md transition duration-200 hover:bg-[#393333] hover:text-yellow-100 hover:underline">
            Resume
          </button></a>
          <Link to={`/projects`}>
            <button className="w-40 md:w-48 h-16 bg-[#ffad00] text-2xl text-center border-2 border-[#393333] rounded-md transition duration-200 hover:bg-[#393333] hover:text-yellow-100 hover:underline">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default App;
