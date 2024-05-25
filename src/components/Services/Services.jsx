import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg"

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services_title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services_container">
        {services_data.map((service, index) => {
            return <div key={index} className="service_format">
                <h3>{service.s_no}.</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services_readmore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        })}
      </div>
    </div>
  );
}

export default Services;
