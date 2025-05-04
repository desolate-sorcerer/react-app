import "./FoodCard.css"
import RecipeButton from "../RecipeButton/RecipeButton"

function FoodCard({ food }) {
  return (
    <div className="card">
      <img src={food.src} />
      <p>{food.name}</p>
      <RecipeButton />
    </div>
  )
}

export default FoodCard
