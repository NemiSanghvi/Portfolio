import React from 'react'
import { motion } from "framer-motion"



function Card({ title, desc, src }) {
  return (

    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='relative flex-shrink-0 m-10 p-2 h-72 w-60 rounded-[20px] overflow-hidden bg-zinc-950/40 text-blue-200'>
      <div >
        <img className='h-36 w-60 rounded object-fill bg-transparent ' src={src} ></img>
      </div>
      <div className='absolute h-20 top-40 w-52 '>
        <h4 className='text-lg text-center mb-3 mt-2' >
          {title}
        </h4>
        <p className='text-sm text-center'>{desc}</p>

      </div>
    </motion.div>

  )
}

export default Card
