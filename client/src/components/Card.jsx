import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { GoEyeClosed } from "react-icons/go";
import { motion } from "framer-motion"

function Card({data}) {
  return (
    <motion.div drag whileDrag={{scale:1.2}} dragElastic={0.2}  
    className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
       <FaRegFileAlt/>
      <p className='text-sm leading-right mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0  w-full  left-0'>
        <div className='flex items-center justify-between px-8 py-4 mb-1'>
           <h5>{data.filesize}</h5> 
           <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <GoEyeClosed/>:<LuDownload size=".8em" color='#000'/>}
           </span>
        </div>
{
      data.tag.isOpen ? (   <div className={`tag w-full bg-green-600 py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green"} flex items-center justify-center`}>
        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
         </div>):null
}
      </div>
    </motion.div>
  );
}

export default Card
