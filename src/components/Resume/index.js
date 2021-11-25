import resume from "../../assets/resume/CraigResume.pdf";
import handshake from "../../assets/images/handshake.jpg";

const Resume = () => {
  return (
    <>
      <h1>Resume</h1>
      <section className="resume content">
          <p>Download my
            <a href={resume} download> resume
              <span className="icon icon-download" aria-label="download icon"></span>
            </a>
          </p>
          <section className="proficiencies">
            <div className="frontEnd">
            <img src = {handshake} alt="Handshake" />
               <ul>
              </ul>
            </div>
          </section>
      </section>
    </>
  )
}

export default Resume;