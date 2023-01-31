import { useState } from 'react'
import DatePicker from './DatePicker'

export default function App() {
  const [isdatePick, setDatePick] = useState(false)
  const [isdatePick2, setDatePick2] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedDate2, setSelectedDate2] = useState("")

  function selectDateHandle(selectedDate: moment.Moment) {
    setDatePick(false)
    setSelectedDate(selectedDate.format("ddd, D MMM YYYY"))
  }

  function selectDateHandle2(selectedDate: moment.Moment) {
    setDatePick2(false)
    setSelectedDate2(selectedDate.format("ddd, D MMM YYYY"))
  }

  return (
    <>
      <div className="datepicker-container flex w-[400px] m-10 border">
        <div className="flex-grow p-4">
          <div className="cursor-pointer" onClick={() => {setDatePick(true); setDatePick2(false)}}>Check-In</div>
          <div>{selectedDate}</div>
        </div>
        <div className="flex-grow p-4">
          <div className="cursor-pointer" onClick={() => {setDatePick(false); setDatePick2(true)}}>Check-Out</div>
          <div>{selectedDate2}</div>
        </div>
      </div>
      {isdatePick && <DatePicker closeHandle={() => setDatePick(false)} selectDateHandle={selectDateHandle}/>}
      {isdatePick2 && <DatePicker closeHandle={() => setDatePick2(false)} selectDateHandle={selectDateHandle2}/>}
    </>
  )
}
