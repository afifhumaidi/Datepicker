import moment from 'moment'
import { useState } from 'react'
import { RxChevronLeft, RxChevronRight, RxCross1 } from 'react-icons/rx'

export default function DatePicker(props: {
  closeHandle: () => void
  selectDateHandle: (selectedDate: moment.Moment) => void
}) {
  const [date, setDate] = useState({
    todayMonth: moment().startOf('month'),
    nextMoth: moment().startOf('month').add(1, 'M')
  })

  function nextMothHandle() {
    setDate({
      todayMonth: date.todayMonth.add(2, 'M'),
      nextMoth: date.nextMoth.add(2, 'M')
    })
  }

  function lastMothHandle() {
    setDate({
      todayMonth: date.todayMonth.subtract(2, 'M'),
      nextMoth: date.nextMoth.subtract(2, 'M')
    })
  }

  return (
    <div className="date-picker w-[688px]">
      <div className="header border">
        <div className="flex justify-between items-center p-4">
          Pilih Tanggal
          <span className="cursor-pointer" onClick={props.closeHandle}>
            <RxCross1 />
          </span>
        </div>
      </div>
      <div className="body flex">
        <div className="dateBody flex-grow border">
          <DateSelector
            selectDateHandle={props.selectDateHandle}
            lastMothHandle={lastMothHandle}
            isNextMonth={false}
            startDate={date.todayMonth}
          />
        </div>
        <div className="dateBody flex-grow border">
          <DateSelector
            selectDateHandle={props.selectDateHandle}
            nextMothHandle={nextMothHandle}
            isNextMonth={true}
            startDate={date.nextMoth}
          />
        </div>
      </div>
    </div>
  )
}

function DateSelector(props: {
  startDate: moment.Moment
  isNextMonth: boolean
  nextMothHandle?: () => void
  lastMothHandle?: () => void
  selectDateHandle: (selectedDate: moment.Moment) => void
}) {
  const offSet = props.startDate.format('d')

  return (
    <div className="px-[18px] pb-[18px]">
      <div className="header flex justify-between py-[22px]">
        <span className="flex items-center">
          {!props.isNextMonth && (
            <>
              <span className="cursor-pointer" onClick={props.lastMothHandle}>
                <RxChevronLeft />
              </span>
              <span className="mr-4">
                {moment(props.startDate)
                  .subtract(1, 'months')
                  .endOf('month')
                  .format('MMM')}
              </span>
            </>
          )}
        </span>
        <span>{props.startDate.format('MMMM YYYY')}</span>
        <span className="flex items-center">
          {props.isNextMonth && (
            <>
              <span className="mr-4">
                {moment(props.startDate)
                  .add(1, 'months')
                  .endOf('month')
                  .format('MMM')}
              </span>
              <span className="cursor-pointer" onClick={props.nextMothHandle}>
                <RxChevronRight />
              </span>
            </>
          )}
        </span>
      </div>
      <div className="body">
        <div className="weekDays grid grid-cols-7 pb-[10px] text-[12px] text-center">
          <span className="first:text-red-500">Sun</span>
          <span>Mon</span>
          <span>Tues</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="days grid grid-cols-7 grid-rows-5 gap-y-5 text-center">
          <span
            style={{ gridColumn: `span ${offSet} / span ${offSet}` }}
            className={`${!parseInt(offSet) && 'hidden'}`}
          ></span>
          {getDaysMonth(props.startDate).map((day, index) => (
            <span
              key={day}
              className="cursor-pointer"
              onClick={(e) =>
                props.selectDateHandle(
                  props.startDate.set('date', parseInt(e.target.innerText, 10))
                )
              }
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function getDaysMonth(startDate: moment.Moment) {
  const daysNum = startDate.daysInMonth()
  const daysArr = []

  for (let i = 1; i < daysNum + 1; i++) {
    daysArr.push(i)
  }
  return daysArr
}
