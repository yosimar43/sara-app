
import AppMenu from "@/components/ui/AppMenu";
import HeroImage from "@/components/ui/HeroImage";
import NIÑO from "@/imgs/children-playing-with-lego-playing-room.jpg"
import CodersLogo from "@/imgs/Coder/nova coders.png"
import niños from "@/imgs/Coder/heroImage.jpg"
import DescriptionCurse, { descriptionCurseProps } from "@/components/ui/DescriptionCurse";
import GridsCards from "@/components/ui/GridCards";
import Footer from "@/components/ui/Footer";

import CarroURugaimga from "@/imgs/kids/CarrpUruga.jpg"
import Carro2 from "@/imgs/kids/cardKidsCaja.jpeg"
import carro3 from "@/imgs/kids/kidsCarr.jpeg"

let idata: descriptionCurseProps = {

    description: "Para la competencia se les entrega a los chicos un kit de motor, control remoto y piezas de armado tipo Technic de LEGO.",
    list: ["Edades: Niños entre los 10 y 12 años.", "Retos: Push, Pull, Race, Fútbol, Drop, Cableway, Elevator y Maze.", "Requisitos previos: Ninguno."],
    src: niños.src


}

let gridcarddata = [
    {
        imageSrc: CarroURugaimga.src,
        title: "PUSH PILOTS",
        description: `En este reto debes construir un vehi-culo capaz del empujar un objeto redondo a traves de un recorrido en el
        menor tiempo posible con movimiente
        programado (sin piloto.)`
    },
    {
        imageSrc: Carro2.src,
        title: "PULL CODERS",
        description: `En este reto debes construir un vehi-culo que atraviese la pista con un objeto atado a su cola evitando golpear con los obstáculos, en el menor tiempo posible con movimiento previamente programado (sin piloto).`
    },
    {
        imageSrc: carro3.src,
        title: "RACE CODERS:",
        description: `En este reto debes construir el vehicu-lo más rápido que puedas para competir contra tus adversarios en un circuito que cuenta con obstáculos, pero recuerda que según como lo programes alcanzará o no la meta.`
    },
    {
        imageSrc: carro3.src,
        title: "MAZE CODERS:",
        description: `n este reto debes construir un vehi-culo para salir lo mas rápido posibie del laberinto solo con la programación de movimiento.       `
    },
    {
        imageSrc: 'dropPilotsImage.jpg',  // Reemplaza con la ruta correcta de la imagen
        title: 'LIGHT LOAD CODERS:',
        description: 'En este relo debes construir un vehicu-lo con movimiento de precision que llevará un objeto esférico liviano desde el punto A al punto B sin caerse en el menor tiempo posible y sin piloto.'
      },
      {
        imageSrc: 'cablewayPilotsImage.jpg',  // Reemplaza con la ruta correcta de la imagen
        title: 'FÚTBOL CODERS',
        description: `En este reto debes construir un ve-hiculo que pueda controlar una pelota para ganar a tus adversarios en un partido de fútbol.`
      }, {
        imageSrc: 'cablewayPilotsImage.jpg',  // Reemplaza con la ruta correcta de la imagen
        title: 'DROP CODERS:',
        description: `En este reto tubbjetivo es construir un
        vehículo que con la mayor precisión posible tumbe un objeto que se encuentra en una columna sin tumbar la columna.`
      }, {
        imageSrc: 'cablewayPilotsImage.jpg',  // Reemplaza con la ruta correcta de la imagen
        title: 'CABLEWAY CODERS',
        description: `En este reto debes construir un fun:-cular que recorra un cable elevado en el menor tiempo posible deteniéndose luego de la marca y regresando al punto de partida.`
      },
      {
        imageSrc: 'elevatorPilotsImage.jpg',  // Reemplaza con la ruta correcta de la imagen
        title: 'ELEVATOR CODERS',
        description: `En este reto debes construir un elevador que con precisión sea capaz de subir una
        carga sin desco garse. Pard este reto ten
        drás que construir una pequeña grua que se agarre de la parte superior y que llevará a un personaje que no debe caer al piso. Para completar el reto el personaje Aabe subir hasta después de la marca y
        er abajo sin caer.`
      },

]

// {
//     imageSrc: 'elevatorPilotsImage.jpg',  // Reemplaza con la ruta correcta de la imagen
//     title: 'LIGHT LOAD Pilots:',
//     description: 'En este reto debes construir un vehículo que llevará un objeto esférico liviano desde el punto A al punto B sin caerse en el menor tiempo posible.'
//   },


export default function Coders() {  
    return (<>
        <AppMenu />
        <div className='flex flex-col  '>
            <HeroImage src={NIÑO.src} alt={"hola"} logo={CodersLogo.src} />
            <DescriptionCurse {...idata} />
            <GridsCards color=" bg-cyan-400" list={gridcarddata} />
            <Footer />
        </div>
    </>
    );
}
