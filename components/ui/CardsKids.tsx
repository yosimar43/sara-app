import Image from 'next/image';
import React from 'react';

interface Props {
    title: String,
    description: String,
    ageRange: String,
    image: any,
}
const CardsKids: React.FC<Props> = ({ ageRange, description, image, title }) => {
    return (
        <section className="bg-red-100 relative text-center h-[50vh]">
            <h3 className="w-full text-white bg-blue-900  px-4 mx-auto  min-h-7 h-[20%] ">CATEGORÍAS</h3>
            <div className="container mx-auto h-[90%]  flex-grow">
                <div className="flex flex-col md:flex-row bg-white  shadow-md overflow-hidden">
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

                    <div className="w-full flex-grow p-6 bg-blue-200 flex flex-col  items-center justify-evenly">
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
