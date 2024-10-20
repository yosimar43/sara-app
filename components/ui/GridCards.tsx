interface GridCardsProps {

    list: {
        imageSrc: string;
        title: string;
        description: string;
    }[],
    color: " bg-blue-400" | " bg-orange-500" | " bg-cyan-400"
}

const valide= [0,3,4,7,8,11,13,15,17,19]


const GridCards: React.FC<GridCardsProps> = ({ list, color }) => {
    return (
        <div className={"grid grid-cols-2 auto-rows-auto text-center p-3 border-l-rose-600 justify-center items-center   place-items-center  " }>
            {
                list.map(({ title, description, imageSrc },index) => (
                    <div className={`p-4 mx-auto text-center px-5  ${ valide.includes(index) ? color : ''} ` }>
                        <img src={imageSrc} alt={title} className="w-[85%] h-[40%] mx-auto aspect-video" />
                        <h3 className="py-4 mx-4 text-4xl font-bold">{title}</h3>
                        <p className="mx-4 text-2xl font-mono">{description}</p>
                    </div>))


            }

        </div>
    );
};

export default GridCards;
