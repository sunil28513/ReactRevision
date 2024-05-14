import React, {useState} from 'react'
import DatePicker from "react-datepicker";

const AddTodo = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <>
        <div className="row">
            <div className="col">
                <input type="text" placeholder='Enter Todo here' className='form-control' />
            </div>
            <div className="col">
                <DatePicker className='form-control' selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="col">
                <button className='btn btn-success'>Add</button>
            </div>
        </div>
    </>
  )
}

export default AddTodo
