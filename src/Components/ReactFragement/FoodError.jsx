import React from 'react'

const FoodError = ({list}) => {
  return (
    <>
        {
            list.length === 0 && <h3>I am still hungry</h3>
        }
    </>
  )
}

export default FoodError
