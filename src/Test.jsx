import React from 'react'
import { motion } from 'framer-motion'

const Test = () => {
  return (
    <div className="course">
      <motion.div className="box" animate={{opacity:0,scale:1,x:200}} transition={{duration:2}}></motion.div>
    </div>
  )
}

export default Test
