import React, { useState,useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion"


const Forground = () => {
  const data = [
    { desc: "lokendra .",
      filesize: "9mb", 
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green", },
     },
    { desc: " shivam pandey indore .",
      filesize: "9mb", 
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue", },
     },
    { desc: "aman .",
      filesize: "9mb", 
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green", },
     }
  ];


  const ref = useRef(null);
  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {/* <Card /> */}
        {
          data.map((item,index)=>(
            <Card data={item} reference={ref}/>
          ))
        }
      </div>
    </>
  )
}

export default Forground
