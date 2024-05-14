import React from 'react'
import styles from './foodlist.module.css'

const FoodList = ({list}) => {
  return (
    <>
       <ul>
            { 
                list.map((lunch, index) =>
                    (
                        <li className={`${styles['red']}`} key={index}>{lunch} </li>
                    )
                )
            }
        </ul>
    </>
  )
}

export default FoodList
