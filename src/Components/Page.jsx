import React from 'react'
import Card from './Card'
import myPrj1 from '/Users/Nemi/OneDrive/Desktop/Coding/portfolio/src/assets/prj2.png'
import myPrj2 from '/Users/Nemi/OneDrive/Desktop/Coding/portfolio/src/assets/calculator.png'
import myPrj3 from '/Users/Nemi/OneDrive/Desktop/Coding/portfolio/src/assets/movie-mania.png'
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
        <Card title="hello" desc="Prj0" src={myPrj1} />
        <Card title="hello" desc="Prj01" src={myPrj2} />
        <Card title="hello" desc="Prj002" src={myPrj3} />
        {/* <Card title="hello" desc="Prj002" src={myPrj1} /> */}

      </div>
    </div>
  )
}

export default Page
