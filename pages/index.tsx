import Image from "next/image";
import { Button } from "@/components/ui/button"
import Logo from "./imgs/nova pilots.png"
import grup from "./imgs/Group.png"
import { FaRegUserCircle } from "react-icons/fa";
import NOVACH from "./imgs/lasos.png"
import NIÑO from "./imgs/children-playing-with-lego-playing-room.jpg"
import lego from "./imgs/Rectangle.png"
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




export default function Home() {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  return (<>

    <div className=" h-screen text-2xl text-pretty font-bold ">
      <nav className="bg-fondo p-4 flex z-10 justify-evenly gap-4 items-center fixed w-full">
        <Image src={Logo} alt="Logo" width={200} height={200} />
        <ul className="flex justify-center space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.text === menuItems[5].text ? "/registro" : "#"}
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

          <FaRegUserCircle size={90} className="h-lg w-lg text-white" />
        </div>
      </nav>
      <div className="h-32">d</div>
      <div className=" flex justify-center items-center h-[65vh] bg-gradient-to-r from-gray-600 from-30 via-gray-400 via-30 to-gray-600 ">
        <Image src={NOVACH} alt="Logo" width={500} height={500} className="h-full w-full" />

      </div>
      <div className="flex flex-col h-[70vh] justify-center items-center  gap-6 bg-fondo relative">
        <div className="absolute top-0 left-0 right-0 w-full h-[70%] bg-white rounded-b-full"></div>
        <p className="z-10 text-gray-700 text-5xl">¿Qué es <span className="text-ama">NOVA</span> Champions League?</p>
        <p className="max-w-md color z-10 text-gray-900  text-xl font-bold ">
          NOVA Champions League es un torneo de robótica en la que niños y jóvenes se ponen a prueba en retos aleatorios,
          donde el tra-bajo en equipo, el manejo de las emocio-nes, la creatividad, el ingenio y la inventiva, les permiten alcanzar nuevos niveles.
        </p>
        <Button variant="destructive" className="bg-ama z-10 w-lg">Inscribirme</Button>

      </div>
      <div className="h-[50vh] flex text-center wra">
        <div className="w-[40%] "><Image src={NIÑO} height={100} width={100} alt="niño " className="w-full h-full" /></div>
        <div className="w-[60%] bg-ama flex flex-col text-xl justify-evenly items-center ">
          <p className="text-5xl text-fondo"> ¿Por qué participar?</p>
          <p className="text-white max-w-lg">Los chicos de hoy en día están cada vez más atados a las soluciones fáciles o es-tructuradas perdiendo ingenio e inventiva. <br />
            El NOVA Champions League más que un evento de robótica es un evento para generar soluciones poniendo a prueba cada idea, construyendo nuevas formas de ver el mundo y
            permitiendo a los chicos encontrar el camino adecuado a cada situación. </p>
        </div>

      </div>
      <div className="h-[50vh] flex  bg-gray-500 justify-evenly items-center ">
        <Image src={grup} alt="Logo" width={250} height={250} />
        <div className=" flex flex-col w-[70%] justify-center items-center text-white">
          <p> NOVA se basa en la experimentación como eje de apren-</p>
          <p>dizaje permitiendo a los niños y jóvenes alcanzar metas  </p>
          <p>
            con su propio esfuerzo y planteamiento de solución.
          </p>
        </div>

      </div>
      <div className="h-[50vh] flex">



        <div className="w-[60%]  flex flex-col items-center justify-evenly">
          <p className="text-4xl text-ama ">¿Qué día se lleva a cabo?</p>
          <p>El NOVA Champions League establece un cronograma con cada colegio. <br />
            Es importante que estén atentos a los comunicados y nuestro sitio web para las fechas y lugares donde nuestros competidores se van a presentar. </p>



        </div><div className="w-[40%] ">
          <Image src={lego} height={100} width={100} alt="niño " className="w-full h-full" />
        </div>
      </div>
      <div className="text-center flex flex-col justify-evenly gap-4 p-5 bg-ama text-white text-xl">
        <p className="text-3xl text-gray-700">
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
        <div className="flex justify-evenly gap-10 items-center">
          <Button variant="destructive" className="bg-ama z-10 w-lg"><a href="https://www.adone.com.co/" target="_blank">https://www.adone.com.co/</a></Button>
          <Button variant="destructive" className="bg-ama z-10 w-lg"> <a href="http://ricardobarona.com/" target="_blank" rel="noopener noreferrer">www.ricardobarona.com.co</a></Button>
        </div>
      </div>
      <footer className="text-center my-4 p-4 bg-fondo">
        NOVA Champions League
        <br />
        2024

      </footer>


    </div>
  </>
  );
}
