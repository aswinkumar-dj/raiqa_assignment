const FilterSortBar = (data) => {
    const {showAll, handleToggle, sortOrder, handleSort} = data;
    return <div>
        <button onClick={handleToggle}>{showAll ? "Show Available Only" : "Show All Meals"}</button>
        <select value={sortOrder} onChange={handleSort}>
          <option value="default">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
    </div>
}
export default FilterSortBar;