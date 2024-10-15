import AppMenu from "@/components/ui/AppMenu";
import HeroImage from "@/components/ui/HeroImage";
import NIÑO from "@/imgs/children-playing-with-lego-playing-room.jpg"
import NOVACH from "@/imgs/lasos.png"
import lego from "@/imgs/Rectangle.png"
import DescriptionCurse, { descriptionCurseProps } from "@/components/ui/DescriptionCurse";
import GridsCards from "@/components/ui/GridCards";
import Footer from "@/components/ui/Footer";

let idata: descriptionCurseProps = {

    description: "Lorem ipsum dolor sit amet,e mags nisi ut aliquip ex ea commodu fugiat nulla pariatur cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    list: ["Learn the basic of coding", "Build your first game", "Have fun learning"],
    src: lego.src


}

let gridcarddata = [
    {
        imageSrc: lego.src,
        title: "PUSH Kids ",
        description: "En este reto debes construir un vehíredondo del punto A al punto B en el culo capaz de empujar un objeto menor tiempo posible.  "
    }, 
    {
        imageSrc: lego.src,
        title: "PULL Kids",
        description: `En este reto debes construir un vehículo 
        que atraviese la pista con un objeto 
        atado a su cola en el menor tiempo po
        sible.`
    },
    {
        imageSrc: lego.src,
        title: "RACE Kids:",
        description: `En este reto debes construir el vehículo más rápido que puedas para 
        competir contra tus adversarios en 
        el circuito.`
    },
    {
        imageSrc: lego.src,
        title: "MAZE Kids",
        description: `En este reto debes construir un vehículo 
        para salir lo más rápido posible del 
        laberinto.`
    }
]


export default function Kids() {
    return (<>
            <AppMenu />
        <div className='flex flex-col mt-10 '>
            <HeroImage src={NIÑO.src} alt={"hola"} logo={NOVACH.src} />
            <DescriptionCurse {...idata} />
            <GridsCards color=" bg-blue-400" list={gridcarddata} />
            <Footer />
        </div>
    </>
    );
}
