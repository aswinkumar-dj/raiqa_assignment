const FilterSortBar = (data) => {
  const { showAll, handleToggle, sortOrder, handleSort } = data;
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="font-bold text-xl">Home Chef</h1>
      <div>
        <button
          onClick={handleToggle}
          className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600"
        >
          {showAll ? "Show Available Only" : "Show All Meals"}
        </button>
        <select
          value={sortOrder}
          onChange={handleSort}
          className="ml-2 py-1 px-2 border rounded-md"
        >
          <option value="default">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};
export default FilterSortBar;
