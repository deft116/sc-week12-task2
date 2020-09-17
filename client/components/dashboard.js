import React from 'react'
import { Link } from 'react-router-dom'
// import Head from './head'

const Dashboard = () => {
  return (
    <>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/87c6394c-49c8-4872-9e89-db52ccf178ed">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </>
  )
}

Dashboard.propTypes = {}

export default Dashboard
