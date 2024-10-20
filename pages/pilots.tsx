
import AppMenu from "@/components/ui/AppMenu";
import HeroImage from "@/components/ui/HeroImage";
import NIÑO from "@/imgs/children-playing-with-lego-playing-room.jpg"
import PilostLogo from "@/imgs/pilots/nova pilots.png"
import niños from "@/imgs/pilots/heroImage.jpg"
import DescriptionCurse, { descriptionCurseProps } from "@/components/ui/DescriptionCurse";
import GridsCards from "@/components/ui/GridCards";
import Footer from "@/components/ui/Footer";

import CarroURugaimga from "@/imgs/kids/CarrpUruga.jpg"
import Carro2 from "@/imgs/kids/cardKidsCaja.jpeg"
import carro3 from "@/imgs/kids/kidsCarr.jpeg"
import futbolPilots from "@/imgs/pilots/futbolPilots.jpg"
import cable from "@/imgs/pilots/cable.jpg"


let idata: descriptionCurseProps = {

    description: "Para la competencia se les entrega a los chicos un kit de motor, control remoto y piezas de armado tipo Technic de LEGO.",
    list: ["Edades: Niños entre los 10 y 12 años.", "Retos: Push, Pull, Race, Fútbol, Drop, Cableway, Elevator y Maze.", "Requisitos previos: Ninguno."],
    src: niños.src


}

let gridcarddata = [
    {
        imageSrc: CarroURugaimga.src,
        title: "PUSH PILOTS",
        description: "En este reto debes construir un vehi-culo capaz de ir hasta el fondo de la pista y devolverse empujando un objeto redondo a través de un recorrido en el menor tiempo posible."
    },
    {
        imageSrc: Carro2.src,
        title: "PULL PILOTS",
        description: `En este reto debes construir un vehi-culo que atraviese la pista con un objeto atado a su cola evitando golpear 
        con los obstáculos y en el menor tiempo posible.`
    },
    {
        imageSrc: carro3.src,
        title: "RACE PILOTS:",
        description: `En este reto debes construir el vehículo más rápido que puedas para 
        competir contra tus adversarios en 
        el circuito.`
    },
    {
        imageSrc: carro3.src,
        title: "MAZE PILOTS:",
        description: `En este reto debes construir un vehi-culo para salir lo más rápido posible del laberinto        `
    }, {
        imageSrc: carro3.src,
        title: "LIGHT LOAD PILOTS:",
        description: `En este reto debes construir un vehiculo que llevara un objecto esferíco liviano desde el punto A al punto B sin caerse en el menor tiempo posible.      `
    },   
     {
        imageSrc: futbolPilots.src,  // Reemplaza con la ruta correcta de la imagen
        title: 'FÚTBOL PILOTS:',
        description: 'En este reto debes construir un vehículo que pueda controlar una pelota  para ganar a tus adversarios en un partido de fútbol.'
      },
    {
        imageSrc: cable.src,  // Reemplaza con la ruta correcta de la imagen
        title: 'DROP PILOTS',
        description: 'En este reto tu objetivo es construir un vehículo que con la mayor precisión posible tumbe un objeto que se encuentra en una columna sin tumbar la columna.'
      },
      {
        imageSrc: cable.src,  // Reemplaza con la ruta correcta de la imagen
        title: 'CABLEWAY PILOTS',
        description: 'En este reto debes construir un funicular que recorra un cable elevado en el menor tiempo posible.'
      },

]

// {
//     imageSrc: 'elevatorPilotsImage.jpg',  // Reemplaza con la ruta correcta de la imagen
//     title: 'LIGHT LOAD Pilots:',
//     description: 'En este reto debes construir un vehículo que llevará un objeto esférico liviano desde el punto A al punto B sin caerse en el menor tiempo posible.'
//   },


export default function Pilots() {
    return (<>
        <AppMenu />
        <div className='flex flex-col  '>
            <HeroImage src={NIÑO.src} alt={"hola"} logo={PilostLogo.src} />
            <DescriptionCurse {...idata} />
            <GridsCards color=" bg-orange-500" list={gridcarddata} />
            <Footer />
        </div>
    </>
    );
}
