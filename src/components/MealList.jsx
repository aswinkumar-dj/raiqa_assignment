import MealCard from "./MealCard";

const MealList = (data) => {
  const { meals, addMeals } = data;
  const isExpensive = Math.max(...meals.map((meal) => meal.price));
  const isAffordable = Math.min(...meals.map((meal) => meal.price));

  return (
   
      <div className="border w-full h-[600px] overflow-y-auto p-4 md:grid grid-cols-2 gap-4 rounded-lg shadow-md">
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
