import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "01e4f5d0-e0a7-4ff1-b6ac-7f439d8fb84a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact_title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact_section">
        <div className="contact_left">
          <h1>Let&apos;s talk</h1>
          <p>
            I&apos;m currently available to take any projects, so feel free to
            send me a message about anything that you want me to work on.
          </p>
          <div className="contact_details">
            <div className="contact_detail">
              <MdOutlineMail className="contact_icon" />{" "}
              <p>sahaavirup1998@gmail.com</p>
            </div>
            <div className="contact_detail">
              <FiPhoneCall className="contact_icon" /> <p>9564855938</p>
            </div>
            <div className="contact_detail">
              <FaLocationDot className="contact_icon" />{" "}
              <p>West Bengal, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact_right">
          <div className="form_fields">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name />
          </div>
          <div className="form_fields">
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
          </div>
          <div className="form_fields">
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="contact_submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
