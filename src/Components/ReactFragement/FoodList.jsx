import React from 'react'

const FoodList = ({list}) => {
  return (
    <>
       <ul>
            { 
                list.map((lunch, index) =>
                    (
                        <li key={index}>{lunch} </li>
                    )
                )
            }
        </ul>
    </>
  )
}

export default FoodList
