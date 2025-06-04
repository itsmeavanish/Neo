import React, { useState } from 'react'
import { DIV } from '../stylings/DIV'
import PageNav from '../components/PageNav'
import Neo from '../Neo/Neo'

export default function HomePage() {
  const [color, setColor] = useState('#1371d0');
  return (
    <div style={{height: '100vh', width: '100vw', overflow: 'hidden'}}>
      <Neo color={color} />
  </div>
  )
}