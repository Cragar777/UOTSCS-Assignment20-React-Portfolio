const Footer = () => {
    return (
      <footer>
        <section className="footer-section">
          <ul className="footer-links">          
            <li>
                <a href="https://linkedin.com/in/craigtmartin/" target="_blank">LinkedIn
                  {/* <span className="icon icon-LinkedIn.png" aria-label="linkedin profile link"></span> */}
                </a>
            </li>
            <li>
                <a href="https://github.com/Cragar777" target="_blank">GitHub
                {/* <a href="https://github.com/Cragar777" target="_blank" rel="noreferrer">   */}
                  {/* <span className="icon icon-GitHub.png" aria-label="github profile link"></span> */}
                </a>
            </li>
            <li>
                <a href="mailto: craigtmartin@yahoo.com" target="_blank">Email
                {/* <a href="https://github.com/Cragar777" target="_blank" rel="noreferrer">   */}
                  {/* <span className="icon icon-GitHub.png" aria-label="github profile link"></span> */}
                </a>
            </li>
          </ul>
          <p>Created by Craig Martin.</p>
        </section>
      </footer>
    )
  }
  
  export default Footer;