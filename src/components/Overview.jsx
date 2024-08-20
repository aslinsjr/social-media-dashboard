import './Overview.css'

import { useState, useEffect } from 'react'

const Overview = ({ socials, description, todayNumber, todayPercent, up }) => {

  const [iconColor, setIconColor] = useState({})

  useEffect(() => {
    if (socials === "facebook") {
      setIconColor({ color: " hsl(208, 92%, 53%)" })
    }

    if (socials === "twitter") {
      setIconColor({ color: " hsl(203, 89%, 53%)" })
    }

    if (socials === "instagram") {
      setIconColor({ color: " hsl(37, 97%, 70%)" })
    }

    if (socials === "youtube") {
      setIconColor({ color: " hsl(348, 97%, 39%)" })
    }
  }, [])

  return (
    <div className='overview-box'>
      <div className="inner-container">
        <p>{description}</p>
        <i className={`bi bi-${socials}`} style={iconColor}></i>
      </div>
      <div className="inner-container">
        <span id='today-number'>{todayNumber}</span>
        <p style={up ? {color:'hsl(163, 72%, 41%)'} : {color: 'hsl(356, 69%, 56%)'}}><i class={`bi bi-caret-${up ? 'up' : 'down'}-fill`}></i>{todayPercent}</p>
      </div>
    </div>
  )
}

export default Overview