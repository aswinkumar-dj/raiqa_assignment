const SelectedMeals = (data) => {
  const { selectedMeal, handleClear, handleRemove } = data;
  const total = selectedMeal.reduce((sum, meal) => sum + meal.price, 0);

  if (selectedMeal.length === 0) {
    return (
      <div className="min-w-60 md:w-100 h-fit border p-4 rounded-lg shadow-md">
        <h1 className="font-bold flex justify-between">No Meals Selected</h1>
      </div>
    );
  }
  
  return (
    <div className="min-w-60 md:w-100 h-fit max-h-[600px] overflow-y-auto border p-4 rounded-lg shadow-md">
      <div className="font-bold flex justify-between border-b pb-2 mb-4 ">
        <h1>Selected Meals({selectedMeal.length})</h1>
        <button
          onClick={handleClear}
          className="bg-red-500 text-white px-2 py-1 rounded-md text-xs"
        >
          Clear All
        </button>
      </div>
      <div className=" ">
        {selectedMeal.map((meal) => (
          <div key={meal.id} className="flex justify-between items-center py-2">
            <span className="flex-1">{meal.name}</span>
            <span className="text-green-600 font-semibold w-16 text-right">
              ₹{meal.price}
            </span>
            <button
              onClick={() => handleRemove(meal)}
              className="text-gray-500 hover:text-gray-700 border px-1 rounded-sm text-xs ml-2"
            >
              x
            </button>
          </div>
        ))}
      </div>
      <h1 className="font-bold text-lg border-t pt-2 mt-4 text-right">
        Total: ₹{total}
      </h1>
    </div>
  );
};
export default SelectedMeals;
