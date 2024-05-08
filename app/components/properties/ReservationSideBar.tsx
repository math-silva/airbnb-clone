const ReservationSideBar = () => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
        <h2 className="mb-5 text-2xl font-semibold">
          $200 <span className="text-sm font-normal">night</span>
        </h2>

        <div className="mb-6 p-3 border border-gray-400 rounded-xl">
          <label className="mb-2 block font-bold text-xs">Guests</label>
          <select className="w-full -ml-1 text-sm">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="w-full mb-4 py-4 text-center text-white font-semibold bg-airbnb rounded-xl hover:bg-airbnbDark">
          Reserve
        </div>

        <p className="mb-6 text-xs text-center">
          You won't be charged yet
        </p>

        <div className="mb-4 flex justify-between align-center text-sm">
          <p className="cursor-pointer underline">$200 x 4 nights</p>
          <p>$800</p>
        </div>

        <div className="mb-4 flex justify-between align-center text-sm">
          <p className="cursor-pointer underline">Cleaning fee</p>
          <p>$15</p>
        </div>

        <div className="mb-4 flex justify-between align-center text-sm">
          <p className="cursor-pointer underline">Airbnb service fee</p>
          <p>$40</p>
        </div>

        <hr />

        <div className="mt-4 flex justify-between align-center text-sm font-semibold">
          <p>Total before taxes</p>
          <p>$855</p>
        </div>
    </aside>
  );
}

export default ReservationSideBar;