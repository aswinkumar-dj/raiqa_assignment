import MealCard from "./MealCard";

const MealList = (data) => {
  const { meals, addMeals } = data;
  const isExpensive = Math.max(...meals.map((meal) => meal.price));
  const isAffordable = Math.min(...meals.map((meal) => meal.price));

  return (
   
      <div className="border w-full min-w-60 h-[600px] overflow-y-auto p-4 md:grid grid-cols-2 gap-4 space-y-2 md:space-y-0 rounded-lg shadow-md">
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            addMeals={addMeals}
            isExpensive={isExpensive}
            isAffordable={isAffordable}
          />
        ))}
      </div>
    
  );
};
export default MealList;
