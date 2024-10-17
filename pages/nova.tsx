import React from 'react';
import Footer from "@/components/ui/Footer";
import AppMenu from "@/components/ui/AppMenu";
import Image from 'next/image';
import niñosimg from "@/imgs/high-angle-group-childrens.jpg"
import { Button } from '@/components/ui/button';
import CardsKids, { PropsCard } from '@/components/ui/CardsKids';


const cardsKidsData: PropsCard[] = [
  {
    title: "Kids",
    image: niñosimg.src,
    ageRange: 'Niños entre los 6 y 9 años',
    color: "bg-blue-300",
    description: 'Esta categoría pensada para los más chicos busca introducirlos en la generación de soluciones y la experimentación a través de la construcción y el uso de motores con retos especialmente pensados para sus edades.',
  },
  {
    title: "pilots",
    image: niñosimg,
    color: "bg-red-300",

    ageRange: 'Niños entre los 10 y 12 años.',
    description: 'Esta categoría busca impactar positivamente en la generación de soluciones y la experimentación a través de la construcción y el uso de motores con retos especialmente pensados para sus edades.',
  },
  {
    title: "coders",
    image: niñosimg,
    color: "bg-blue-300",

    ageRange: 'Jóvenes entre los 13 y 18 años.',
    description: 'Esta categoría busca impactar positivamente en la generación de soluciones y la experimentación a través de la construcción, programación y el uso de motores con retos especialmente pensados para sus edades.',
  },

]


const NovaPage: React.FC = () => {
  return (
    <>
        <AppMenu />
      <div className=" h-screen text-2xl text-pretty font-bold ">
        <div className=" h-[85vh] w-full overflow-hidden flex flex-col justify-end " >
          <Image
            src={niñosimg}
            alt="Background Image"
            layout="fill"
            objectFit="fill"
            className="absolute inset-0 z-0"
          />


          <div className="relative w-full min-h-1/3 h-max py-2 bg-ama  flex items-center justify-evenly flex-col text-white">
            <p className="text-5xl my-2 "> ¿Quiénes pueden participar?</p>
            <p className='max-w-xl text-xl '>Todos pueden participar incluso sin conocimientos previos. <br />
              El NOVA Champions League cuenta con información en el sitio web para el entrenamiento previo y se hacen conexiones con los colegios y profes que apoyan el proceso para mejores resultados. </p>
            <p className='max-w-xl text-xl'></p>
          </div>
        </div>
        <div className="relative flex items-center justify-center bg-gray-100 pt-10">
          <div className="flex one py-5">
            {/* Left Section */}
            <div className=" text-white p-5 flex-shrink-0 w-1/2 flex  items-center">
              <h2 className="text-4xl font-bold">¿QUÉ IMPLEMENTOS <br /> NECESITO PARA <br /> PARTICIPAR?</h2>
            </div>

            {/* Right Section */}
            <div className="p-5 w-1/2">
              <p className="text-fondo">
                El NOVA Champions League ofrece todos los componentes necesarios para hacer los retos el día del evento,
                pero en casos en los que los participantes lo requieren, tenemos los kits (solamente los de NOVA Coders) para la venta.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <h3 className="w-full text-white  bg-fondo  px-4 mx-auto  min-h-20 text-center flex items-center justify-center ">CATEGORÍAS</h3>


          <div className='relative'>
            <div className=''>
              {
                cardsKidsData.map((card, index) => (
                  <CardsKids key={index} {...card} />
                ))
              }
            </div>


          </div>

        </div>

        <div className="flex dos py-5">
          {/* Left Section */}
          <div className=" text-white p-5 flex-shrink-0 w-1/2 flex  items-center">
            <h2 className="text-4xl font-bold">Inscripciones</h2>
          </div>

          {/* Right Section */}
          <div className="p-5 w-1/2 flex flex-col items-center justify-evenly">
            <p className="text-gray-800 max-w-2xl mt-4">
              Para inscribirte al NOVA Champions League
              debes crear una cuenta en nuestro sitio web y
              pagar el valor de la inscripción por vía transferencia o Nequi.
            </p>
            <p className="text-gray-800 max-w-2xl mt-4">
              Una vez realizado el pago se debe notificar al
              Whatsapp <span className='text-ama'>314 257 1564</span> y tras la verificación se
              activará la cuenta para acceder a los contenidos del sitio.
            </p>
            <Button variant="destructive" className="bg-fondo z-10 max-w-max py-2 px-4"> Inscripción </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NovaPage;

