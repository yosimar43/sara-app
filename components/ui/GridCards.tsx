interface GridCardsProps {
  imageSrc: string;
  title: string;
  description: string;
}


const GridCards: React.FC<GridCardsProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="grid grid-cols-2 auto-rows-auto bg-blue-400 p-3 border-l-rose-600">
      <div className="bg-white p-4">
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="bg-white p-4">
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GridCards;
