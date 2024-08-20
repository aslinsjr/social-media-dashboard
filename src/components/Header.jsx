import './Header.css'

const Header = ({handleClick}) => {
  return (
    <header>
        <div className="title-container">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
        </div>
        <div className="dark-light-btn">
            <span>Dark Mode</span>
            <button onClick={(e) => handleClick(e)}><div className="dot"></div></button>
        </div>
    </header>
  )
}

export default Header