const MealCard = (data) => {
    const { meal, addMeals, isExpensive, isAffordable } = data;

  return (
    <div className="border max-w-130 p-4 rounded-lg shadow-md flex flex-col items-start">
      <div className="flex justify-between w-full">
        <h1>{meal.name}</h1>
        <span
          className={`ml-2 ${
            meal.isAvailable ? " text-green-600" : " text-red-500"
          }`}
        >
          {meal.isAvailable ? "Available" : "Not Available"}
        </span>
      </div>

      <span className="font-bold">₹{meal.price}</span>
      <div className="flex justify-between mt-2 gap-2 w-full">
        <button
          onClick={() => addMeals(meal)}
          disabled={!meal.isAvailable}
          className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {meal.isAvailable ? "Add" : "Not Available"}
        </button>
        <div>
          {isExpensive === meal.price && (
            <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs">
              Expensive
            </span>
          )}
          {isAffordable === meal.price && (
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
              Affordable
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealCard;
