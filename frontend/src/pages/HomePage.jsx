import React, { useState } from 'react'
import { DIV } from '../stylings/DIV'
import PageNav from '../components/PageNav'
import Neo from '../Neo/Neo'

export default function HomePage() {
  const [color, setColor] = useState('#1371d0');
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
      <PageNav />
      <Neo color={color} />
  </div>
  )
}