import React, {useState} from 'react'

const TodoItem = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <>
        <div className="row mt-3">
            <div className="col">
                <p>Text</p>
            </div>
            <div className="col">
                <p>4/10/2024</p>
            </div>
            <div className="col">
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    </>
  )
}

export default TodoItem
