import React from 'react'
import Card from './Card'
import myPrj1 from '../assets/prj2.png'
import myPrj2 from '../assets/calculator.png'
import myPrj3 from '../assets/movie-mania.png'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom'


function Page() {

  return (
    <div className='h-full md:h-screen w-full bg-[#393333]'>
      <div className='relative h-20'>
        <Link to={'/'} > <div className='absolute text-[#ffad00] top-1 w-10' ><MdOutlineArrowBackIos size={40} /></div></Link>
        <p className=' top left-1/2 text-5xl text-center align-middle font-medium text-[#ffad00]' >Projects</p>

      </div>
      <div className='flex flex-col md:flex-row mt-5'>
        <Card title="Task-Board" desc="A React app for practicing package integration with a visually appealing to-do list. It offers interactive features for users to manage tasks and experiment with various functionalities." src={myPrj1} />
        <Card title="Calculator" desc="A custom calculator app built with React, CSS, and HTML. Manual coding of all logic enhanced my React skills and posed a one-day challenge. Feedback on UI improvements is welcome." src={myPrj2} />
        <Card title="Movie mania" desc="A movie-themed web app built with React.js and Tailwind CSS, deployed on Vercel. Showcases front-end development skills and responsive design. Feedback and suggestions are welcome." src={myPrj3} />
        {/* <Card title="hello" desc="Prj002" src={myPrj1} /> */}

      </div>
    </div>
  )
}

export default Page
