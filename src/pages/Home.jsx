import gif from '../assets/webdeveloper.gif'

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>HARISH JS</h1>
        <p>
          A passionate Full Stack Developer with expertise in
          web development. Explore my projects and skills.
        </p>
        <a href="#about" className="btn">
          Explore
        </a>
      </div>
      <div className="gif-container">
      {/* <div className='gif-image'> */}
        <iframe title='gif' src={gif} width="100%" height="100%" frameBorder={0} style={{position:'absolute'}}></iframe>
      {/* </div> */}
      </div>
    </section>
  )
}

export default Home