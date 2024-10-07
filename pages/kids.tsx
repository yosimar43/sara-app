import AppMenu from "@/components/ui/AppMenu";
import HeroImage from "@/components/ui/HeroImage";
import NIÑO from "@/imgs/children-playing-with-lego-playing-room.jpg"
import NOVACH from "@/imgs/lasos.png"
import lego from "@/imgs/Rectangle.png"
import DescriptionCurse, { descriptionCurseProps } from "@/components/ui/descriptionCurse";
import GridsCards from "@/components/ui/GridCards";
import Footer from "@/components/ui/Footer";



// // Suggested code may be subject to a license. Learn more: ~LicenseLog:3943672925.
// // Suggested code may be subject to a license. Learn more: ~LicenseLog:2215086255.
// // Suggested code may be subject to a license. Learn more: ~LicenseLog:2570757612.
// // Suggested code may be subject to a license. Learn more: ~LicenseLog:3826708466.
let idata: descriptionCurseProps = {

    description: "Lorem ipsum dolor sit amet,e mags nisi ut aliquip ex ea commodu fugiat nulla pariatur cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    list: ["Learn the basic of coding", "Build your first game", "Have fun learning"],
    src: lego.src


}

let gridcarddata = [
    {
        imageSrc: lego.src,
        title: "un titulo ",
        description: "una descricption "
    }, {
        imageSrc: lego.src,
        title: "un titulo ",
        description: "una descricption "
    }
]


export default function Kids() {
    return (
        <div className='flex flex-col '>
            <AppMenu />
            <HeroImage src={NIÑO.src} alt={"hola"} logo={NOVACH.src} />
            <DescriptionCurse {...idata} />
            <GridsCards color="bg-blue-400" list={gridcarddata} />
            <Footer />
        </div>
    );
}
