export const fetchAllFood = () => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/api/food/`)
}
