# Raiqa Assignment

## Live Demo
Live Link - https://raiqa-assignment-jet.vercel.app/

## Features
- Browse meals with availability status
- Toggle between all meals and available meals only
- Sort meals by price (Low to High / High to Low)
- Highlights most and least expensive meal
- Add meals to selection list (no duplicates)
- Remove individual meals and clear all
- Total price calculation

## Getting Started
```bash
npm install
npm run dev
```

## Approach
I kept all state in `App.jsx` and passed data and handlers down as props to keep child components stateless and focused on rendering. Instead of storing filtered meals in state, I derived them from the original array using a `showAll` boolean - this keeps the data flow clean and predictable. Sorting is also derived, applied on top of the filtered list before passing to `MealList`. 

Each component has a single responsibility.
- `FilterSortBar` handles controls
- `MealList` renders the browsable list
- `MealCard` renders a single meal
- `SelectedMeals` manages the selection panel.
- `meals` contains hardcoded data
