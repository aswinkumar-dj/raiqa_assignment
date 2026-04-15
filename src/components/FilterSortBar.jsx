const FilterSortBar = (data) => {
  const { showAll, handleToggle, sortOrder, handleSort } = data;
  return (
    <div className="text-right mb-4">
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
  );
};
export default FilterSortBar;
