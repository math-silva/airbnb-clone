import Image from 'next/image';

const Categories = () => {
  return (
    <div className="cursor-pointer pt-3 pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="/icn_category_cabins.jpg"
          alt="Category - Cabins"
          width={20}
          height={20}
        />

        <span className="text-xs">Cabins</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/icn_category_beachfront.jpg"
          alt="Category - Beachfront"
          width={20}
          height={20}
        />

        <span className="text-xs">Beachfront</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="/icn_category_caves.jpg"
          alt="Category - Caves"
          width={20}
          height={20}
        />

        <span className="text-xs">Caves</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="/icn_category_amazing_pools.jpeg"
          alt="Category - Amazing pools"
          width={20}
          height={20}
        />

        <span className="text-xs">Amazing pools</span>
      </div>
    </div>
  );
}

export default Categories;