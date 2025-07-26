import "./FoodCard.css"

function FoodCard({ food }) {
  return (
    <div className="card">
      <img src={food.src} />
      <h3>{food.name}</h3>
      <p>{food.author}</p>
      <div className="card-bottom">
        <p>{food.time} min</p>
        <p>{food.rating} ({food.reviews})</p>
      </div>
    </div>
  )
}

export default FoodCard
