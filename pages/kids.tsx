import AppMenu from "@/components/ui/AppMenu";
import HeroImage from "@/components/ui/HeroImage";
import NIÑO from "@/imgs/children-playing-with-lego-playing-room.jpg"
import NOVACH from "@/imgs/Downloads/nova kids.png"
import niños from "@/imgs/Downloads/NiñoSentadosKids.jpg"
import DescriptionCurse, { descriptionCurseProps } from "@/components/ui/DescriptionCurse";
import GridsCards from "@/components/ui/GridCards";
import Footer from "@/components/ui/Footer";

import CarroURugaimga from "@/imgs/kids/CarrpUruga.jpg"
import Carro2 from "@/imgs/kids/cardKidsCaja.jpeg"
import carro3 from "@/imgs/kids/kidsCarr.jpeg"

let idata: descriptionCurseProps = {

    description: "Para la competencia se les entrega a los chicos un kit de motor, control remoto y piezas de armado tipo technic LEGO.",
    list: ["Edades: niños entre 6 y 12 años", "Retos: Push pull race maze", "Requisitos previos: Ninguno"],
    src: niños.src


}

let gridcarddata = [
    {
        imageSrc: CarroURugaimga.src,
        title: "PUSH Kids ",
        description: "En este reto debes construir un vehíredondo del punto A al punto B en el culo capaz de empujar un objeto menor tiempo posible.  "
    },
    {
        imageSrc: Carro2.src,
        title: "PULL Kids",
        description: `En este reto debes construir un vehículo 
        que atraviese la pista con un objeto 
        atado a su cola en el menor tiempo po
        sible.`
    },
    {
        imageSrc: carro3.src,
        title: "RACE Kids:",
        description: `En este reto debes construir el vehículo más rápido que puedas para 
        competir contra tus adversarios en 
        el circuito.`
    },
    {
        imageSrc: carro3.src,
        title: "MAZE Kids",
        description: `En este reto debes construir un vehículo 
        para salir lo más rápido posible del 
        laberinto.`
    }
]


export default function Kids() {
    return (<>
        <AppMenu />
            <HeroImage src={NIÑO.src} alt={"hola"} logo={NOVACH.src} />
            <DescriptionCurse {...idata} />
            <GridsCards color=" bg-blue-400" list={gridcarddata} />
            <Footer />
    </>
    );
}
