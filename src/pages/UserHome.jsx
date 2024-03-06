import React, { useEffect, useState } from 'react'
import Alternate from '../components/Layout/User';
import Card from '../components/Placement/Card';
import MyCalender from "../components/Calender/AdvancedCalender"
import axios from 'axios'

const host = process.env.REACT_APP_API_HOST;

const UserHome = () => {

  const [upcomingData, setupcomingData] = useState([])
  const [ongoinData, setongoingData] = useState([])
  const [pastData, setpastData] = useState([])

  const fetchData = async () => {
    try {

      const response = await axios.get(`${host}/api/v1/placements/getPlacement`)

      if (response.status === 200) {
        console.log('response', response.data)
        setupcomingData(response.data.upcomingDrives)
        setongoingData(response.data.ongoingDrives)
        setpastData(response.data.completedDrives)
      }
    } catch (error) {

    }
  }


  useEffect(() => {
    fetchData()

  }, [])

  return (
    <Alternate>
      <MyCalender />

      <br />
      <div className='ml-3 font-bold text-3xl'>
        <p>PLACEMENT DRIVES !</p>
      </div>
      <div className='ml-4 mt-8 font-semibold text-2xl mb-4'>
        <p>Ongoing Drives</p>
      </div>

      <div className='flex flex-wrap  gap-4 items-center'>
        {
          ongoinData?.map((data, index) => {
            return <Card key={index} data={data} />
          })
        }
      </div>

      <div className='ml-4 mt-8 font-semibold text-2xl mb-4'>
        <p>Upcoming Drives</p>



      </div>

      <div className='flex flex-wrap  gap-4 items-center'>
        {
          upcomingData?.map((data, index) => {
            return <Card key={index} data={data} />
          })
        }
      </div>

      <div className='ml-4 mt-8 font-semibold text-2xl mb-4'>
        <p>Past Drives</p>
      </div>

      <div className='flex flex-wrap  gap-4 items-center'>
        {
          pastData?.map((data, index) => {
            return <Card key={index} data={data} />
          })
        }
      </div>
      <br />
    </Alternate>
  )
}

export default UserHome