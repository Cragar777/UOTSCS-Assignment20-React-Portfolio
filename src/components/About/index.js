import headshot from "../../assets/images/IMG_4269Resized.jpg"

const About = () => {
  return (
    <section className="content" id="about">  
      <h1>About Me</h1>
      <div className="about-me">
        <div>
          <p> 
            I am a full-stack web developer. 
          </p>
          <br/>
          <p>
            I have just graduated from a Full-Stack Web Development Bootcamp at The University of Toronto in November of 2021.
          </p>
          <br/>
          <p>
            My educational background is in Electronic Technology. My career path started with building computers, coordinating computer service technicians, providing software support, software based automation system integration, followed by 20 years in electrical products sales, training and support. Skilled in relationship management, B to B partnering and B to C engagement and solutions. Looking to leverage this Bootcamp experience to pivot my career into the Tech market in the area of web development.  
          </p>
        </div>
        <img src = {headshot} alt="Craig Martin" />
      </div>
    </section>
  )
}

export default About;