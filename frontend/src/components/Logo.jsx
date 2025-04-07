import React from 'react'
import { NavLink } from 'react-router-dom'
import Neo from '../Neo/Neo'

export default function Logo() {
  return (
    <NavLink to='/'>
        <img src={<Neo />} alt=''/>
    </NavLink>
  )
}
