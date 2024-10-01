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
        <section className="bg-blue-100 py-10">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center">
                    <h3 className="text-white bg-blue-900 py-2 px-4 w-fit mx-auto mb-6">CATEGORÍAS</h3>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row bg-white  shadow-md overflow-hidden">
                    {/* Left Section with Image */}
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

                    {/* Right Section with Text */}
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
