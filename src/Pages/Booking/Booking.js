import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React ,{useState}from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Booking = () => {
    const element = <FontAwesomeIcon icon={faCalendar} />
    const[date,setDate]= useState(null)
    return (
        <div  className='mt-5'>
            <h1 style={{textAlign:'center'}}>Make your Appointment</h1>
            <form style={{width:'75%', margin:'auto'}}>
  <div className="form-row row">
    <div className="form-group col-md-6 col-lg-6 col-sm-12 mt-3">
     
      <input type="text" className="form-control" id="inputName" placeholder="Your name"></input>
    </div>

    <div className="form-group col-md-6 col-lg-6 col-sm-12 mt-3">
    
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>

    <div className="form-group col-md-6 col-lg-6 col-sm-12 mt-3">
    
      <input type="tel" className="form-control" id="phone" placeholder="Phone Number"></input>
    </div>

    <div className="form-group col-md col-lg-6 col-sm-12-6 mt-3 " >
      <select id="inputState" className="form-control text-muted" placeholder="Departments">
      <option selected>Department</option>
        <option>Cardiology</option>
        <option>Neorology</option>
        <option>Pediatric</option>
        <option>Dental</option>
        <option>Gynecology</option>
        <option>ENT</option>
      </select>
  
    </div>

    <div className="form-group col-md-6 col-lg-6 col-sm-12 mt-3 " >
      <select id="inputState" className="form-control text-muted" placeholder="Doctors">
      <option selected>Doctors</option>
        <option>Mr. x</option>
        <option>Mr. y</option>
        <option>Mr. z</option>
      </select>
  
    </div>
   

    <div className="form-group col-md-6 col-lg-6 col-sm-12 mt-3" >
        <DatePicker 
        className='form-control'
        placeholderText='Date'
        selected={date}
        onChange={newDate => setDate(newDate)}
        dateFormat='dd/mm/yyyy'
        minDate={new Date()}
        ></DatePicker>
    </div>

    <div className="form-group col-md-12 col-lg-12 col-sm-12 mt-3" >
        <input type='message' placeholder='Type your message for us' className='form-control' style={{height:'100px'}}></input>
    </div>
    
  
 
  <div className="form-group mt-4">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"></input>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>

  </div>
  <button type="submit" className="btn-add mt-2">Get Appointment</button>
</form>
        </div>
    )
}

export default Booking
