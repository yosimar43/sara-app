interface GridCardsProps {

    list: {
        imageSrc: string;
        title: string;
        description: string;
    }[],
    color: " bg-blue-400" | " bg-red-400" | " bg-green-400"
}

const valide= [0,3,5,7,9]


const GridCards: React.FC<GridCardsProps> = ({ list, color }) => {
    return (
        <div className={"grid grid-cols-2 auto-rows-auto text-center p-3 border-l-rose-600 justify-center items-center   place-items-center  " }>
            {
                list.map(({ title, description, imageSrc },index) => (
                    <div className={`p-4 mx-auto ${ valide.includes(index) ? color : ''} ` }>
                        <img src={imageSrc} alt={title} className="w-[55%] y-1/2 mx-auto" />
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>))


            }

        </div>
    );
};

export default GridCards;
