import FilterSortBar from "./components/FilterSortBar";
import MealList from "./components/MealList";
import SelectedMeals from "./components/SelectedMeals";
import { meals } from "./data/meals";
import { useState } from "react";

function App() {
  const [showAll, setShowAll] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  const displayMeals = showAll
    ? meals
    : meals.filter((meal) => meal.isAvailable);
  const sortedMeals = [...displayMeals].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  const handleClear = () => {
    setSelectedMeal([]);
  };

  const handleAdd = (meal) => {
    const alreadyAdded = selectedMeal.some((m) => m.id === meal.id);
    if (!alreadyAdded) {
      setSelectedMeal([...selectedMeal, meal]);
    }
  };

  const handleRemove = (meal) => {
    setSelectedMeal(selectedMeal.filter((m) => m.id !== meal.id));
  };

  return (
    <div className="space-y-10 md:flex justify-center gap-10 p-10">
      <div>
        <FilterSortBar
          showAll={showAll}
          handleToggle={handleToggle}
          sortOrder={sortOrder}
          handleSort={handleSort}
        />
        <MealList meals={sortedMeals} addMeals={handleAdd} />
      </div>
      <SelectedMeals
        selectedMeal={selectedMeal}
        handleClear={handleClear}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
