import './TotalData.css'

import { useState, useEffect } from 'react'

const TotalData = ({ socials, followers, socialId, todayFollowers, subscription, up }) => {

    const [borderStyle, setBorderStyle] = useState({})
    const [iconColor, setIconColor] = useState({})


    useEffect(() => {
        if(socials === "facebook") {
            setBorderStyle({borderTop:"4px solid hsl(208, 92%, 53%)"})
            setIconColor({color: " hsl(208, 92%, 53%)"})
        }

        if(socials === "twitter") {
            setBorderStyle({borderTop:"4px solid hsl(203, 89%, 53%)"})
            setIconColor({color: " hsl(203, 89%, 53%)"})
        }

        if(socials === "instagram") {
            setBorderStyle({borderTop:"4px solid hsl(37, 97%, 70%)"})
            setIconColor({color: " hsl(37, 97%, 70%)"})
        }

        if(socials === "youtube") {
            setBorderStyle({borderTop:"4px solid hsl(348, 97%, 39%)"})
            setIconColor({color: " hsl(348, 97%, 39%)"})
        }
    }, [])
    

    return (
        <div className='total-data-box' style={borderStyle}>
            <div className="socials">
                <i className={`bi bi-${socials}`} style={iconColor}></i>
                <p>{socialId}</p>
            </div>
            <div className="followers">
                <span id='followers-number'>{followers}</span>
                <h2 id='sub-description'>{subscription}</h2>
            </div>
            <span className="today-followers" style={up ? {color:'hsl(163, 72%, 41%)'} : {color: 'hsl(356, 69%, 56%)'}}><i class={`bi bi-caret-${up ? 'up' : 'down'}-fill`}></i>{todayFollowers}<p>Today</p></span>
        </div>
    )
}

export default TotalData