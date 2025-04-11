import { Link } from "@heroui/link";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import Image from "next/image";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  return (
    <Navbar className="w-full flex items-center mt-0 bg-[#1B1B1B]/10 z-10 opacity-60 navbar">
      <NavbarContent className="">
     <div className="flex gap-4 flex-1">
       <NavbarBrand>
       <div className="flex gap-4">
       <Link className="ml-4 text-white">Home</Link>
       <Link className="ml-4 text-white">E-learning</Link>
       </div>
       </NavbarBrand>
      
     </div>
     <div className="flex gap-2">
     <Link className="mr-4"> 
     <Image
             src="/ww-eb.png"
             alt="Background"
             width={15}
             height={15}
             className=""
      />
      </Link>
     <Link className="mr-4">
     <Image
             src="/ig-eb.png"
             alt="Background"
             width={15}
             height={15}
             className=""
      />
      </Link>
     </div>
   </NavbarContent>
    </Navbar>
  );
}





// import {
//   Navbar as HeroUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@heroui/navbar";
// import { Link } from "@heroui/link";
// import NextLink from "next/link";
// import { siteConfig } from "@/config/site";
// import {
//   Logo,
// } from "@/components/icons";

// export const Navbar = () => {


//   return (
//     <HeroUINavbar
//       maxWidth="xl"
//       position="sticky"
//       className="w-full flex items-center mt-0 mx-0 !bg-transparent" // Fondo transparente y sin márgenes
//     >
//       <NavbarContent className="w-full flex items-center mt-9 bg-[#1B1B1B]/70 rounded-lg">
//     <div className="flex gap-4 flex-1">
//       <NavbarBrand>
//       <div className="flex gap-4">
//       <Link className="ml-4">Home</Link>
//       <Link className="ml-4">Contacto</Link>
//       </div>
//       </NavbarBrand>
      
//     </div>
//     <div className="flex gap-4">
//     <Link className="mr-4">Home</Link>
//     <Link className="mr-4">Home</Link>
//     </div>
//   </NavbarContent>
//     </HeroUINavbar>
    
//   );
// };
