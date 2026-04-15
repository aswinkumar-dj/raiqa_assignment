const MealCard = ({meal, addMeals,isExpensive, isAffordable}) => {

    return <div>{
        meal.name}
        {isExpensive === meal.price && <span> (Expensive) </span>}
        {isAffordable === meal.price && <span> (Affordable) </span>}
        <span> - {meal.price}</span>
        <button onClick={() => addMeals(meal)} disabled={!meal.isAvailable}>
            {meal.isAvailable ? "Add" : "Not Available"}
        </button>
    </div>
}
export default MealCard;