"use client"
import { Link } from "@heroui/link";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import Image from "next/image";
import { motion } from 'framer-motion'



export default function App() {
  return (
    <Navbar className="w-full flex items-center mt-0 bg-[#1B1B1B]/10 z-10 opacity-60 navbar">
      <NavbarContent className="">
     <div className="flex gap-4 flex-1">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      transition={{ duration: 1 }}
      >
       <NavbarBrand>
       <div className="flex gap-4">
       <Link className="ml-4 text-white">Home</Link>
       <Link className="ml-4 text-white">E-learning</Link>
       </div>
       </NavbarBrand>
       </motion.div>
     </div>
     <div className="flex gap-2">
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      transition={{ duration: 1 , delay: 0 }}
      >
     <Link className="mr-4"> 
     <Image
             src="/ww-eb.png"
             alt="Background"
             width={15}
             height={15}
             className=""
      />
      </Link>
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      transition={{ duration: 0.5 , delay: 0.3  }}
      >
     <Link className="mr-4">
     <Image
             src="/ig-eb.png"
             alt="Background"
             width={15}
             height={15}
             className=""
      />
      </Link>
      </motion.div>
      
     </div>
   </NavbarContent>
    </Navbar>
  );
}





