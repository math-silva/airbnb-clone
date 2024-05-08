import Image from 'next/image';

import ReservationSideBar from '@/app/components/properties/ReservationSideBar';

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image 
          fill
          src="/cabin_1.webp"
          alt="Cabin 1"
          className='object-cover w-full h-full'
        />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">
          Tiny home in Córrego do Bom Jesus, Brazil
          </h1>

          <span className="mb-6 block text-lg text-gray-600">
            2 guests · 1 bedroom · 1 bed · 1 bath
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_pic_1.jpeg"
              alt="Profile picture"
              width={50}
              height={50}
              className="rounded-full"
            />

            <div className="flex flex-col">
              <p className="font-semibold">Hosted by John Doe</p>
              <p className="text-sm">Superhost · 2 years hosting</p>
            </div>
          </div>

          <hr />

          <p className="mt-6 mb-4">
            A unique experience in a house with modern architecture and views of the mountains of Serra da Mantiqueira. Inserted in a private area of 20,000 m2 full of natural beauties. It's the perfect place to reconnect with someone who matters most. Enjoy sleeping with the stars and waking up under the clouds. There is only 2 hours drive from São Paulo. We're pet-friendly...
          </p>

          <div className="flex items-center gap-1">
            <p className="cursor-pointer font-semibold underline">Show more</p>
            <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '12px', width: '12px', display: 'block', fill: 'var(--linaria-theme_palette-hof)'}}>
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path>
            </svg>
          </div>
          
        </div>

        <ReservationSideBar />
      </div>
    </main>
  );
}

export default PropertyDetailPage;