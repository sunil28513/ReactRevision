import React from 'react'

const ReactFragment = () => {
    const foodItems = ["Tea", "Cofee", "Biscuit"]
    const lunchItems = ["Rajma", "Chawal", "Kadhi", "Salad", "Roti"]
    // const lunchItems = []
    return (
    <>
        <ul>
            {foodItems.map((items, index) =>( 
                    <li key={index}>{index+1} {items}</li>
                )
            )}
        </ul>

        <ul>
            {lunchItems.length === 0 ? <h1>I am hungry</h1> :
                lunchItems.map((lunch, index) =>
                    (
                        <li key={index}>{lunch} </li>
                    )
                )
            }
        </ul>
    </>
  )
}

export default ReactFragment
