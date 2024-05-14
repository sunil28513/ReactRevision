import React from 'react'
import FoodError from './FoodError'
import FoodList from './FoodList'

const ReactFragment = () => {
    const foodItems = ["Rajma", "Chawal", "Kadhi", "Salad", "Roti"]
    // const foodItems = []
    return (
    <>
        <h1>Food Items</h1>
        <FoodError list = {foodItems}/>
        <FoodList list = {foodItems}/>
    </>
  )
}

export default ReactFragment
