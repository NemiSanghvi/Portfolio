import React from 'react'
import { motion } from "framer-motion"



function Card({ title, desc, src }) {
  return (

    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='relative flex-shrink-0 m-10 p-2 h-80 w-60 rounded-[20px] overflow-hidden bg-zinc-950/40 text-blue-200'>
      <div >
        <img className='h-36 w-60 rounded object-fill bg-transparent ' src={src} ></img>
      </div>
      <div className='absolute py-0 ml-2 h-20 top-40 w-52 '>
        <h4 className='text-lg text-center mb-2 mt-2' >
          {title}
        </h4>
        <p className='text-xs align-middle ml-1 text-center'>{desc}</p>

      </div>
    </motion.div>

  )
}

export default Card
