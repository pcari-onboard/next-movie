import { useState } from 'react'
import styles from '../styles/components/Banner.module.css'
import { DatePicker } from 'react-rainbow-components'
import Button from 'components/button'

export default function Banner({ homeMovies, findMovies, findTheaters }) {
  // const [date, setDate] = useState('')
  return (
    <section className={`${styles.bannerSection} py-36 lg:px-[103px]`}>
      <div className="flex items-center justify-items-stretch justify-between px-[111px]">
        <img src="images/play-button.png" />
        { homeMovies &&  <HomeMovies /> }
        { findMovies &&  <FindMovies /> }
      </div>
    </section>
  )
}

function HomeMovies() {
  return (
    <div className="banner-section__text-block w-1/2 text-white">
      <h3 className="text-7xl font-bold leading-tight">Find your movies here!</h3>
      <p className="text-base mt-6">Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads.</p>
    </div>
  )
}

function FindMovies({ dateValue, onChange}) {
  // const [value, setValue] = useState('')


  return (
    <div className="banner-section__text-block w-1/2 text-white">
      <h3 className="text-[48px] font-bold leading-tight mb-[19px]">Search your movies here!</h3>
      <div className="grid grid-cols-3">
        <div className="relative col-span-2">
          <img className="absolute left-[0.8rem] top-4" src="images/search-icon-black.svg" />
          <input className="rounded-[192px] bg-white focus:outline-none hover:outline-none font-normal text-[#00000073] pr-4 pl-[3.05rem] h-full w-full"
            placeholder="Search by theatre...."
          />
        </div>
        {/* <DatePicker
          className={`text-white text-[21px] col-span-1 ml-2.5 ${styles.calendarStyle}`}
          value={dateValue}
          onChange={onChange}
          icon={<img src="images/calendar.svg" />}
          placeholder="Select a date"
        /> */}

      </div>
      <Button onClick={() => console.log('boom')} className={'mt-[19px]'}>Search</Button>
    </div>
  )
}