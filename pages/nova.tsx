import React from 'react';
import Footer from "@/components/ui/Footer";
import AppMenu from "@/components/ui/AppMenu";
import Image from 'next/image';
import niñosimg from "@/imgs/high-angle-group-childrens.jpg"
import { Button } from '@/components/ui/button';


const NovaPage: React.FC = () => {
  return (
    <>
      <div className=" h-screen text-2xl text-pretty font-bold relative">
        <AppMenu />
        <div className="relative h-[75vh] w-full overflow-hidden" >
          <Image
            src={niñosimg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-ama  z-20 flex items-center justify-evenly flex-col text-white">
            <p className="text-5xl "> ¿Quiénes pueden participar?</p>
            <p className='max-w-xl text-xl'>Todos pueden participar incluso sin conocimientos previos. <br />
              El NOVA Champions League cuenta con información en el sitio web para el entrenamiento previo y se hacen conexiones con los colegios y profes que apoyan el proceso para mejores resultados. </p>
            <p className='max-w-xl text-xl'></p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 py-10">
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
       
    </div> <div className="flex dos py-5">
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

