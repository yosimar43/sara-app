import Image from "next/image";
import Logo from "./imgs/nova pilots.png"
import { FaRegUserCircle } from "react-icons/fa";
import NOVACH from "./imgs/nova champions league.png"


import { useState } from 'react'

const menuItems = [
  { id: 1, text: 'Inicio' },
  { id: 2, text: 'NOVA' },
  { id: 3, text: 'Kids' },
  { id: 4, text: 'Pilots' },
  { id: 5, text: 'Coders' }, { id: 6, text: 'Inscripción' },
]
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  return (
    <div className=" h-screen ">
      <nav className="bg-sky-700 p-4 flex justify-evenly gap-4 items-center">
        <Image src={Logo} alt="Logo" width={200} height={200} />
        <ul className="flex justify-center space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={`
                text-white 
                font-medium 
                text-lg
                py-2 
                px-3 
                transition-all 
                duration-300 
                ease-in-out
                border-b-2 
                border-transparent
                hover:border-yellow-400 
                hover:text-yellow-400 
                hover:text-xl
                ${activeItem === item.id ? 'border-yellow-400 text-yellow-400 text-xl' : ''}
              `}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center h-20 " >

          <FaRegUserCircle height={300} width={300} />
        </div>
      </nav>
      <div className=" flex justify-center items-center h-screen bg-gradient-to-r from-gray-600 from-30 via-gray-400 via-30 to-gray-600 ">
        <Image src={NOVACH} alt="Logo" width={500} height={500} />

      </div>
      <div className="flex flex-col h-screen justify-center items-center  gap-6 bg-sky-700 relative">
        <div className="absolute top-0 left-0 right-0 w-full h-[70%] bg-white rounded-b-full"></div>
      
        <p className="z-10 text-gray-700 text-xl">¿Qué es <span className="text-yellow-400">NOVA</span> Champions League?</p>
        <p className="max-w-screen-md color z-10 text-gray-900  text-lg">
          NOVA Champions League es un torneo de robótica en la que niños y jóvenes se ponen a prueba en retos aleatorios,
           donde el tra-bajo en equipo, el manejo de las emocio-nes, la creatividad, el ingenio y la inventiva, les permiten alcanzar nuevos niveles.
        </p>
        <button className="bg-yellow-600 rounded-lg w-sm">Inscribirme</button>
        hola
      </div>

    </div>
  );
}
