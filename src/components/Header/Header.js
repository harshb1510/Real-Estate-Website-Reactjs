import "./header.css"

const Header =()=>{
  return (
    <section className="h-wrapper">
    <div className=" flexCenter paddings innerWidth h-container">
      <img src="./logo.png" alt="logo" width={100} className="header-img"/>
      <div className="flexCenter h-menu">
        <a>Residencies</a>
        <a>Our value</a>
        <a>Contact Us</a>
        <a>Get Started</a>
        <button className="button">
        <a>Contact</a>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Header;