import React from 'react'

const BharatClockV1 = () => {
    const time  = new Date()
  return (
    <>
        <div className='container'>
            <h1>Bharat Click</h1>
            <p>Ths is the cloc kthat shows the time in bharat at all times</p>
            <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
        </div>
    </>
  )
}

export default BharatClockV1
