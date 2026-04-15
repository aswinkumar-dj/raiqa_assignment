const SelectedMeals = (data) => {
    const {selectedMeal, handleClear, handleRemove} = data; 
    const total = selectedMeal.reduce((sum, meal) => sum + meal.price, 0)
    if (selectedMeal.length === 0) {
        return <div>
            <h3>No Meals Selected</h3>
        </div>
    }  
    return <div>
        <h1>Selected Meals</h1>
        <button onClick={handleClear}>Clear All</button>
        {selectedMeal.map(meal => <div key={meal.id}>{meal.name}<span> - {meal.price}</span>
        <button onClick={() => handleRemove(meal)}>Remove</button>
        
        </div>)}
        <h4>Total: {total}</h4>
        
        
    </div>
}
export default SelectedMeals;