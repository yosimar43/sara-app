import Image from "next/image";
import { Button } from "@/components/ui/button"
import Logo from "./imgs/nova pilots.png"
import { FaRegUserCircle } from "react-icons/fa";
import NOVACH from "./imgs/nova champions league.png"
import NIÑO from "./imgs/children-playing-with-lego-playing-room.jpg"
import lego from "./imgs/cubos.png"
import ADone from "./imgs/adone.png"


import { useState } from 'react'

const menuItems = [
  { id: 1, text: 'Inicio' },
  { id: 2, text: 'NOVA' },
  { id: 3, text: 'Kids' },
  { id: 4, text: 'Pilots' },
  { id: 5, text: 'Coders' }, { id: 6, text: 'Inscripción' },
]
import localFont from "next/font/local";

// const roboto = localFont({
//   src: "./fonts/OSWALD-STENCIL.OTF",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const oswal = localFont({
//   src: "./fonts/ROBOTO-REGULAR.TTF",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  return (
    <div className=" h-screen text-xl ">
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
      <div className=" flex justify-center items-center h-[65vh] bg-gradient-to-r from-gray-600 from-30 via-gray-400 via-30 to-gray-600 ">
        <Image src={NOVACH} alt="Logo" width={500} height={500} />

      </div>
      <div className="flex flex-col h-[70vh] justify-center items-center  gap-6 bg-sky-700 relative">
        <div className="absolute top-0 left-0 right-0 w-full h-[70%] bg-white rounded-b-full"></div>

        <p className="z-10 text-gray-700 text-3xl">¿Qué es <span className="text-yellow-400">NOVA</span> Champions League?</p>
        <p className="max-w-screen-md color z-10 text-gray-900  text-xl font-bold ">
          NOVA Champions League es un torneo de robótica en la que niños y jóvenes se ponen a prueba en retos aleatorios,
          donde el tra-bajo en equipo, el manejo de las emocio-nes, la creatividad, el ingenio y la inventiva, les permiten alcanzar nuevos niveles.
        </p>
        <Button variant="destructive" className="bg-yellow-400 z-10 w-lg">Inscribirme</Button>

      </div>
      <div className="h-[50vh] flex">
        <div className="w-[50%] "><Image src={NIÑO} height={100} width={100} alt="niño " className="w-full h-full" /></div>
        <div className="w-[50%] bg-yellow-500 flex flex-col">
          <p> ¿Por qué participar?</p>
          <p>Los chicos de hoy en día están cada vez más atados a las soluciones fáciles o es-tructuradas perdiendo ingenio e inventiva.
            El NOVA Champions League más que un evento de robótica es un evento para gene-rar soluciones poniendo a prueba cada idea, construyendo nuevas formas de ver el mundo y
            permitiendo a los chicos encontrar el camino adecuado a cada situación. </p>
        </div>

      </div>
      <div className="h-[50vh] flex  bg-gray-500 justify-evenly items-center ">
        <Image src={Logo} alt="Logo" width={200} height={200} />
        <div className=" flex flex-col w-[70%] justify-center items-center">
          <p> NOVA se basa en la experimentación como eje de apren-</p>
          <p>dizaje permitiendo a los niños y jóvenes alcanzar metas  </p>
          <p>
            con su propio esfuerzo y planteamiento de solución.
          </p>
        </div>

      </div>
      <div className="h-[50vh] flex">


        <div className="w-[40%] ">
          <Image src={lego} height={100} width={100} alt="niño " className="w-full h-full" /></div>
        <div className="w-[60%]  flex flex-col items-center justify-center"> <p> NOVA se basa en la experimentación como eje de apren-</p>
          <p>dizaje permitiendo a los niños y jóvenes alcanzar metas  </p>
          <p>
            con su propio esfuerzo y planteamiento de solución.
          </p>


        </div>
      </div>
      <div className="text-center flex flex-col justify-evenly gap-4 p-5 bg-yellow-600 text-white text-xl">
        <p className="text-3xl">
          ¿Quiénes organizan el NOVA Champions League?
        </p>
        <p>
          NOVA CL es organizado por AdOne SAS y Ricardo Barona.
        </p>
        <p>
          AdOne SAS se dedica a la creación de marcas, eventos y marketing digital, mientras Ricardo Barona <br />
          se dedica a la creación de plataformas digitales, educación, gamificación y videojuegos.
        </p>
        <p>
          A este esfuerzo se unen los colegios para alcanzar nuevas fronteras de la educación significativa.
        </p>
      </div>
      <div className="flex justify-evenly  items-center flex-col">
        <Image src={ADone} alt="Logo" width={400} height={400} />  
            <p className="m-4 ">Para conocer más visite los sitios web de nuestros organizadores:  </p>
      <div  className="flex justify-evenly gap-10 items-center">
         <Button variant="destructive" className="bg-yellow-400 z-10 w-lg">www.adone.com.co</Button>
      <Button variant="destructive" className="bg-yellow-400 z-10 w-lg">www.ricardobarona.com.co</Button>
      </div>
      </div>

     
    </div>
  );
}
