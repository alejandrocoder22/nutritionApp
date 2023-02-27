import React from 'react'

const UserDashboardTableHeader = () => {
  return (
    <thead className='table__thead'>
      <tr className='table__th'>
        <td className='table__td left' />
        <td className='table__td'>Cantidad</td>
        <td className='table__td'>Kcal</td>
        <td className='table__td'>Carbohidratos (g)</td>
        <td className='table__td'>Grasas (g)</td>
        <td className='table__td'>Proteínas (g)</td>
        <td className='table__td' />
      </tr>
    </thead>
  )
}

export default UserDashboardTableHeader
