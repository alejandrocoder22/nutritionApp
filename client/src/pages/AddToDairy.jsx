import Nav from '../components/Nav'
import { useEffect, useState } from 'react'

const AddToDairy = () => {
  const fetchAllFood = () => {
    return fetch('http://localhost:3001/api/food/')
  }

  const pickFood = (e) => {
    setPickedFood(food.filter(singleFood => singleFood.food_id == e.target.id))
  }
  const [food, setFood] = useState([])
  const [pickedFood, setPickedFood] = useState({})

  useEffect(() => {
    fetchAllFood()
      .then(response => response.json())
      .then(foodList => setFood(foodList.data))
  }, [])

  return (
    <main className='add-to-dairy'>
      <Nav />
      <div className='add-to-dairy__container wrapper'>
        <form className='add-to-dairy__form'>
          <input className='add-to-dairy__input radius ' placeholder='Buscar...' />
          <button className='add-to-dairy__button radius pointer'>Añadir a comida</button>
        </form>
        <div className='add-to-dairy__two-columns'>
          <div className='add-to-dairy__column-left'>
            <ul className='add-to-dairy__ul'>
              {food?.map(singleFood => <li className='add-to-dairy__li pointer' id={singleFood.food_id} onClick={pickFood} key={singleFood.food_id}>{singleFood.food_name}</li>)}
            </ul>
          </div>
          <div className='add-to-dairy__column-right'>
            <table className='add-to-dairy__table'>
              <thead className='add-to-dairy__thead'>
                <th className='add-to-dairy__th'>Proteínas</th>
                <th className='add-to-dairy__th'>Grasas</th>
                <th className='add-to-dairy__th'>Hidratos</th>
              </thead>
              <tbody>
                <td className='add-to-dairy__td'>{pickedFood[0].proteins}</td>
                <td className='add-to-dairy__td'>{pickedFood[0].fats}</td>
                <td className='add-to-dairy__td'>{pickedFood[0].carbs}</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddToDairy
