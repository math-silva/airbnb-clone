import Image from "next/image";

interface PropertyListItemProps {
  imageUrl: string;
  imageAlt: string;
  location: string;
  price: number;
}

const PropertyListItem = ({ 
  imageUrl, 
  imageAlt, 
  location, 
  price 
}: PropertyListItemProps) => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={imageUrl}
          alt={imageAlt}
          sizes={"(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"}
          className="hover:scale-110 object-cover transition h-full w-full"
        />

      </div>
      <div className="mt-2">
        <p className="font-bold">{location}</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500"><strong>${price}</strong> night</p>
      </div>
    </div>
  );
}

export default PropertyListItem;