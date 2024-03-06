import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'


import axios from 'axios'

const host = process.env.REACT_APP_API_HOST

const CompanyDetail = () => {


  const user = useSelector(state => state.user.user)

  const [company, setCompony] = useState({})

  const { companyID } = useParams()

  console.log(companyID)

  const getCompany = async () => {
    const response = await axios.get(`${host}/api/v1/placements/getPlacement/${companyID}`)
    if (response.status === 200) {
      setCompony(response.data)
    }
  }

  const createEvent = async () => {
    const response = await axios.post(`${host}/api/v1/events/create`, {
      title: company.company,
      description: company.details,
      start: new Date(),
      end: company.endDate
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authtoken')}`
      }
    })

    if (response.status === 200) {
      alert('event created')
    }

  }

  const joinRoom = async () => {
    const response = await axios.post(`${host}/api/v1/placements/joinPlacement/${companyID}`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authtoken')}`
      }
    })

    if (response.status === 200) {
      alert('You have successfully applied for the job')

      await createEvent(company);
    }
  }


  useEffect(() => {
    getCompany()
  }, [companyID])

  return (
    <div>
      <div className="text-4xl ml-12 cursor-pointer">
        <Link to="/" >
          <IoArrowBack />
        </Link>
      </div>

      <main className="profile-page mt-96 min-screen bg-white text-black">
        <section className="relative block h-500-px">
          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")' }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black" />
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative ">
                      <img src="https://avatars.githubusercontent.com/u/121731399?v=4" className='h-44 w-44 rounded-full' alt="" />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      {
                        !company?.applicants?.includes(user._id) ? (
                          <button onClick={joinRoom} className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
                            Apply Now
                          </button>
                        ) :
                          (
                            <>
                              <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
                                Already Applied
                              </button>
                            </>
                          )
                      }
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Job opening</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{company?.applicants?.length || 0}</span><span className="text-sm text-blueGray-400">Applied candidates</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Package</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {company.company}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {company.details}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />Required Skills - {
                      company.skills?.map((skill, index) => {
                        return <span key={index} className="bg-slate-200 text-slate-800 p-1 rounded-md mr-1">{skill}</span>
                      })
                    }
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400" />Job opening for : bAckend developer
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Job desciption {" "}
                        {
                          company.details

                        }
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
    </div >

  )
}

export default CompanyDetail