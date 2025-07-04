import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UrlShortener from './urlshortenedwebsite';
function hello() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <UrlShortener />
    </div>
    </>
  )
}

export default hello



