import "./Skill.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skill = () => {
  return (
    <div id="skills" className="skill">
      <div className="skill_title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skill_detail_section">
        <div className="skill_details">
          <p>HTML5</p>
          <hr style={{ width: "85%" }} />
        </div>
        <div className="skill_details">
          <p>CSS3</p>
          <hr style={{ width: "85%" }} />
        </div>
        <div className="skill_details">
          <p>JavaScript</p>
          <hr style={{ width: "70%" }} />
        </div>
        <div className="skill_details">
          <p>React Js</p>
          <hr style={{ width: "75%" }} />
        </div>
        <div className="skill_details">
          <p>Bootstrap</p>
          <hr style={{ width: "75%" }} />
        </div>
        <div className="skill_details">
          <p>SASS & less</p>
          <hr style={{ width: "90%" }} />
        </div>
        <div className="skill_details">
          <p>Tailwind CSS</p>
          <hr style={{ width: "80%" }} />
        </div>
        <div className="skill_details">
          <p>SFMC</p>
          <hr style={{ width: "60%" }} />
        </div>
        <div className="skill_details">
          <p>Jira</p>
          <hr style={{ width: "70%" }} />
        </div>
        <div className="skill_details">
          <p>Litmus</p>
          <hr style={{ width: "90%" }} />
        </div>
        <div className="skill_details">
          <p>Git, Gitlab </p>
          <hr style={{ width: "80%" }} />
        </div>
        <div className="skill_details">
          <p>AEM</p>
          <hr style={{ width: "65%" }} />
        </div>
      </div>
      <div className="achivement_section">
        <div className="achivements">
          <h1>3</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achivements">
          <h1>7</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achivements">
          <h1>8</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
