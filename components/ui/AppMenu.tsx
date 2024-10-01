import React, { useState } from 'react';
import Logo from "@/imgs/nova champions league.png"
import { FaRegUserCircle } from "react-icons/fa";


import Image from 'next/image';
const menuItems = [
    { id: 1, text: 'Inicio', url: '/' },
    { id: 2, text: 'NOVA', url: '/nova' }, 
    { id: 3, text: 'Kids', url: '/kids' },
    { id: 4, text: 'Pilots', url: '/pilots' },
    { id: 5, text: 'Coders', url: '/coders' }, 
    { id: 6, text: 'Inscripción', url: '/registro' },
  ];
interface AppMenuProps {}

const AppMenu: React.FC<AppMenuProps> = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null)
  return (
    <nav className="bg-fondo p-4 flex z-10 justify-evenly gap-4 items-center sticky top-0 w-full">
    <Image src={Logo} alt="Logo" width={200} height={200} />
    <ul className="flex justify-center space-x-6">
      {menuItems.map(({id,url,text}) => (
        <li key={id}>
          <a
           href={url}
            className={`
            text-white 
            font-medium 
            text-lg
            py-2 
            px-3 
            transition-all 
            duration-300 
            ease-in-out
            border-b-2 
            border-transparent
            hover:border-yellow-400 
            hover:text-yellow-400 
            hover:text-xl
            ${activeItem === id ? 'border-yellow-400 text-yellow-400 text-xl' : ''}
          `}
            onMouseEnter={() => setActiveItem(id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
    <div className="flex justify-center items-center h-20 " >

      <FaRegUserCircle size={90} className="h-lg w-lg text-white" />
    </div>
  </nav>
  );
};

export default AppMenu;
