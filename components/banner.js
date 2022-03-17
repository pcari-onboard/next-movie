import { useState } from 'react'
import styles from '../styles/components/Banner.module.css'
import Button from 'components/button'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import useMovie from 'context/MovieContext'
import moment from 'moment'

export default function Banner({ homeMovies, findTimeSlot, findTheaters }) {


  return (
    <section className={`${styles.bannerSection} py-36 lg:px-[103px]`}>
      <div className="flex items-center justify-items-stretch justify-between px-[111px]">
        <img src="images/play-button.png" />
        { homeMovies &&  <HomeMovies /> }
        { findTimeSlot &&  <FindTimeSlot /> }
        { findTheaters &&  <FindTheaters /> }
      </div>
    </section>
  )
}

function HomeMovies() {
  return (
    <div className="banner-section__text-block w-3/5 text-white">
      <h3 className="text-7xl font-bold leading-tight">Find your movies here!</h3>
      <p className="text-base mt-6">Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads.</p>
    </div>
  )
}

function FindTimeSlot() {
  const { movies, getMoviesByTimeSlot, resetMovies } = useMovie()
  const [ startDate, setstartDate ] = useState(new Date())
  const [ endDate, setEndDate ] = useState(new Date())
  const [ searchTheatreName, setsearchTheatreName ] = useState('')

  async function filterMoviesClick() {
    if (movies.length) {
      resetMovies()
    }

    await getMoviesByTimeSlot(
      encodeURI(searchTheatreName.replaceAll(" ", "%20")),
      moment(startDate).format('YYYY-MM-DD HH:mm:ss'),
      moment(endDate).format('YYYY-MM-DD HH:mm:ss')
    )
  }

  return (
    <div className="banner-section__text-block w-3/5 text-white">
      <h3 className="text-[48px] font-bold leading-tight mb-[19px]">Search your movies here!</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="relative col-span-4 h-[54px] mb-[12px]">
          <img className="absolute left-[0.8rem] top-4" src="images/search-icon-black.svg" />
          <input
          className="rounded-[192px] bg-white focus:outline-none hover:outline-none font-normal text-[#00000073] text-[21px] pr-4 pl-[3.05rem] h-full w-full"
            placeholder="Search by theatre...."
            onBlur={(value) => setsearchTheatreName(value.target.value)}
          />
        </div>
        <div className="relative col-span-2">
          <img className="absolute top-4 left-4 z-10" src='images/calendar.svg' />
          <DatePicker
            className={'h-[54px] rounded-[192px] text-[#00000073] text-[21px] pl-[3.05rem] pr-[1rem] w-full focus:outline-none'}
            selected={startDate}
            onChange={(event) => {
              console.log("event", event)
              setstartDate(event)
            }}
            showTimeInput
            dateFormat="yyyy/mm/d - h:mm aa"
            placeholderText="Select A Start Date"
          />
        </div>
        <div className="relative col-span-2">
          <img className="absolute top-4 left-4 z-10" src='images/calendar.svg' />
          <DatePicker
            className={'h-[54px] rounded-[192px] text-[#00000073] text-[21px] pl-[3.05rem] pr-[1rem] w-full focus:outline-none'}
            selected={endDate}
            onChange={(event) => setEndDate(event)}
            showTimeInput
            dateFormat="yyyy/mm/d - h:mm aa"
            placeholderText="Select A End Date"
          />
        </div>
      </div>
      <Button onClick={filterMoviesClick} className={'mt-[19px]'}>Search</Button>
    </div>
  )
}

function FindTheaters() {
  const { movies, getMoviesByTheatre, resetMovies } = useMovie()
  const [ date, setDate ] = useState(new Date())
  const [ searchTheatreName, setsearchTheatreName ] = useState('')

  async function filterMoviesClick() {
    if (movies.length) {
      resetMovies()
    }

    await getMoviesByTheatre(encodeURI(searchTheatreName.replaceAll(" ", "%20")), moment(date).format('YYYY/MM/DD'))
  }

  return (
    <div className="banner-section__text-block w-3/5 text-white">
      <h3 className="text-[48px] font-bold leading-tight mb-[19px]">Search your movies here!</h3>
      <div className="grid grid-cols-3">
        <div className="relative col-span-2">
          <img className="absolute left-[0.8rem] top-4" src="images/search-icon-black.svg" />
          <input
          className="rounded-[192px] bg-white focus:outline-none hover:outline-none font-normal text-[#00000073] pr-4 pl-[3.05rem] h-full w-full"
            placeholder="Search by theatre...."
            onBlur={(value) => setsearchTheatreName(value.target.value)}
            required="true"
          />
        </div>
        <div className="relative col-span-1">
          <img className="absolute top-4 left-5 z-10" src='images/calendar.svg' />
          <DatePicker
            className={'h-[54px] rounded-[192px] text-[#00000073] pl-[3.05rem] pr-[1rem] ml-2.5 w-full'}
            selected={date}
            onChange={(event) => setDate(event)}
          />
        </div>
      </div>
      <Button onClick={filterMoviesClick} className={'mt-[19px]'}>Search</Button>
    </div>
  )
}