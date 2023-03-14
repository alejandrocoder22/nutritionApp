import { useSearchParams } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

const AddDairyPopup = ({ pickedFood, foodToAdd, setPickedFood, setPopup }) => {
  const [getParams] = useSearchParams()
  const [quantity, setQuantity] = useState(false)

  function useOutsideAlerter (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setPopup(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)

  useOutsideAlerter(wrapperRef)

  const onAddFood = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/api/food/dairy/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...foodToAdd, quantity, eat_at: getParams.get('period'), date_added: getParams.get('date') })
    })
    setPopup(false)
  }

  return (
    <form onSubmit={(e) => onAddFood(e)} className='add-to-dairy__popup' ref={wrapperRef}>
      <label>Quantity</label>
      <input onChange={(e) => setQuantity(e.target.value)} type='text' />
      <button>Add To Dairy</button>
    </form>
  )
}

export default AddDairyPopup
