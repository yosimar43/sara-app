import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
  logo:string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt,logo }) => {
  return (
    <div className="relative h-[65vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-2/5 h-2/5">
        <Image src={logo} alt="Logo" layout="fill"
        objectFit="contain"
        className="object-cover -z-0" />
      </div>

      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="fill"
        className="object-cover"
      />
    </div>
  );
};

export default HeroImage;
      