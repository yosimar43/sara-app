import Image from 'next/image';
import React from 'react';

export interface PropsCard {
    title: String,
    description: String,
    ageRange: String,
    image: any,
    color:"bg-blue-300"|"bg-red-300"|"bg-yellow-300"
}
const CardsKids: React.FC<PropsCard> = ({ ageRange, description, image, title ,color}) => {
    return (
        <section className=" relative text-center h-[50vh] bg-red-500 flex ">
            <div className="  flex-grow">
                <div className="flex flex-col md:flex-row bg-white  h-full shadow-md overflow-hidden">
                    <div className="relative w-[45%] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                            <Image
                                src={image}
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 z-0"
                            />
                        </div>

                    </div>

                    <div className={"w-full flex-grow p-6  flex flex-col  items-center justify-evenly "+color}>
                        <h3 className="text-3xl font-bold text-black">{title}</h3>
                        <p className="text-black mb-4">{ageRange}</p>
                        <p className="text-black mb-6">
                            {description}
                        </p>
                        <button className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardsKids;
