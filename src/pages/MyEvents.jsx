import React from 'react'
import Alternate from '../components/Layout/Toodoo';
import MyCalender from "../components/Calender/AdvancedCalender"

const MyEvents = () => {
  return (
    <Alternate>
        <div>

              <MyCalender/>
        </div>
    <br/><br/>
    <div className='flex flex-wrap '>
      {/* <Card/> */}
    </div>

    </Alternate>
  )
}

export default MyEvents