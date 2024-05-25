import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume_pdf from "../../assets/resume.pdf"

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I am Avirup Saha,</span> Frontend Developer based in India</h1>
      <p>Worked mainly as a front-end developer and have an experience of 3 years in HTML, CSS, SASS, Less, jQuery, Bootstrap, React JS, Email Development, AEM, Litmus. Mainly involved in designing and developing responsive applications using a mobile-first approach and involved in creating email templates.</p>
      <div className="hero_action">
        <div className="hero_connect"><AnchorLink className="anchor_link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero_resume"><a href={resume_pdf} download>My Resume</a></div>
      </div>
    </div>
  );
}

export default Hero;
