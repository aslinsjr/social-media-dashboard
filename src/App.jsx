
import './App.css'

import Header from './components/Header'
import TotalData from './components/TotalData'
import Overview from './components/Overview'

function App() {

  function handleClick(e) {
    e.preventDefault()
    const dot = document.querySelector(".dot")
    const overview = document.querySelectorAll(".overview-box")
    const body = document.querySelector("body")
    const dataBox = document.querySelectorAll(".total-data-box")

    console.log(dot)
    
    dot.classList.toggle("on-off")

    body.classList.toggle("dark-theme")

    overview.forEach((element) => {
      element.classList.toggle("dark-overview")
    })

    dataBox.forEach((element) => {
      element.classList.toggle("dark-overview")
    })
  }

  return (
    <>
    <Header handleClick={handleClick}/>
    <div className="total-data-container">
      <TotalData socials={"facebook"} socialId={"@nathanf"} followers={1987} todayFollowers={12} subscription={"Followers"} up={true}/>
      <TotalData socials={"twitter"} socialId={"@nathanf"} followers={1044} todayFollowers={99} subscription={"Followers"} up={true}/>
      <TotalData socials={"instagram"} socialId={"@realnathanf"} followers={"11k"} todayFollowers={1099} subscription={"Followers"} up={true}/>
      <TotalData socials={"youtube"} socialId={"Nathan F."} followers={8239} todayFollowers={144} subscription={"Subscribers"} up={false}/>
    </div>
    <h2>Overview - Today</h2>
    <div className="overview-container">
      <Overview socials={"facebook"} description={"Page Views"} todayNumber={87} todayPercent={"3%"} up={true}/>
      <Overview socials={"facebook"} description={"Likes"} todayNumber={52} todayPercent={"2%"} up={false}/>
      <Overview socials={"instagram"} description={"Likes"} todayNumber={5462} todayPercent={"2257%"} up={true}/>
      <Overview socials={"instagram"} description={"Profile Views"} todayNumber={'52k'} todayPercent={"1375%"} />
      <Overview socials={"twitter"} description={"Retweets"} todayNumber={117} todayPercent={"303%"} up={true}/>
      <Overview socials={"twitter"} description={"Likes"} todayNumber={507} todayPercent={"553%"} up={true}/>
      <Overview socials={"youtube"} description={"Likes"} todayNumber={107} todayPercent={"19%"} up={false}/>
      <Overview socials={"youtube"} description={"Total Views"} todayNumber={1407} todayPercent={"12%"} up={false}/>
    </div>
    </>
  )
}

export default App
