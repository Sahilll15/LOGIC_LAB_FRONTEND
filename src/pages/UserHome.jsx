import React from 'react'
import Alternate from '../components/Layout/User';
import Card from '../components/Placement/Card';
import MyCalender from "../components/Calender/AdvancedCalender"

const UserHome = () => {
  return (
    <Alternate>
                    <MyCalender/>

      <br/>
      <div className='ml-3 font-bold text-3xl'>
        <p>PLACEMENT DRIVES !</p>
      </div>
      <div className='ml-4 mt-8 font-semibold text-2xl mb-4'>
        <p>Ongoing Drives</p>
      </div>

      <div className='flex flex-wrap  gap-4 items-center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className='ml-4 mt-8 font-semibold text-2xl mb-4'>
        <p>Upcoming Drives</p>
      </div>

      <div className='flex flex-wrap  gap-4 items-center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className='ml-4 mt-8 font-semibold text-2xl mb-4'>
        <p>Past Drives</p>
      </div>

      <div className='flex flex-wrap  gap-4 items-center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <br/>
    </Alternate>
  )
}

export default UserHome