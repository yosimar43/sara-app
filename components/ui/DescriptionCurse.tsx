import Image from "next/image";
import lego from "../../public/images/lego.jpg";

export interface descriptionCurseProps {
    description: string;
    list: string[];
    src: string
}

const DescriptionCurse: React.FC<descriptionCurseProps> = ({ description, list, src }) => {
    return (
        <div className="flex w-full min-h-fit">
            <div className="w-1/2 relative">
                <Image
                    src={src}
                    alt="logos"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover "
                />
            </div>
            <div className="w-1/2 flex items-center justify-center min-h-max h-[50vh] bg-gray-600 p-4  text-white">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-center ">
                        {description}
                    </h2>
                    <ul className="list-none pl-6 text-center">
                        {
                            list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DescriptionCurse;
