import React from 'react'
import { Link } from 'react-router-dom'
// import Head from './head'

const DashboardMain = () => {
  return (
    <>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/87c6394c-49c8-4872-9e89-db52ccf178ed">Go To Profile</Link>
      <Link to="/dashboard">Go To Root</Link>
    </>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
