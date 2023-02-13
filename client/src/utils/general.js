export const pickFood = (e, setPopup, setFoodToAdd, food) => {
  setPopup(true)
  setFoodToAdd(food.find(singleFood => singleFood.food_id == e.target.id))
}
