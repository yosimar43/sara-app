interface GridCardsProps {

    list: {
        imageSrc: string;
        title: string;
        description: string;
    }[],
    color: "bg-blue-400" | "bg-red-400" | "bg-green-400"
}


const GridCards: React.FC<GridCardsProps> = ({ list, color }) => {
    return (
        <div className={"grid grid-cols-2 auto-rows-auto text-center p-3 border-l-rose-600 justify-center items-center gap-4  place-items-center pt4" + color}>
            {
                list.map(({ title, description, imageSrc }) => (
                    <div className="bg-white p-4 mx-auto">
                        <img src={imageSrc} alt={title} className="w-[70%] y-1/2 mx-auto" />
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>))


            }

        </div>
    );
};

export default GridCards;
