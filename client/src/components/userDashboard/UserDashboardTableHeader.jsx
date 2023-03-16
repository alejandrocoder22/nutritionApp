import React from 'react'

export const UserDashboardTableHeader = () => {
  return (
    <thead className='table__thead'>
      <tr className='table__tr'>
        <th className='table__th left' />
        <th className='table__th'>Cantidad</th>
        <th className='table__th'>Kcal</th>
        <th className='table__th'>Carbohidratos (g)</th>
        <th className='table__th'>Grasas (g)</th>
        <th className='table__th'>Proteínas (g)</th>
        <th className='table__th' />
      </tr>
    </thead>
  )
}
