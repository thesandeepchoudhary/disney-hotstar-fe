import React from 'react'
import './Main.css'
import Banner from '../Banner/Banner'
import Row from '../Row/Row';

const API_KEY = process.env.REACT_APP_TMDB;
const fetchDisneyOriginals = `/discover/tv?api_key=${API_KEY}&with_networks=3919`

export default function Main() {
  return (
    <div className='main'>
      <Banner />
      <Row
        id="row3"
        title="Latest & Trending"
        fetchUrl={fetchDisneyOriginals}
        isLargeRow
      />
    </div>
  )
}
