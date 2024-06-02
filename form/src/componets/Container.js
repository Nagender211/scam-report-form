import React from 'react'
import './Ccontainer.css'
import { FaBitbucket, FaStarOfLife } from "react-icons/fa";
const Container = () => {
  return (
    <div className='box'>
        <h1>Report Scam</h1>
        <p>Please fil out the form to report a scam</p>
       
        <div className='description'>
        <FaStarOfLife className='icon'/>
        <div className='content'>
          <h5>Discrption</h5>
          <form>
          <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='please write about your scam' />
        </form>
        </div>
        
        </div>
        <div className='location'>
        <FaStarOfLife className='icon'/>
          <div className='content'>
         
            <h5>location</h5>
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='please write location' />
          </div>
        
        </div>
        <div className='media'>
           <h5>Media uploads (optional)</h5>
           <input type="file" name="file" id="file" className='input_file'/>
           <label for="file">uploads</label>
        </div>
        <div className='checkbox'>
        <input type="checkbox" value="" />
        <button type="submit" className='btn1'>SubmitAutomatic</button>
        </div>
       
        <button type='submit' className='btn'>submit Report</button>
 


      
    </div>
  )
}

export default Container
