import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DashboardProfile = () => {
  const { user } = useParams()
  return (
    <>
      <div id="title">Profile</div>
      <div id="username">{user}</div>
      <Link to="/dashboard/profile/87c6394c-49c8-4872-9e89-db52ccf178ed">Go To Profile</Link>
      <Link to="/dashboard">Go To Root</Link>
    </>
  )
}

DashboardProfile.propTypes = {}

export default DashboardProfile
