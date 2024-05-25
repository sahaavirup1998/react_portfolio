import { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      <h1 className="nav_heading">Avirup</h1>
      <img src={menu_open} onClick={openMenu} alt="" className="nav_mob_open" />
      <ul ref={menuRef} className="nav_menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav_mob_close" />
        <li><AnchorLink className="anchor_link" offset={50} href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt="underline_img" />:<></>}</li>
        <li><AnchorLink className="anchor_link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt="underline_img" />:<></>}</li>
        <li><AnchorLink className="anchor_link" offset={50} href="#skills"><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<img src={underline} alt="underline_img" />:<></>}</li>
        <li><AnchorLink className="anchor_link" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt="underline_img" />:<></>}</li>
        <li><AnchorLink className="anchor_link" offset={50} href="#work"><p onClick={() => setMenu("work")}>Projects</p></AnchorLink>{menu==="work"?<img src={underline} alt="underline_img" />:<></>}</li>
        
      </ul>
      <div className="nav_connect"><AnchorLink className="anchor_link" offset={50} href="#contact">Contact me</AnchorLink></div>
    </div>
  );
}

export default Navbar;
