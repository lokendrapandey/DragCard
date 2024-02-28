import React from 'react';
import { FaFileInvoice } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import vCardsJS from "vcards-js";

const Card = ({ data, reference }) => {
  const CreateVCard = () => {
    //create a new vCard
    var vCard = vCardsJS();

    //set properties
    vCard.firstName = "Eric";
    vCard.middleName = "J";
    vCard.lastName = "Nesser";
    vCard.organization = "ACME Corporation";
    vCard.workPhone = "312-555-1212";
    vCard.birthday = new Date(1985, 0, 1);
    vCard.title = "Software Developer";
    vCard.url = "https://github.com/enesser";
    vCard.note = "Notes on Eric";

    //get as formatted string
    return vCard.getFormattedString();
  };

  const downloadTxtFile = vcfText => {
    const element = document.createElement("a");
    const file = new Blob([vcfText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.vcf";
    document.body.appendChild(element);
    element.click();
  };
  
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.1} className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
      <FaFileInvoice />
      <p className='text-sm leading-tight mt-5 font-semibold'> {data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff' />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <button onClick={() => downloadTxtFile(CreateVCard())}>add</button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;





// import React from 'react'
// import { FaFileInvoice } from "react-icons/fa";
// import { LuDownload } from "react-icons/lu";
// import { IoClose } from "react-icons/io5";
// import { motion } from "framer-motion";
// import vCardsJS from "vcards-js"; 




// const Card = ({data,reference}) => {
//   const downloadTxtFile = vcfText => {
//     const element = document.createElement("a");
//     const file = new Blob([vcfText], { type: "text/plain;charset=utf-8" });
//     element.href = URL.createObjectURL(file);
//     element.download = "myFile.vcf";
//     document.body.appendChild(element);
//     element.click();
  


//     const CreateVCard = () => {
//       var vCardsJS = require("vcards-js");
  
//       //create a new vCard
//       var vCard = vCardsJS();
  
//       //set properties
//       vCard.firstName = "Eric";
//       vCard.middleName = "J";
//       vCard.lastName = "Nesser";
//       vCard.organization = "ACME Corporation";
//       vCard.workPhone = "312-555-1212";
//       vCard.birthday = new Date(1985, 0, 1);
//       vCard.title = "Software Developer";
//       vCard.url = "https://github.com/enesser";
//       vCard.note = "Notes on Eric";
  
//       //save to file
//       // vCard.saveToFile("./eric-nesser.vcf");
  
//       //get as formatted string
//       // console.log(vCard.getFormattedString());
//       return vCard.getFormattedString();
//     };

  
//   return (
//     <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'> 
//         <FaFileInvoice />
//         <p className='text-sm leading-tight mt-5 font-semibold'> {data.desc}</p>
//         <div className='footer absolute bottom-0  w-full  left-0 '>
//             <div className='flex items-center justify-between px-8 py-3 mb-3'> 
//               <h5>{data.filesize}</h5>
//               <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
//                   {data.close ? <IoClose/> : <LuDownload size=".7em" color='#fff'/> }
//               </span>
//             </div>
//             {
//               data.tag.isOpen && (
//             <div className={`tag w-full py-4  ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}> 
//             <button onClick={() => downloadTxtFile(CreateVCard())}>add</button>
//             </div>
//               ) }
//         </div>
//     </motion.div>
//   )
// }
// };

// export default Card
