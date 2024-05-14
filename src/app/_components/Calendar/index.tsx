"use client"
import React from 'react'
import ReactCalendar from 'react-calendar'

interface indexprops {}

export const index: React.FC<indexprops> = ( {}) => {
  return (

    <div className='h-screen flex flex-col justify-center items-center' >
      <ReactCalendar minDate={new Date()} className="REACT-CALENDAR p-2 bg-orange-50" view='month' onClickDay={(day) => console.log(day)}/>
  </div>
  )
}

export default index
