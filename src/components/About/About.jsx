import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about_title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about_section">
        <div className="about_left">
            <img src={profile_img} alt="" />           
        </div>
        <div className="about_right">
            <div className="about_para">
                <ul>
                    <li>Having 3 years of experience in frontend design applications like HTML, CSS, JavaScript,React, Bootstrap, SASS, Less, and jQuery.</li>
                    <li>Having 1 year of experience as an Adobe Experience Manager (AEM).</li>
                    <li>Have 1.5 years of experience in Salesforce Marketing Cloud (SFMC).</li>
                    <li>Having 2 years of experience in email development and email journey building.</li>
                    <li>Having hands-on experience working with version-controlling tools like Git, Gitlab, and GitHubDesktop.</li>
                    <li>Having Hands-on experience with tools like Jira, Litmus, and Azure DevOps.</li>
                    <li>Having 1.5years of experience of using tools like Adobe XD, Adobe Photoshop</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
