import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork_title">
        <h1>My latest works</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork_container">
        {mywork_data.map((work, index) => {
            return <div className="mywork_format">
                <div className="mywork_format_heading">
                <h3>{work.w_no}.</h3>
                <h2>{work.w_name}</h2>
                </div>
                <div className="mywork_format_body">
                <ul>
                    <li>{work.w_desc1}</li>
                    <li>{work.w_desc2}</li>
                    <li><i><b>Tech Stack:</b></i> {work.tech_stack}</li>
                </ul>
                </div>
            </div>
        })}
      </div>
    </div>
  );
}

export default MyWork;
