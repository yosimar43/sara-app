import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
  logo:string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt,logo }) => {
  return (
    <div className="relative h-[50vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-1/2 h-1/2">
        <Image src={logo} alt="Logo" layout="fill"
        objectFit="cover"
        className="object-cover" />
      </div>

      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
    </div>
  );
};

export default HeroImage;
      